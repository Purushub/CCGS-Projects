# CCGS STEM Innovation & Hardware Procurement Dashboard 2026

An interactive innovation matrix, hardware procurement engine, and AI pre-flight audit platform for **Cambridge Court Group of Schools (CCGS)**:
* **CCHS**: Cambridge Court High School
* **CCWS**: Cambridge Court World School
* **CCIS**: Cambridge Court International School

Built directly from the master registry: `CCIS Seniors Stem_ All STEM PROJECTS 2026.xlsx`.

---

## 🌟 Key Features

### 1. Zero-Friction Entry & Full Visibility (No Auth)
* **Instant Open Access**: No login, sign-up, or credentials needed.
* **Master Project Matrix**: Complete view of 60+ student STEM projects across Middle and Senior School cohorts.
* **Dynamic Project Entry & Edit**: Add new innovations or update existing projects with instant `localStorage` persistence.
* **Export & Backup**: One-click download of the complete portfolio as formatted JSON or CSV.

### 2. Conversational STEM AI Assistant & Chat Search
* **ChatGPT-Style Prompt Bar**: Ask natural language questions like:
  * *"Show me all projects for agriculture and irrigation under ₹2500"*
  * *"Which projects won national CBSE or INSPIRE MANAK awards?"*
  * *"How can we make Voice Bridge sellable?"*
  * *"Explain the IV Drip monitor in simple words"*
* **Voice Search Enabled**: Built-in speech-to-text recognition via microphone.
* **Dashboard Synchronization**: One click to filter the entire dashboard view to matching AI-identified projects.

### 3. Plain-English Simplified Mode & Jargon Buster Glossary
* **Plain English Mode Toggle**: One-click switch between Technical Mode and Simplified Mode.
* **Jargon Buster**: Plain-English definitions of complex engineering concepts (MCU, BOM, Actuators, Solenoids, Load Cells, IDF Patents, AAC) designed for students, parents, and judges.

### 4. Technical Specifications Evaluation & Hardware BOM
* **Architecture Breakdown**: In-depth specs for Microcontrollers (ESP32, Arduino, Pi Zero), Sensor arrays, Actuators, Power supplies, Wireless protocols, and Casing.
* **Direct Component Sourcing Links**: Itemized Bill of Materials (BOM) with direct purchase links to **Quartz Components** (`quartzcomponents.com`) and **Robu.in**.
* **Live Cost Calculation**: Dynamic prototype cost vs. target production batch pricing in Indian Rupees (₹).

### 5. AI Readiness & Patent Audit Engine
* **Pre-Flight Readiness Score (0–100%)**: Quantitative maturity metric evaluating physical prototypes, pitch readiness, and software completion.
* **Competition Tiering**: Aligned with CBSE National Science Exhibition, INSPIRE MANAK, WRO 2026, and Youth Ideathon.
* **Patent Viability (IDF Status)**: Assesses eligibility for filing Invention Disclosure Forms (IDF) with the Indian Patent Office (IPO).
* **Actionable Next Sprints**: Concrete 3-step technical roadmap for mentors and students.

### 6. Voice Bridge Commercialization Blueprint
* **The Market Gap**: Disrupting ₹4,00,000 foreign AAC imports with an affordable ₹4,499 device.
* **Dual-Product Strategy**: Offline Indian regional voice app + standalone wearable ESP32-S3 communicator.
* **Procurement BOM**: Itemized parts list with direct Quartz Components links.
* **Government B2G Roadmap**: Subsidized distribution under Central Government **ADIP Scheme** via ALIMCO tenders and GeM portal.

---

## 🚀 How to Run

No installation, build step, or Node.js environment is required!

### Option A: 1-Click Launch (Recommended)
Simply double-click:
```bat
start_dashboard.bat
```
*(Or double-click `index.html` directly in File Explorer)*

### Option B: Local PowerShell Server
Right-click `serve.ps1` and select **Run with PowerShell**:
```powershell
.\serve.ps1
```
Then visit: `http://localhost:8000/`

---

## 📁 Repository Structure

```
CCGS-Projects/
├── index.html                           # Master single-page application (Tailwind CSS, Lucide, Chart.js)
├── data.js                              # Comprehensive dataset, itemized BOMs, and STEM Glossary
├── app.js                               # Application controller, Chatbot NLP, search, and state
├── start_dashboard.bat                  # Instant browser launcher script
├── serve.ps1                            # Zero-dependency local HTTP server
├── CCIS Seniors Stem_ All STEM PROJECTS 2026.xlsx  # Master CCGS Excel spreadsheet
├── .gitignore                           # Git ignore rules
└── README.md                            # Documentation and architecture guide
```

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, Tailwind CSS (via CDN), JavaScript (ES6+ modular)
* **Iconography**: Lucide Icons
* **Data Visualization**: Chart.js
* **Persistence**: LocalStorage with JSON export/import
* **Speech Engine**: Web Speech Recognition API
* **Component Sourcing**: Quartz Components, Robu.in, ElectronicsComp, Amazon India

---

## 👥 Cambridge Court Group of Schools Innovation Mentorship
* **Cambridge Court High School (CCHS)**
* **Cambridge Court World School (CCWS)**
* **Cambridge Court International School (CCIS)**

