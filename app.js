/**
 * CCGS STEM Innovation & Hardware Procurement Dashboard 2026
 * Master Application Controller
 */

// Application State
let projects = [];
let activeTab = 'matrix';
let activeViewMode = 'grid'; // 'grid' | 'table'
let currentInspectProject = null;
let categoryChart = null;
let budgetChart = null;
let simplifiedMode = localStorage.getItem('CCGS_SIMPLIFIED_MODE') !== 'false'; // default ON
let lastChatMatchedIds = [];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadProjectsData();
  setupNavigation();
  setupFilters();
  setupModals();
  setupFormHandler();
  setupSimplifiedMode();
  setupChatbot();
  renderGlossary();
  renderProcurementCatalog();
  renderDashboard();
}

/**
 * Load projects from localStorage or default data.js
 */
function loadProjectsData() {
  const saved = localStorage.getItem('CCGS_PROJECTS_2026');
  if (saved) {
    try {
      projects = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse localStorage data, resetting to default', e);
      projects = [...(window.ALL_PROJECTS_DATA || [])];
    }
  } else {
    projects = [...(window.ALL_PROJECTS_DATA || [])];
    saveProjectsData();
  }
}

function saveProjectsData() {
  localStorage.setItem('CCGS_PROJECTS_2026', JSON.stringify(projects));
}

function resetToDefault() {
  if (confirm('Are you sure you want to reset all projects back to the original spreadsheet data? Any custom added projects will be reset.')) {
    localStorage.removeItem('CCGS_PROJECTS_2026');
    projects = [...(window.ALL_PROJECTS_DATA || [])];
    saveProjectsData();
    populateCategoryFilter();
    renderDashboard();
    if (activeTab === 'analytics') renderAnalytics();
  }
}

/**
 * Setup Main Nav Tabs
 */
function setupNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  document.getElementById('btn-reset-data').addEventListener('click', resetToDefault);
  document.getElementById('btn-export-data').addEventListener('click', exportDataset);
}

function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.getAttribute('data-tab') === tabId) {
      t.classList.add('border-brand-600', 'text-brand-700', 'active');
      t.classList.remove('border-transparent', 'text-slate-600');
    } else {
      t.classList.remove('border-brand-600', 'text-brand-700', 'active');
      t.classList.add('border-transparent', 'text-slate-600');
    }
  });

  document.querySelectorAll('.tab-pane').forEach(p => {
    if (p.id === `tab-content-${tabId}`) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });

  if (tabId === 'analytics') {
    renderAnalytics();
  }

  lucide.createIcons();
}

/**
 * Setup Multi-Facet Filters & Search
 */
function setupFilters() {
  populateCategoryFilter();

  document.getElementById('search-input').addEventListener('input', renderDashboard);
  document.getElementById('filter-category').addEventListener('change', renderDashboard);
  document.getElementById('filter-school').addEventListener('change', renderDashboard);
  document.getElementById('filter-type').addEventListener('change', renderDashboard);
  document.getElementById('filter-status').addEventListener('change', renderDashboard);
  document.getElementById('filter-sort').addEventListener('change', renderDashboard);

  document.getElementById('btn-clear-filters').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('filter-category').value = 'ALL';
    document.getElementById('filter-school').value = 'ALL';
    document.getElementById('filter-type').value = 'ALL';
    document.getElementById('filter-status').value = 'ALL';
    document.getElementById('filter-sort').value = 'readiness-desc';
    renderDashboard();
  });

  // View Mode Toggles
  const btnGrid = document.getElementById('view-mode-grid');
  const btnTable = document.getElementById('view-mode-table');

  btnGrid.addEventListener('click', () => {
    activeViewMode = 'grid';
    btnGrid.classList.add('bg-white', 'shadow-xs', 'text-slate-800');
    btnGrid.classList.remove('text-slate-500');
    btnTable.classList.remove('bg-white', 'shadow-xs', 'text-slate-800');
    btnTable.classList.add('text-slate-500');
    document.getElementById('projects-grid-view').classList.remove('hidden');
    document.getElementById('projects-table-view').classList.add('hidden');
  });

  btnTable.addEventListener('click', () => {
    activeViewMode = 'table';
    btnTable.classList.add('bg-white', 'shadow-xs', 'text-slate-800');
    btnTable.classList.remove('text-slate-500');
    btnGrid.classList.remove('bg-white', 'shadow-xs', 'text-slate-800');
    btnGrid.classList.add('text-slate-500');
    document.getElementById('projects-table-view').classList.remove('hidden');
    document.getElementById('projects-grid-view').classList.add('hidden');
  });

  // Procurement Search
  const procSearch = document.getElementById('procure-search');
  if (procSearch) {
    procSearch.addEventListener('input', renderProcurementCatalog);
  }
}

function populateCategoryFilter() {
  const catSelect = document.getElementById('filter-category');
  const cats = new Set();
  projects.forEach(p => {
    if (p.category) cats.add(p.category.trim());
    if (p.subCategories) {
      p.subCategories.forEach(sc => cats.add(sc.trim()));
    }
  });

  catSelect.innerHTML = '<option value="ALL">All Categories (' + cats.size + ')</option>';
  Array.from(cats).sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    catSelect.appendChild(opt);
  });
}

/**
 * Filter & Sort Projects
 */
function getFilteredProjects() {
  const query = (document.getElementById('search-input').value || '').toLowerCase().trim();
  const cat = document.getElementById('filter-category').value;
  const school = document.getElementById('filter-school').value;
  const type = document.getElementById('filter-type').value;
  const status = document.getElementById('filter-status').value;
  const sort = document.getElementById('filter-sort').value;

  return projects.filter(p => {
    // School Filter
    if (school !== 'ALL' && p.school !== school) return false;

    // Type Filter
    if (type !== 'ALL') {
      if (!p.prototypeType || !p.prototypeType.toLowerCase().includes(type.toLowerCase())) {
        return false;
      }
    }

    // Status Filter
    if (status !== 'ALL') {
      if (!p.status || !p.status.toLowerCase().includes(status.toLowerCase())) {
        return false;
      }
    }

    // Category Filter
    if (cat !== 'ALL') {
      const matchPrimary = p.category && p.category.toLowerCase() === cat.toLowerCase();
      const matchSub = p.subCategories && p.subCategories.some(s => s.toLowerCase() === cat.toLowerCase());
      if (!matchPrimary && !matchSub) return false;
    }

    // Query Search
    if (query) {
      const textToSearch = [
        p.name,
        p.lead,
        (p.members || []).join(' '),
        p.category,
        p.school,
        p.problem,
        p.solution,
        (p.techStack || []).join(' '),
        p.specs ? Object.values(p.specs).join(' ') : ''
      ].join(' ').toLowerCase();

      if (!textToSearch.includes(query)) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sort === 'readiness-desc') {
      const sA = (a.aiAnalysis && a.aiAnalysis.readinessScore) || 50;
      const sB = (b.aiAnalysis && b.aiAnalysis.readinessScore) || 50;
      return sB - sA;
    } else if (sort === 'budget-desc') {
      const bA = (a.budget && a.budget.prototypeCost) || 0;
      const bB = (b.budget && b.budget.prototypeCost) || 0;
      return bB - bA;
    } else if (sort === 'budget-asc') {
      const bA = (a.budget && a.budget.prototypeCost) || 0;
      const bB = (b.budget && b.budget.prototypeCost) || 0;
      return bA - bB;
    } else if (sort === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

/**
 * Render Master Dashboard (KPIs, Grid, Table)
 */
function renderDashboard() {
  updateKPIs();

  const filtered = getFilteredProjects();
  document.getElementById('filtered-count').textContent = filtered.length;
  document.getElementById('tab-count-projects').textContent = projects.length;

  renderGridView(filtered);
  renderTableView(filtered);

  lucide.createIcons();
}

function updateKPIs() {
  document.getElementById('kpi-total-projects').textContent = projects.length;

  const hardwareCount = projects.filter(p => p.prototypeType && (p.prototypeType.includes('Model') || p.prototypeType.includes('Combined'))).length;
  document.getElementById('kpi-hardware-models').textContent = hardwareCount;

  const softwareCount = projects.filter(p => p.prototypeType && (p.prototypeType.includes('App') || p.prototypeType.includes('Web'))).length;
  document.getElementById('kpi-software-apps').textContent = softwareCount;

  const totalBudget = projects.reduce((acc, p) => acc + ((p.budget && p.budget.prototypeCost) || 0), 0);
  document.getElementById('kpi-total-budget').textContent = totalBudget.toLocaleString('en-IN');

  const awardCount = projects.filter(p => p.achievements && p.achievements.length > 3 && !p.achievements.toLowerCase().includes('none')).length;
  document.getElementById('kpi-national-awards').textContent = awardCount;

  const avgReadiness = Math.round(projects.reduce((acc, p) => acc + ((p.aiAnalysis && p.aiAnalysis.readinessScore) || 75), 0) / (projects.length || 1));
  document.getElementById('kpi-avg-readiness').textContent = `${avgReadiness}%`;
}

/**
 * Render Project Cards (Grid View)
 */
function renderGridView(filtered) {
  const container = document.getElementById('projects-grid-view');
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
        <i data-lucide="inbox" class="w-10 h-10 text-slate-300 mx-auto mb-2"></i>
        <h4 class="text-sm font-bold text-slate-700">No STEM projects match your active filters</h4>
        <p class="text-xs text-slate-400 mt-1">Try resetting the category, campus or search query.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all p-5 flex flex-col justify-between group";

    // Campus styling
    let schoolBadgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
    if (p.school === 'CCHS') schoolBadgeColor = "bg-purple-100 text-purple-800 border-purple-200";
    if (p.school === 'CCWS') schoolBadgeColor = "bg-blue-100 text-blue-800 border-blue-200";

    // Readiness score
    const readiness = (p.aiAnalysis && p.aiAnalysis.readinessScore) || 75;
    let scoreRing = "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (readiness < 85) scoreRing = "text-blue-600 bg-blue-50 border-blue-200";
    if (readiness < 70) scoreRing = "text-amber-600 bg-amber-50 border-amber-200";

    const budgetVal = (p.budget && p.budget.prototypeCost) ? `₹${p.budget.prototypeCost.toLocaleString('en-IN')}` : '₹500+';

    card.innerHTML = `
      <div>
        <!-- Top Tags Row -->
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-2 py-0.5 text-[11px] font-bold uppercase rounded-md border ${schoolBadgeColor}">${p.school}</span>
            <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 truncate max-w-[140px]">${p.category || 'STEM'}</span>
          </div>
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-bold ${scoreRing}" title="AI Pre-Flight Readiness Audit">
            <i data-lucide="sparkles" class="w-3 h-3"></i>
            <span>${readiness}%</span>
          </div>
        </div>

        <!-- Project Title -->
        <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-700 transition-colors line-clamp-1 mb-1">
          ${p.name}
        </h3>

        <!-- Lead & Grade -->
        <div class="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1">
          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
          <span>${p.lead || 'Student Lead'}</span>
          <span class="text-slate-300">·</span>
          <span>${p.grade || 'Senior STEM'}</span>
        </div>

        <!-- Problem / Solution snippet -->
        <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
          ${p.solution || p.problem || 'Innovative STEM solution designed for school ideathon and national exhibitions.'}
        </p>

        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-1 mb-4">
          ${(p.techStack || ['Arduino / ESP32', 'Sensors', 'IoT']).slice(0, 3).map(tech => `
            <span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">${tech}</span>
          `).join('')}
          ${(p.techStack && p.techStack.length > 3) ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-400">+${p.techStack.length - 3}</span>` : ''}
        </div>
      </div>

      <!-- Card Bottom Footer -->
      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div>
          <span class="text-[10px] uppercase font-semibold text-slate-400 block">${simplifiedMode ? 'Parts Cost' : 'Prototype BOM'}</span>
          <span class="font-mono font-bold text-slate-900 text-sm">${budgetVal}</span>
        </div>

        <div class="flex items-center gap-1.5">
          ${p.appUrl ? `
            <a href="${p.appUrl}" target="_blank" class="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Open Web/App Link">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          ` : ''}
          <button onclick="inspectProject('${p.id}')" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-brand-600 text-white font-semibold transition-all">
            <span>${simplifiedMode ? 'Inspect Parts' : 'Inspect BOM'}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Render Project Table View
 */
function renderTableView(filtered) {
  const tbody = document.getElementById('projects-table-body');
  tbody.innerHTML = '';

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";

    const budgetVal = (p.budget && p.budget.prototypeCost) ? `₹${p.budget.prototypeCost.toLocaleString('en-IN')}` : '₹500+';
    const readiness = (p.aiAnalysis && p.aiAnalysis.readinessScore) || 75;

    tr.innerHTML = `
      <td class="py-3 px-4">
        <div class="font-bold text-slate-900">${p.name}</div>
        <div class="text-[11px] text-slate-400 font-normal">Lead: ${p.lead} · ${p.members ? p.members.length : 1} members</div>
      </td>
      <td class="py-3 px-4">
        <span class="font-semibold text-slate-700">${p.school}</span>
        <div class="text-[11px] text-slate-400 font-normal">${p.grade}</div>
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">${p.category}</span>
      </td>
      <td class="py-3 px-4">
        <span class="font-medium text-slate-600">${p.prototypeType || 'Working Model'}</span>
      </td>
      <td class="py-3 px-4 font-mono font-bold text-slate-900">
        ${budgetVal}
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded-full font-bold text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200">
          ${readiness}%
        </span>
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="inspectProject('${p.id}')" class="px-3 py-1 rounded-md bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-700 font-semibold transition-colors">
          Inspect
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * Inspect Project Modal Logic
 */
function inspectProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  currentInspectProject = p;

  // Header Elements
  document.getElementById('modal-project-name').textContent = p.name;
  document.getElementById('modal-school-badge').textContent = p.school;
  document.getElementById('modal-category-badge').textContent = p.category;
  document.getElementById('modal-status-badge').textContent = p.status || 'Active';
  document.getElementById('modal-team-info').textContent = `Team Leader: ${p.lead} · ${p.grade} · Members: ${(p.members || []).join(', ')}`;

  // Tab 1: Overview
  document.getElementById('modal-problem').textContent = p.problem || 'Specific problem statement details documented in project ideation deck.';
  document.getElementById('modal-solution').textContent = p.solution || 'Technical engineering solution applying sensors, microcontrollers, and automation.';
  document.getElementById('modal-achievements').textContent = p.achievements || 'Participating in School Ideathon & STEM Exhibition 2026.';

  const linksContainer = document.getElementById('modal-links');
  linksContainer.innerHTML = '';
  if (p.appUrl) {
    linksContainer.innerHTML += `
      <a href="${p.appUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-semibold hover:bg-blue-100 transition-colors">
        <i data-lucide="globe" class="w-3.5 h-3.5"></i>
        <span>Live Web / App</span>
      </a>
    `;
  }
  if (p.pptUrl) {
    linksContainer.innerHTML += `
      <a href="${p.pptUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-semibold hover:bg-purple-100 transition-colors">
        <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
        <span>Presentation Deck</span>
      </a>
    `;
  }

  // Tab 2: Specs
  const specsTable = document.getElementById('modal-specs-table');
  specsTable.innerHTML = '';
  const specs = p.specs || {
    mcu: "ESP32 / Arduino Compatible Controller",
    sensors: "Analog & Digital Sensing Array",
    actuators: "Relay / Servo / Motor Drivers",
    power: "5V / 12V Regulated DC Supply",
    connectivity: "Wi-Fi / BLE / Offline Logic",
    chassis: "3D Printed PLA / Project Enclosure"
  };

  const specLabels = simplifiedMode ? [
    { key: 'mcu', label: 'Brain (Microchip / MCU)' },
    { key: 'sensors', label: 'Detectors (Sensors)' },
    { key: 'actuators', label: 'Motors & Switches (Actuators)' },
    { key: 'power', label: 'Power & Battery Supply' },
    { key: 'connectivity', label: 'Wi-Fi & Bluetooth (IoT)' },
    { key: 'chassis', label: 'Outer Box & Casing' }
  ] : [
    { key: 'mcu', label: 'Microcontroller / SoC' },
    { key: 'sensors', label: 'Sensory Array' },
    { key: 'actuators', label: 'Actuators & Drivers' },
    { key: 'power', label: 'Power Supply' },
    { key: 'connectivity', label: 'IoT / Wireless Protocol' },
    { key: 'chassis', label: 'Casing & Structural Frame' }
  ];

  specLabels.forEach(sl => {
    specsTable.innerHTML += `
      <tr>
        <td class="py-2.5 px-4 font-bold text-slate-700 w-1/3 bg-slate-50/60">${sl.label}</td>
        <td class="py-2.5 px-4 font-mono text-slate-800">${specs[sl.key] || 'Not specified'}</td>
      </tr>
    `;
  });

  // Tab 3: BOM with Quartz Components
  renderModalBOM(p);

  // Tab 4: AI Analysis
  const ai = p.aiAnalysis || {
    readinessScore: 80,
    competitionPotential: "National Level (CBSE / Ideathon)",
    pitchStrength: "Solid practical thesis with demonstrable prototype value.",
    patentViability: "Medium",
    risks: ["Component availability during rapid iteration.", "Power budget optimization."],
    nextSteps: ["Finalize wireframe prototype on breadboard.", "Assemble modular casing."]
  };

  document.getElementById('modal-ai-score').textContent = `${ai.readinessScore}%`;
  document.getElementById('modal-ai-comp').textContent = ai.competitionPotential;
  document.getElementById('modal-ai-patent').textContent = ai.patentViability;
  document.getElementById('modal-ai-pitch').textContent = ai.pitchStrength;

  const risksUl = document.getElementById('modal-ai-risks');
  risksUl.innerHTML = (ai.risks || []).map(r => `<li>${r}</li>`).join('');

  const nextOl = document.getElementById('modal-ai-nextsteps');
  nextOl.innerHTML = (ai.nextSteps || []).map(ns => `<li>${ns}</li>`).join('');

  // Switch to Overview tab by default
  switchModalTab('overview');

  document.getElementById('modal-project-inspect').classList.remove('hidden');
  lucide.createIcons();
}

function renderModalBOM(p) {
  const bomTable = document.getElementById('modal-bom-table');
  bomTable.innerHTML = '';

  const bom = (p.budget && p.budget.bom) ? p.budget.bom : [
    { name: "Controller Dev Board", spec: "ESP32 or Arduino Uno", qty: 1, price: 380, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-development-board", altVendor: "Robu.in", altUrl: "https://robu.in" },
    { name: "Sensing Transducers", spec: "Calibrated analog sensors", qty: 2, price: 150, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com", altVendor: "Robu.in", altUrl: "https://robu.in" },
    { name: "Power & Driver Assembly", spec: "Relay & 12V 2A power adapter", qty: 1, price: 350, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com", altVendor: "Robu.in", altUrl: "https://robu.in" }
  ];

  let totalCost = 0;
  bom.forEach(item => {
    const subtotal = (item.price || 0) * (item.qty || 1);
    totalCost += subtotal;

    bomTable.innerHTML += `
      <tr>
        <td class="py-2.5 px-3 font-semibold text-slate-900">${item.name}</td>
        <td class="py-2.5 px-3 text-slate-500 font-normal">${item.spec}</td>
        <td class="py-2.5 px-3 font-mono font-medium">${item.qty}</td>
        <td class="py-2.5 px-3 font-mono">₹${item.price}</td>
        <td class="py-2.5 px-3 font-mono font-bold text-slate-900">₹${subtotal}</td>
        <td class="py-2.5 px-3 text-right">
          <a href="${item.vendorUrl}" target="_blank" class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 font-semibold transition-colors">
            <i data-lucide="shopping-cart" class="w-3 h-3 text-orange-600"></i>
            <span>Buy (${item.vendor || 'Quartz Components'})</span>
          </a>
        </td>
      </tr>
    `;
  });

  document.getElementById('modal-bom-total').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
}

function closeInspectModal() {
  document.getElementById('modal-project-inspect').classList.add('hidden');
}

function setupModals() {
  document.getElementById('modal-close-btn').addEventListener('click', closeInspectModal);

  // Modal Internal Tab Switching
  const modalTabs = document.querySelectorAll('.modal-tab');
  modalTabs.forEach(mt => {
    mt.addEventListener('click', () => {
      const target = mt.getAttribute('data-modaltab');
      switchModalTab(target);
    });
  });

  // Open New Project Button
  document.getElementById('btn-open-new-project').addEventListener('click', () => {
    openProjectForm();
  });

  document.getElementById('form-modal-close-btn').addEventListener('click', closeFormModal);

  document.getElementById('modal-edit-btn').addEventListener('click', () => {
    if (currentInspectProject) {
      closeInspectModal();
      openProjectForm(currentInspectProject);
    }
  });
}

function switchModalTab(tabKey) {
  document.querySelectorAll('.modal-tab').forEach(t => {
    if (t.getAttribute('data-modaltab') === tabKey) {
      t.classList.add('border-brand-600', 'text-brand-700', 'active');
      t.classList.remove('border-transparent');
    } else {
      t.classList.remove('border-brand-600', 'text-brand-700', 'active');
      t.classList.add('border-transparent');
    }
  });

  document.querySelectorAll('[id^="modaltab-pane-"]').forEach(pane => {
    if (pane.id === `modaltab-pane-${tabKey}`) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });

  lucide.createIcons();
}

/**
 * Open Voice Bridge BOM from Hub Tab
 */
function openVoiceBridgeBOM() {
  inspectProject('voice-bridge');
  switchModalTab('bom');
}

/**
 * Component Procurement Center Directory
 */
function renderProcurementCatalog() {
  const tbody = document.getElementById('procurement-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const query = (document.getElementById('procure-search')?.value || '').toLowerCase();
  const catalog = window.COMPONENT_PROCUREMENT_CATALOG || [];

  const filtered = catalog.filter(c => {
    return c.name.toLowerCase().includes(query) || c.category.toLowerCase().includes(query);
  });

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-3 font-semibold text-slate-900">${item.name}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">${item.category}</span>
      </td>
      <td class="py-3 px-3 font-mono text-slate-800">${item.price}</td>
      <td class="py-3 px-3">
        <a href="${item.quartzUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 font-semibold transition-colors">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          <span>Quartz Components</span>
        </a>
      </td>
      <td class="py-3 px-3">
        <a href="${item.robuUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 font-medium transition-colors">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          <span>Robu.in</span>
        </a>
      </td>
      <td class="py-3 px-3">
        <span class="inline-flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>${item.stock}</span>
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  lucide.createIcons();
}

/**
 * Cohort Analytics & Charts (Tab 4)
 */
function renderAnalytics() {
  renderCategoryChart();
  renderBudgetChart();
  renderAnalyticsTable();
}

function renderCategoryChart() {
  const ctx = document.getElementById('chart-categories');
  if (!ctx) return;

  const counts = {};
  projects.forEach(p => {
    const c = p.category || 'Other';
    counts[c] = (counts[c] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = Object.values(counts);

  if (categoryChart) categoryChart.destroy();

  categoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899', '#06b6d4',
          '#6366f1', '#14b8a6', '#f97316', '#84cc16', '#e11d48', '#64748b'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right', labels: { boxWidth: 12, font: { size: 10 } } }
      }
    }
  });
}

function renderBudgetChart() {
  const ctx = document.getElementById('chart-budgets');
  if (!ctx) return;

  // Top 8 projects with highest budget
  const sorted = [...projects].filter(p => p.budget && p.budget.prototypeCost > 0)
    .sort((a, b) => b.budget.prototypeCost - a.budget.prototypeCost)
    .slice(0, 8);

  const labels = sorted.map(p => p.name.length > 18 ? p.name.substring(0, 16) + '..' : p.name);
  const data = sorted.map(p => p.budget.prototypeCost);

  if (budgetChart) budgetChart.destroy();

  budgetChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Prototype Cost (₹ INR)',
        data: data,
        backgroundColor: '#3b82f6',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, ticks: { font: { size: 10 } } },
        x: { ticks: { font: { size: 9 }, maxRotation: 45 } }
      }
    }
  });
}

function renderAnalyticsTable() {
  const tbody = document.getElementById('analytics-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const sorted = [...projects].sort((a, b) => {
    const sA = (a.aiAnalysis && a.aiAnalysis.readinessScore) || 50;
    const sB = (b.aiAnalysis && b.aiAnalysis.readinessScore) || 50;
    return sB - sA;
  });

  sorted.forEach(p => {
    const ai = p.aiAnalysis || {
      readinessScore: 75,
      competitionPotential: "Regional / Interschool",
      patentViability: "Medium",
      commercializationScore: 70,
      nextSteps: ["Complete breadboard hardware."]
    };

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-2.5 px-3 font-semibold text-slate-900">${p.name}</td>
      <td class="py-2.5 px-3 font-medium">${p.school}</td>
      <td class="py-2.5 px-3">
        <span class="px-2 py-0.5 rounded font-bold bg-purple-50 text-purple-700 border border-purple-200">
          ${ai.readinessScore}%
        </span>
      </td>
      <td class="py-2.5 px-3 text-slate-600">${ai.competitionPotential}</td>
      <td class="py-2.5 px-3 font-semibold text-emerald-700">${ai.patentViability}</td>
      <td class="py-2.5 px-3 font-mono font-bold">${ai.commercializationScore || 80}/100</td>
      <td class="py-2.5 px-3 text-slate-500 font-normal text-[11px] truncate max-w-xs">
        ${(ai.nextSteps && ai.nextSteps[0]) || 'Finalize testing.'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * Add / Edit Project Form Handling
 */
function openProjectForm(p = null) {
  const form = document.getElementById('project-form');
  form.reset();

  if (p) {
    document.getElementById('form-modal-title').textContent = 'Edit STEM Project';
    document.getElementById('form-project-id').value = p.id;
    document.getElementById('form-name').value = p.name || '';
    document.getElementById('form-school').value = p.school || 'CCIS';
    document.getElementById('form-grade').value = p.grade || '';
    document.getElementById('form-category').value = p.category || '';
    document.getElementById('form-type').value = p.prototypeType || 'Working Model';
    document.getElementById('form-lead').value = p.lead || '';
    document.getElementById('form-members').value = (p.members || []).join(', ');
    document.getElementById('form-mentors').value = (p.mentors || []).join(', ');
    document.getElementById('form-budget').value = (p.budget && p.budget.prototypeCost) || '';
    document.getElementById('form-problem').value = p.problem || '';
    document.getElementById('form-solution').value = p.solution || '';
    document.getElementById('form-ppt').value = p.pptUrl || '';
    document.getElementById('form-app').value = p.appUrl || '';
    document.getElementById('form-tech').value = (p.techStack || []).join(', ');
  } else {
    document.getElementById('form-modal-title').textContent = 'Add New STEM Project';
    document.getElementById('form-project-id').value = '';
  }

  document.getElementById('modal-project-form').classList.remove('hidden');
}

function closeFormModal() {
  document.getElementById('modal-project-form').classList.add('hidden');
}

function setupFormHandler() {
  const form = document.getElementById('project-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('form-project-id').value;
    const name = document.getElementById('form-name').value.trim();
    const school = document.getElementById('form-school').value;
    const grade = document.getElementById('form-grade').value.trim();
    const category = document.getElementById('form-category').value.trim();
    const prototypeType = document.getElementById('form-type').value;
    const lead = document.getElementById('form-lead').value.trim();
    const members = document.getElementById('form-members').value.split(',').map(m => m.trim()).filter(Boolean);
    const mentors = document.getElementById('form-mentors').value.split(',').map(m => m.trim()).filter(Boolean);
    const budget = parseFloat(document.getElementById('form-budget').value) || 1500;
    const problem = document.getElementById('form-problem').value.trim();
    const solution = document.getElementById('form-solution').value.trim();
    const pptUrl = document.getElementById('form-ppt').value.trim();
    const appUrl = document.getElementById('form-app').value.trim();
    const techStack = document.getElementById('form-tech').value.split(',').map(t => t.trim()).filter(Boolean);

    if (id) {
      // Edit existing
      const idx = projects.findIndex(item => item.id === id);
      if (idx !== -1) {
        projects[idx] = {
          ...projects[idx],
          name, school, grade, category, prototypeType, lead, members, mentors,
          problem, solution, pptUrl, appUrl, techStack,
          budget: {
            ...projects[idx].budget,
            prototypeCost: budget
          }
        };
      }
    } else {
      // Create new
      const newId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
      const newProj = {
        id: newId,
        name, school, grade, category, prototypeType, lead, members, mentors,
        status: "In Progress",
        achievements: "New Innovation Entry",
        problem, solution, pptUrl, appUrl, techStack,
        budget: {
          prototypeCost: budget,
          batchCost: Math.round(budget * 0.55),
          bom: [
            {
              name: "Microcontroller Board",
              spec: "ESP32 or Arduino Compatible",
              qty: 1,
              price: 380,
              vendor: "Quartz Components",
              vendorUrl: "https://quartzcomponents.com/products/esp32-development-board",
              altVendor: "Robu.in",
              altUrl: "https://robu.in"
            }
          ]
        },
        aiAnalysis: {
          readinessScore: 78,
          competitionPotential: "National Level (Ideathon Candidate)",
          pitchStrength: "Novel student entry with defined problem and architecture.",
          patentViability: "Medium",
          commercializationScore: 80,
          risks: ["Needs prototype validation."],
          nextSteps: ["Order initial BOM from Quartz Components.", "Assemble functional breadboard prototype."]
        }
      };
      projects.unshift(newProj);
    }

    saveProjectsData();
    closeFormModal();
    populateCategoryFilter();
    renderDashboard();
    if (activeTab === 'analytics') renderAnalytics();
  });
}

/**
 * Export Dataset as JSON
 */
function exportDataset() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `CCGS_STEM_Projects_Export_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * ==============================================================
 * SIMPLIFIED TERMINOLOGY & GLOSSARY JARGON BUSTER
 * ==============================================================
 */
function setupSimplifiedMode() {
  const btn = document.getElementById('btn-toggle-simplified');
  if (btn) {
    btn.addEventListener('click', toggleSimplifiedMode);
  }
  updateSimplifiedModeUI();
}

function toggleSimplifiedMode() {
  simplifiedMode = !simplifiedMode;
  localStorage.setItem('CCGS_SIMPLIFIED_MODE', simplifiedMode ? 'true' : 'false');
  updateSimplifiedModeUI();
  renderDashboard();
  if (currentInspectProject) {
    inspectProject(currentInspectProject.id);
  }
}

function updateSimplifiedModeUI() {
  const label = document.getElementById('simplified-mode-label');
  const btn = document.getElementById('btn-toggle-simplified');
  if (!label || !btn) return;

  if (simplifiedMode) {
    label.textContent = "Plain English: ON";
    btn.className = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold transition-colors";
  } else {
    label.textContent = "Technical Mode";
    btn.className = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium transition-colors";
  }
}

function openGlossaryModal() {
  const modal = document.getElementById('modal-glossary');
  if (modal) {
    modal.classList.remove('hidden');
    lucide.createIcons();
  }
}

function closeGlossaryModal() {
  const modal = document.getElementById('modal-glossary');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function renderGlossary() {
  const container = document.getElementById('glossary-items-container');
  if (!container) return;
  container.innerHTML = '';

  const glossary = window.STEM_GLOSSARY || {};
  Object.keys(glossary).forEach(key => {
    const item = glossary[key];
    const div = document.createElement('div');
    div.className = "p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 hover:bg-white hover:border-amber-300 transition-all text-xs";
    div.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-1">
        <span class="font-bold text-slate-900">${item.term}</span>
        <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-[10px]">
          ${item.simple}
        </span>
      </div>
      <p class="text-slate-600 leading-relaxed font-normal">${item.desc}</p>
    `;
    container.appendChild(div);
  });
}

/**
 * ==============================================================
 * CHATBOT & CONVERSATIONAL NATURAL LANGUAGE SEARCH
 * ==============================================================
 */
function setupChatbot() {
  const input = document.getElementById('chat-prompt-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const micBtn = document.getElementById('chat-mic-btn');
  const syncBtn = document.getElementById('chat-filter-sync-btn');

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      const q = input.value.trim();
      if (q) askBot(q);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) askBot(q);
      }
    });
  }

  // Voice Search Handler
  if (micBtn && input) {
    micBtn.addEventListener('click', () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert('Voice search is not supported by your current browser. Please type your query in the prompt bar.');
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        micBtn.classList.add('text-red-500', 'animate-pulse');
        input.placeholder = "Listening... speak now (e.g. 'Show me farming projects')";

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          input.value = transcript;
          micBtn.classList.remove('text-red-500', 'animate-pulse');
          input.placeholder = "Ask STEM Assistant...";
          askBot(transcript);
        };

        recognition.onerror = () => {
          micBtn.classList.remove('text-red-500', 'animate-pulse');
          input.placeholder = "Ask STEM Assistant...";
        };

        recognition.onend = () => {
          micBtn.classList.remove('text-red-500', 'animate-pulse');
          input.placeholder = "Ask STEM Assistant...";
        };

        recognition.start();
      } catch (err) {
        console.error('Speech recognition error', err);
        micBtn.classList.remove('text-red-500', 'animate-pulse');
      }
    });
  }

  // Filter main dashboard to chat matched projects
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      if (lastChatMatchedIds.length > 0) {
        const filtered = projects.filter(p => lastChatMatchedIds.includes(p.id));
        renderGridView(filtered);
        renderTableView(filtered);
        document.getElementById('filtered-count').textContent = filtered.length;
        document.getElementById('projects-grid-view').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function closeChatDrawer() {
  const drawer = document.getElementById('chat-response-drawer');
  if (drawer) drawer.classList.add('hidden');
}

/**
 * Main Conversational Engine for STEM Assistant
 */
function askBot(query) {
  const drawer = document.getElementById('chat-response-drawer');
  const queryEcho = document.getElementById('chat-query-echo');
  const answerText = document.getElementById('chat-answer-text');
  const matchedContainer = document.getElementById('chat-matched-projects');
  const input = document.getElementById('chat-prompt-input');

  if (input) input.value = query;
  if (!drawer || !queryEcho || !answerText || !matchedContainer) return;

  queryEcho.textContent = `"${query}"`;
  drawer.classList.remove('hidden');

  const q = query.toLowerCase().trim();
  let matched = [];
  let answer = "";

  // 1. Terminology & Jargon Questions
  if (q.includes('what is') || q.includes('what does') || q.includes('meaning of') || q.includes('explain mcu') || q.includes('explain bom')) {
    if (q.includes('mcu') || q.includes('microcontroller')) {
      answer = `<strong>MCU stands for Microcontroller Unit.</strong> In plain English, it is the <em>microchip brain</em> of a hardware project (like an ESP32 or Arduino) that executes software, reads sensor inputs, and controls motors.`;
      matched = projects.filter(p => p.specs && p.specs.mcu && (p.specs.mcu.includes('ESP') || p.specs.mcu.includes('Arduino')));
    } else if (q.includes('bom')) {
      answer = `<strong>BOM stands for Bill of Materials.</strong> In simple words, it is the <em>complete hardware shopping list</em> of all electronic parts, sensors, and wires needed to build a project, with direct pricing and store links (such as Quartz Components and Robu.in).`;
      matched = projects.filter(p => p.budget && p.budget.bom && p.budget.bom.length > 0);
    } else if (q.includes('idf') || q.includes('patent')) {
      answer = `<strong>IDF stands for Invention Disclosure Form.</strong> It is the first formal write-up describing a project's unique innovation submitted to patent attorneys before filing an official government patent.`;
      matched = projects.filter(p => p.aiAnalysis && p.aiAnalysis.patentViability && p.aiAnalysis.patentViability.toLowerCase().includes('eligible'));
    } else if (q.includes('aac')) {
      answer = `<strong>AAC stands for Augmentative and Alternative Communication.</strong> These are assistive speaking devices or apps (like <em>Voice Bridge</em>) that help non-verbal individuals or people with vocal cord difficulties speak aloud.`;
      matched = projects.filter(p => p.id === 'voice-bridge' || p.category.includes('Assistive'));
    } else {
      answer = `Here are the plain-English definitions from our CCGS STEM Glossary:`;
      openGlossaryModal();
    }
  }

  // 2. Voice Bridge Commercialization
  else if (q.includes('voice bridge') || (q.includes('sell') && q.includes('bridge')) || q.includes('commercialize')) {
    answer = `<strong>Voice Bridge Commercialization Plan:</strong><br>
    Voice Bridge was developed by Paridhi Singhal (Class 9) and Gopal Sharma (Class 10) from CCHS. To take it from a competition web prototype (<code>voice-bridge-ideathon.web.app</code>) into a sellable product:<br>
    • <strong>Dual Product Lines:</strong> (1) An offline speech mobile app with Indian regional voices, and (2) A wearable hardware communicator pendant running on ESP32-S3 + I2S audio.<br>
    • <strong>Unit Economics:</strong> Production cost is <strong>₹1,085</strong>, retail price <strong>₹4,499</strong> (giving a ~75% gross margin).<br>
    • <strong>Subsidies & B2G:</strong> Can be distributed free to patients under the Central Government <strong>ADIP Scheme</strong> via ALIMCO tenders.`;
    matched = projects.filter(p => p.id === 'voice-bridge');
  }

  // 3. National Award Winners
  else if (q.includes('winner') || q.includes('national') || q.includes('award') || q.includes('cbse') || q.includes('inspire') || q.includes('wro') || q.includes('ideathon')) {
    matched = projects.filter(p => p.achievements && (
      p.achievements.toLowerCase().includes('national') ||
      p.achievements.toLowerCase().includes('winner') ||
      p.achievements.toLowerCase().includes('inspire') ||
      p.achievements.toLowerCase().includes('cbse') ||
      p.achievements.toLowerCase().includes('wro') ||
      p.achievements.toLowerCase().includes('1st prize')
    ));
    answer = `Found <strong>${matched.length} award-winning STEM projects</strong> in the CCGS portfolio that have won National CBSE Science Exhibitions, INSPIRE MANAK awards, WRO, or Youth Ideathons:`;
  }

  // 4. Budget & Cost Queries
  else if (q.includes('under') || q.includes('cheap') || q.includes('cost') || q.includes('budget') || q.includes('₹') || q.includes('2000') || q.includes('1500') || q.includes('1000')) {
    let maxBudget = 2000;
    const match = q.match(/\d+/);
    if (match) maxBudget = parseInt(match[0]);

    matched = projects.filter(p => p.budget && p.budget.prototypeCost > 0 && p.budget.prototypeCost <= maxBudget);
    answer = `Found <strong>${matched.length} projects</strong> with a prototype hardware BOM budget under <strong>₹${maxBudget.toLocaleString('en-IN')}</strong>:`;
  }

  // 5. Agriculture & Farming
  else if (q.includes('agri') || q.includes('farm') || q.includes('irrigation') || q.includes('crop') || q.includes('soil') || q.includes('water')) {
    matched = projects.filter(p => 
      (p.category && (p.category.includes('Agri') || p.category.includes('Water') || p.category.includes('Environment'))) ||
      (p.name && (p.name.includes('Agri') || p.name.includes('Irrigation') || p.name.includes('Weeder') || p.name.includes('Farm')))
    );
    answer = `Here are <strong>${matched.length} Agriculture, Irrigation & Soil Health projects</strong> designed for farmers and smart water conservation:`;
  }

  // 6. Healthcare & Medical Devices
  else if (q.includes('health') || q.includes('medical') || q.includes('hospital') || q.includes('drip') || q.includes('doctor') || q.includes('patient') || q.includes('medicine')) {
    matched = projects.filter(p => 
      (p.category && (p.category.includes('Health') || p.category.includes('Assistive'))) ||
      (p.name && (p.name.includes('Drip') || p.name.includes('Medi') || p.name.includes('Visio') || p.name.includes('Oxy')))
    );
    answer = `Found <strong>${matched.length} Healthcare & Assistive Medical projects</strong> focusing on hospital drip safety, medication adherence, and non-verbal speech aids:`;
  }

  // 7. Safety, Women Empowerment & Road Safety
  else if (q.includes('safety') || q.includes('women') || q.includes('road') || q.includes('helmet') || q.includes('accident') || q.includes('speed')) {
    matched = projects.filter(p => 
      (p.category && (p.category.includes('Safety') || p.category.includes('Women') || p.category.includes('Road'))) ||
      (p.name && (p.name.includes('Velocity') || p.name.includes('Udaan') || p.name.includes('Shakti') || p.name.includes('Shield')))
    );
    answer = `Found <strong>${matched.length} Road Safety & Women Empowerment projects</strong> featuring smart vehicle interlocks and personal emergency beacons:`;
  }

  // 8. Mentors & Educators
  else if (q.includes('puru') || q.includes('ashok') || q.includes('chirag') || q.includes('chirayu')) {
    let mentorName = "Puru";
    if (q.includes('ashok')) mentorName = "Ashok";
    if (q.includes('chirag')) mentorName = "Chirag";
    if (q.includes('chirayu')) mentorName = "Chirayu";

    matched = projects.filter(p => p.mentors && p.mentors.some(m => m.toLowerCase().includes(mentorName.toLowerCase())));
    answer = `Here are the projects mentored or supervised by <strong>${mentorName} Sir</strong>:`;
  }

  // 9. Generic Keyword Fallback
  else {
    matched = projects.filter(p => {
      const fullText = [
        p.name, p.lead, (p.members || []).join(' '), p.category, p.problem, p.solution, (p.techStack || []).join(' ')
      ].join(' ').toLowerCase();
      return q.split(' ').some(word => word.length > 2 && fullText.includes(word));
    });

    if (matched.length > 0) {
      answer = `Based on your question <em>"${query}"</em>, here are <strong>${matched.length} relevant projects</strong>:`;
    } else {
      answer = `I couldn't find a direct keyword match for <em>"${query}"</em>. Try asking about <strong>'farming'</strong>, <strong>'healthcare'</strong>, <strong>'national awards'</strong>, or <strong>'projects under ₹2000'</strong>.`;
      matched = projects.slice(0, 4); // show top 4 flagship
    }
  }

  answerText.innerHTML = answer;
  lastChatMatchedIds = matched.map(m => m.id);

  // Render Mini Cards in Chat
  matchedContainer.innerHTML = '';
  matched.slice(0, 6).forEach(p => {
    const mini = document.createElement('div');
    mini.className = "bg-slate-900/90 rounded-lg border border-slate-700 p-2.5 flex items-center justify-between text-xs hover:border-brand-500 transition-all";
    mini.innerHTML = `
      <div class="truncate mr-2">
        <div class="font-bold text-white truncate">${p.name}</div>
        <div class="text-[10px] text-slate-400">${p.school} · ${p.grade} · ₹${(p.budget && p.budget.prototypeCost) || 1500}</div>
      </div>
      <button onclick="inspectProject('${p.id}')" class="px-2.5 py-1 rounded bg-brand-600 hover:bg-brand-500 text-white font-semibold text-[11px] shrink-0 transition-colors">
        Inspect
      </button>
    `;
    matchedContainer.appendChild(mini);
  });

  lucide.createIcons();
  drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

