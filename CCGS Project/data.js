/**
 * Cambridge Court Group of Schools (CCGS) - STEM Projects Master Dataset 2026
 * Sourced and synthesized from: CCIS Seniors Stem_ All STEM PROJECTS 2026.xlsx
 */

const INITIAL_PROJECTS_DATA = [
  // --- FLAGSHIP 1: SMART IRRIGATION / AGRICULTURE WORKSTATION ---
  {
    id: "smart-agri-workstation",
    name: "Smart Agriculture Workstation & Irrigation System",
    school: "CCIS",
    grade: "Grade 8 - 9",
    section: "VIII / IX",
    lead: "Varun Sihag",
    members: ["Varun Sihag", "Hardik Dewani", "Prayag"],
    mentors: ["Ashok Sir", "Puru Sir"],
    category: "Agriculture & Agri-Tech",
    subCategories: ["Sustainability & Environment", "Robotics & Automation"],
    prototypeType: "Working Model",
    status: "In Progress",
    exhibitedBefore: "No",
    achievements: "C'est Ton Moment & Creo STEM 1st Prize Winners; In-School Ideation Finalist",
    pptUrl: "https://drive.google.com/file/d/1fozhWHE0516enrrHI8eRwq1ZV5K8P4xf/view?usp=sharing",
    appUrl: "https://smart-agri-dock.web.app",
    problem: "The irrigation process, currently managed via manual labor, has resulted in inconsistent hydration levels (both over-watering and under-watering), soil nutrient depletion, and substantial water wastage during dry spells.",
    solution: "An automated closed-loop smart irrigation and nutrient dosing workstation. Uses capacitive moisture sensors and an NPK sensing probe to monitor soil hydration in real-time, activating precision 12V submersible pumps and solenoid valves only when soil moisture drops below calibrated plant-specific thresholds.",
    techStack: ["ESP32 NodeMCU", "Capacitive Moisture Sensor", "NPK RS485 Interface", "Relay Dosing System", "Firebase IoT Dashboard", "C++ / Arduino IDE"],
    specs: {
      mcu: "ESP32-WROOM-32 (Dual-core 240MHz, 4MB Flash, Wi-Fi & BLE)",
      sensors: "Capacitive Soil Moisture V1.2 (Corrosion resistant), Soil NPK optical/resistive probe, DHT22 Ambient Temp/Humidity",
      actuators: "12V R385 Mini Diaphragm DC Pump, 5V 2-Channel Optocoupled Relay, 12V Solenoid Valve",
      power: "12V 2A DC Regulated Wall Adapter with LM2596 Buck Converter (Step-down to 5V/3.3V)",
      connectivity: "Wi-Fi (MQTT protocol to Firebase Realtime DB), local BLE debug mode",
      chassis: "Weatherproof IP65 polycarbonate outdoor enclosure with UV-resistant silicone tubing"
    },
    budget: {
      prototypeCost: 2515,
      batchCost: 1350,
      bom: [
        {
          name: "ESP32 Development Board (38-Pin)",
          spec: "NodeMCU-32S Wi-Fi + Bluetooth BLE Dual Core",
          qty: 1,
          price: 380,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/esp32-development-board",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/esp32-development-board/"
        },
        {
          name: "Capacitive Soil Moisture Sensor V1.2",
          spec: "Corrosion-resistant analog output 3.3V-5V",
          qty: 2,
          price: 95,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/capacitive-soil-moisture-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/capacitive-soil-moisture-sensor-module/"
        },
        {
          name: "12V DC R385 Diaphragm Water Pump",
          spec: "Self-priming 1.5-2L/min flow rate",
          qty: 1,
          price: 280,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/r385-diaphragm-water-pump-12v",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/r385-dc12v-mini-aquarium-water-pump/"
        },
        {
          name: "5V 2-Channel Relay Module",
          spec: "Optocoupler isolation 10A 250VAC / 30VDC",
          qty: 1,
          price: 110,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/2-channel-5v-relay-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/5v-two-channel-relay-module-with-optocoupler/"
        },
        {
          name: "Soil NPK Sensor Probe Module",
          spec: "Nitrogen, Phosphorus, Potassium soil monitoring probe",
          qty: 1,
          price: 450,
          vendor: "Robu.in",
          vendorUrl: "https://robu.in/product/rs485-soil-npk-sensor/",
          altVendor: "Quartz Components",
          altUrl: "https://quartzcomponents.com/search?q=npk+sensor"
        },
        {
          name: "0.96 inch I2C OLED Display (128x64)",
          spec: "SSD1306 4-pin blue/white display",
          qty: 1,
          price: 165,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/0-96-inch-i2c-iic-128x64-oled-display-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/0-96-inch-i2c-iic-spi-128x64-oled-display-module/"
        },
        {
          name: "12V 2A DC Power Adapter",
          spec: "Standard 5.5x2.1mm DC barrel connector",
          qty: 1,
          price: 220,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/12v-2a-power-adapter",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/12v-2a-power-supply-adapter/"
        },
        {
          name: "Weatherproof IP65 Project Box",
          spec: "Waterproof plastic junction box (150x100x70mm)",
          qty: 1,
          price: 220,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=ip65+junction+box",
          altVendor: "ElectronicsComp",
          altUrl: "https://www.electronicscomp.com/ip65-waterproof-junction-box"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 78,
      competitionPotential: "National Level (CBSE / INSPIRE)",
      pitchStrength: "Strong practical thesis addressing real agronomic pain point. Needs live dashboard demo instead of static PPT.",
      patentViability: "Medium - High (Novelty in dynamic closed-loop NPK nutrient injection combined with weather API prediction).",
      commercializationScore: 75,
      risks: [
        "Soil sensor corrosion over prolonged outdoor exposure (requires pure capacitive rather than resistive probes).",
        "Wi-Fi range limitation in rural agricultural farms (need LoRa or GSM module backup)."
      ],
      nextSteps: [
        "Complete IoT dashboard on Firebase/Render with real-time moisture charts.",
        "Add GSM SIM800L or LoRa SX1278 module for long-range connectivity beyond school Wi-Fi.",
        "Submit revised Idea Pitch Deck following the shared CLC template before the June sprint deadline."
      ]
    }
  },

  // --- FLAGSHIP 2: AUTOMATED IV DRIP MONITOR ---
  {
    id: "automated-iv-drip",
    name: "Automated IV Drip Monitoring & Occlusion System",
    school: "CCIS",
    grade: "Grade 9",
    section: "IX Zen & Neo",
    lead: "Sarthak Sanyal",
    members: ["Sarthak Sanyal", "Kushagra Singh"],
    mentors: ["Puru Sir", "Chirag Sir"],
    category: "Healthcare & Mental Health",
    subCategories: ["Accessibility & Assistive Technology", "Robotics & Automation"],
    prototypeType: "Working Model",
    status: "In Progress",
    exhibitedBefore: "No",
    achievements: "Interschool HealthTech Innovation Nominee; Project Video Pitch Published",
    pptUrl: "https://gamma.app/docs/Velocity-Lock-Smart-Safety",
    appUrl: "https://automated-iv-drip.web.app",
    problem: "When intravenous (IV) infusion bottles deplete unnoticed in busy hospital wards, the drop in venous pressure causes painful retrograde blood flow (backflow) into the IV tubing, resulting in thrombosis risk, infections, and intense patient distress.",
    solution: "A clamp-on continuous monitoring device with an automated occlusion pinch-valve. Combines a high-precision strain gauge weight sensor (HX711) and an infrared optical drop counter. Upon detecting fluid depletion below 5%, an electromechanical servo valve clamps the IV line to maintain fluid equilibrium, while sending instant alerts to the nurse station via Wi-Fi.",
    techStack: ["NodeMCU ESP8266 / ESP32", "HX711 24-bit ADC", "1kg Load Cell", "TCRT5000 IR Sensor", "Micro Servo SG90", "MQTT Nurse Alert Portal"],
    specs: {
      mcu: "ESP8266 NodeMCU v3 (Wi-Fi 802.11 b/g/n, 80MHz/160MHz clock)",
      sensors: "1kg Aluminum Micro Load Cell + HX711 24-bit ADC amplifier, TCRT5000 IR reflectance drop sensor",
      actuators: "TowerPro SG90 9g Micro Servo Motor with 3D printed mechanical pinch-clamp mechanism",
      power: "Rechargeable 3.7V 18650 Li-ion battery (2600mAh) with TP4056 Type-C USB charging module + 5V boost converter",
      connectivity: "Wi-Fi (MQTT protocol to hospital ward console + audible 85dB piezo alert)",
      chassis: "Medical-grade 3D printed PETG pole-mount clamp with quick-release bottle hanger"
    },
    budget: {
      prototypeCost: 1525,
      batchCost: 720,
      bom: [
        {
          name: "NodeMCU ESP8266 Wi-Fi Module",
          spec: "ESP-12E CH340G USB development board",
          qty: 1,
          price: 245,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/nodemcu-esp8266-v3",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/nodemcu-esp8266-v3-lua-ch340-wifi-development-board/"
        },
        {
          name: "1kg Load Cell + HX711 ADC Module",
          spec: "24-bit analog-to-digital converter with 1kg strain gauge",
          qty: 1,
          price: 260,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/hx711-weighing-sensor-amplifier-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/1kg-load-cell-with-hx711-weighing-sensor-module/"
        },
        {
          name: "TCRT5000 IR Optical Reflectance Sensor",
          spec: "Infrared reflective sensor with LM393 comparator",
          qty: 1,
          price: 65,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/tcrt5000-infrared-tracking-sensor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/tcrt5000-infrared-reflective-sensor-module/"
        },
        {
          name: "TowerPro SG90 9g Micro Servo Motor",
          spec: "180 degree rotation, 1.8 kg-cm torque",
          qty: 1,
          price: 125,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/sg90-micro-servo-motor-9g",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/towerpro-sg90-9g-mini-servo-motor/"
        },
        {
          name: "16x2 I2C Character LCD Module",
          spec: "HD44780 LCD with PCF8574 I2C adapter, blue backlight",
          qty: 1,
          price: 210,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/16x2-lcd-display-with-i2c-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/1602-16x2-character-lcd-display-module-with-i2c-interface/"
        },
        {
          name: "TP4056 Type-C Li-ion Charger + 18650 Battery",
          spec: "5V 1A battery charging module with overcharge protection",
          qty: 1,
          price: 180,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/tp4056-type-c-lithium-battery-charger-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/tp4056-type-c-usb-5v-1a-18650-lithium-battery-charger-module/"
        },
        {
          name: "3D Printed IV Clamp & Casing",
          spec: "PETG filament antimicrobial lightweight housing",
          qty: 1,
          price: 250,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=petg+filament",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product-category/3d-printer-parts/3d-printer-filament/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 85,
      competitionPotential: "National Level (CBSE / Youth Ideathon)",
      pitchStrength: "Compelling clinical problem statement with demonstrable life-safety impact. Pitch video already recorded.",
      patentViability: "Eligible (IDF Ready). The combination of automatic mechanical tube-pinching triggered by weight threshold + IR drop verification is patentable.",
      commercializationScore: 88,
      risks: [
        "Hospital certification compliance (requires Class A medical device non-invasive documentation).",
        "Servo pinch force must be calibrated so it doesn't puncture sterile IV tubing."
      ],
      nextSteps: [
        "Refine the 3D-printed pinch jaw to ensure zero damage to standard PVC drip tubes.",
        "Build a Web/Android nurse dashboard showing all hospital beds and drip remaining percentages.",
        "Prepare the Indian Provisional Patent Application (IDF) with mentor guidance."
      ]
    }
  },

  // --- FLAGSHIP 3: VOICE BRIDGE (COMMERCIALIZATION SPOTLIGHT) ---
  {
    id: "voice-bridge",
    name: "Voice Bridge — AI Assistive Communication Communicator",
    school: "CCHS",
    grade: "Grade 9 - 10",
    section: "IX / X",
    lead: "Paridhi Singhal",
    members: ["Paridhi Singhal", "Gopal Sharma"],
    mentors: ["Puru Sir", "Chirag Sir"],
    category: "Accessibility & Assistive Technology",
    subCategories: ["AI and Digital Technology", "Healthcare & Mental Health", "Robotics & Automation"],
    prototypeType: "Web App & Hardware Communicator",
    status: "Ready (Web MVP) / Productizing",
    exhibitedBefore: "Yes (Youth Ideathon Entry)",
    achievements: "Youth Ideathon National Competitor; Functional Web Prototype Deployed",
    pptUrl: "https://drive.google.com/file/d/1vhS3a0xEQcINNywe6pWsUBOY2y-ODx6q/view?usp=drivesdk",
    appUrl: "https://voice-bridge-ideathon.web.app/",
    problem: "Millions of individuals suffering from cerebral palsy, vocal cord damage, post-stroke aphasia, or speech impediments cannot afford commercial AAC (Augmentative and Alternative Communication) devices, which cost between ₹2,50,000 and ₹6,00,000 (Tobii Dynavox). Existing free apps lack Indian regional languages and fail offline without internet.",
    solution: "A dual-tier assistive communication system comprising: (1) An offline-capable AI speech synthesis web/mobile app with Fitzgerald-key predictive phrase generation, and (2) An ultra-affordable dedicated wearable hardware communicator with tactile hotkeys, low-latency edge TTS, and crisp acoustic speaker projection.",
    techStack: ["ESP32-S3 Dual Core", "MAX98357A I2S DAC", "Piper / On-Device TTS", "Flutter / React Native", "Firebase Hosting", "3W Acoustic Speaker"],
    specs: {
      mcu: "ESP32-S3 N16R8 (Xtensa 32-bit LX7 dual-core 240MHz, 16MB Flash, 8MB PSRAM)",
      sensors: "Capacitive touch matrix / tactile silicon keypad buttons (12 phrase triggers), MEMS microphone for calibration",
      actuators: "MAX98357A I2S Class-D 3.2W Mono Audio Amplifier, 4Ω 3W 40mm Neodymium full-range speaker",
      power: "3.7V 1200mAh rechargeable Li-Po battery with TP4056 Type-C BMS (8+ hours continuous use)",
      connectivity: "Offline stand-alone synthesis + Bluetooth BLE 5.0 sync to Android/iOS companion app",
      chassis: "Antimicrobial soft-touch ABS casing with lanyard neck-strap and drop-protection silicone bumper"
    },
    budget: {
      prototypeCost: 2190,
      batchCost: 1085,
      bom: [
        {
          name: "ESP32-S3 N16R8 Development Board",
          spec: "Dual Type-C, 16MB Flash, 8MB PSRAM, Wi-Fi & BLE 5.0",
          qty: 1,
          price: 490,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/esp32-s3-wroom-1-n16r8-development-board",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/esp32-s3-devkitc-1-n16r8/"
        },
        {
          name: "MAX98357A I2S Audio Amplifier Module",
          spec: "3.2W Class-D mono amplifier, digital I2S input",
          qty: 1,
          price: 135,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/max98357-i2s-3w-class-d-amplifier-interface-audio-dac-decoder-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/max98357a-i2s-3w-class-d-amplifier-interface-audio-dac-decoder-module/"
        },
        {
          name: "4 Ohm 3W 40mm Micro Speaker",
          spec: "Neodymium magnet high-clarity voice speaker",
          qty: 1,
          price: 95,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/3w-4-ohm-mini-speaker",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/3w-4-ohm-mini-speaker/"
        },
        {
          name: "3.7V 1200mAh Li-Po Rechargeable Battery",
          spec: "High energy density with integrated PCM protection circuit",
          qty: 1,
          price: 240,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/3-7v-1200mah-lipo-battery",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/3-7v-1200mah-lipo-battery/"
        },
        {
          name: "TP4056 Type-C 1A Lithium Charger Module",
          spec: "Constant-current/constant-voltage charger with battery protection",
          qty: 1,
          price: 45,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/tp4056-type-c-lithium-battery-charger-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/tp4056-type-c-usb-5v-1a-18650-lithium-battery-charger-module/"
        },
        {
          name: "0.96 inch I2C OLED Display Module",
          spec: "128x64 pixels white text, I2C interface",
          qty: 1,
          price: 165,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/0-96-inch-i2c-iic-128x64-oled-display-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/0-96-inch-i2c-iic-spi-128x64-oled-display-module/"
        },
        {
          name: "12-Key Tactile Matrix Button Board",
          spec: "Low-profile tactile switches with rubber keycaps",
          qty: 1,
          price: 180,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/4x4-matrix-keypad-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/4x4-matrix-keypad-module/"
        },
        {
          name: "Antimicrobial ABS Handheld Casing",
          spec: "Custom 3D printed/injection molded ergonomic wearable enclosure",
          qty: 1,
          price: 320,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=enclosure+box",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/abs-plastic-project-enclosure-box/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 92,
      competitionPotential: "National & Global (Youth Ideathon, INSPIRE, Startup India)",
      pitchStrength: "Unmatched social impact narrative. Clear market disruption comparing ₹4,499 hardware vs ₹4,00,000 imports.",
      patentViability: "Eligible (IDF Ready). Unique multi-modal predictive vocabulary caching on microcontrollers with instant haptic voice feedback.",
      commercializationScore: 95,
      risks: [
        "Need clinical validation trials with speech pathologists before commercial sale.",
        "Ensuring natural Indian regional accents (Hindi, Marathi, Bengali, Tamil) in offline TTS engines."
      ],
      nextSteps: [
        "Assemble the first 3 physical hardware communicator beta units using the ESP32-S3 BOM.",
        "Register Voice Bridge with CDSCO (Sugam Portal) under Class A Assistive Medical Device exemption.",
        "List on Government e-Marketplace (GeM) and apply for Startup India Seed Fund Scheme (SISFS)."
      ]
    }
  },

  // --- FLAGSHIP 4: FROST LIKENS / FROSTBUDDY ---
  {
    id: "frost-likens",
    name: "Frost Likens — AI Fresh Produce Quality Scanner",
    school: "CCIS",
    grade: "Grade 9 - 11",
    section: "9th & 11th",
    lead: "Hridaan Saraswat",
    members: ["Hridaan Saraswat", "Nivaan Sethi", "Darsh Chauhan", "Reet Kinra", "Viraj Mawai", "Jaya Chaudhary", "Dhara Pareekh", "Jivisha"],
    mentors: ["Puru Sir", "Neha Gurbakshani Ma'am"],
    category: "AI and Digital Technology",
    subCategories: ["SDG-Aligned Innovation", "Healthcare & Mental Health", "Robotics & Automation"],
    prototypeType: "Working Model & App",
    status: "Ready",
    exhibitedBefore: "Yes (Future Innopreneurs)",
    achievements: "Future Innopreneurs, C'est Ton Moment & Crème De La Crème 1st Prize Winners",
    pptUrl: "https://www.canva.com/design/DAHP_XsefNE/_SFVZnZLQ0O7__ESk-sPjg/edit",
    appUrl: "https://frost-likens.vercel.app/",
    problem: "Over 40% of fresh fruits and vegetables in Indian agricultural supply chains, cold storage facilities, and home refrigerators rot prematurely due to undetected microbial spoilage, ethylene gas accumulation, and lack of non-destructive freshness testing.",
    solution: "A dual-sensing freshness inspector integrating computer vision with chemical gas volatilization tracking. Combines an ESP32-CAM running a quantized MobileNet edge model with MQ-135 (ammonia/methane) and MQ-3 (ethanol/fermentation vapors) to non-destructively grade produce shelf-life in seconds.",
    techStack: ["ESP32-CAM (OV2640)", "MQ-135 Air Quality Sensor", "MQ-3 Ethanol Sensor", "DHT22 Sensor", "TensorFlow Lite Micro", "Next.js / Vercel Web Dashboard"],
    specs: {
      mcu: "ESP32-CAM AI-Thinker (Dual-core 240MHz, 520KB SRAM + 4MB PSRAM, OV2640 2MP Camera)",
      sensors: "MQ-135 Spoilage Gas Sensor (Ammonia, Sulfides), MQ-3 Alcohol/Fermentation Sensor, DHT22 Temp & Humidity",
      actuators: "High-intensity white inspection LED ring, 0.96 inch OLED status readout, buzzer alert",
      power: "5V 2A USB power bank / 18650 Li-ion dual battery pack with boost regulator",
      connectivity: "Wi-Fi (REST API to Vercel/Next.js cloud database) + MicroSD local dataset logging",
      chassis: "Ergonomic handheld spectrophotometer/camera shroud 3D printed with matte-black light-trapping hood"
    },
    budget: {
      prototypeCost: 2320,
      batchCost: 1250,
      bom: [
        {
          name: "ESP32-CAM Board with OV2640 Camera",
          spec: "2MP camera, built-in flash LED, MicroSD slot",
          qty: 1,
          price: 520,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/esp32-cam-wifi-bluetooth-camera-module-development-board-with-ov2640-camera",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/esp32-cam-development-board-with-ov2640-camera-module/"
        },
        {
          name: "MQ-135 Air Quality & Hazardous Gas Sensor",
          spec: "Sensitive to ammonia, sulfides, benzene, smoke",
          qty: 1,
          price: 140,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/mq-135-air-quality-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mq135-air-quality-hazardous-gas-detection-sensor-module/"
        },
        {
          name: "MQ-3 Alcohol / Fermentation Gas Sensor",
          spec: "High sensitivity to ethanol and fermentation fumes",
          qty: 1,
          price: 150,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/mq-3-alcohol-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mq-3-gas-sensor-module-alcohol-ethanol-detection/"
        },
        {
          name: "DHT22 High-Precision Temp & Humidity Sensor",
          spec: "Digital output, -40 to 80C, 0-100% RH",
          qty: 1,
          price: 260,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/dht22-digital-temperature-and-humidity-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/dht22-am2302-digital-temperature-and-humidity-sensor/"
        },
        {
          name: "FT232RL FTDI USB to TTL Programmer",
          spec: "Serial programmer with 3.3V / 5V jumper selector",
          qty: 1,
          price: 210,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/ft232rl-ftdi-usb-to-ttl-serial-converter-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/ft232rl-ftdi-usb-to-ttl-serial-adapter-module/"
        },
        {
          name: "White COB LED Inspection Ring Light",
          spec: "5V 50mm diffuse illumination ring",
          qty: 1,
          price: 120,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=led+ring",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/white-led-ring-light/"
        },
        {
          name: "SanDisk 32GB Ultra MicroSD Card",
          spec: "Class 10 U1 100MB/s for on-device image logging",
          qty: 1,
          price: 290,
          vendor: "Amazon.in",
          vendorUrl: "https://www.amazon.in/SanDisk-Ultra-MicroSDHC-Memory-Card/dp/B08L5HMJVW/",
          altVendor: "Quartz Components",
          altUrl: "https://quartzcomponents.com/search?q=microsd+card"
        },
        {
          name: "3D Printed Handheld Inspection Casing",
          spec: "Custom dark chamber with optical shield",
          qty: 1,
          price: 380,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=pla+filament",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product-category/3d-printer-parts/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 89,
      competitionPotential: "National Level (CBSE / WRO Future Innovators)",
      pitchStrength: "Winning track record (Crème De La Crème 1st Prize). Working Vercel app deployed with smooth visual demo.",
      patentViability: "High. Synchronized fusion of optical decay discoloration + headspace volatile organic compound (VOC) measurement.",
      commercializationScore: 82,
      risks: [
        "MQ sensors require 2-minute preheating to stabilize baseline readings.",
        "Variations in ambient supermarket lighting can affect computer vision accuracy if shroud isn't sealed."
      ],
      nextSteps: [
        "Incorporate a light-tight rubber silicone shroud to standardize camera illumination.",
        "Train model on 10 common Indian fruits/vegetables (bananas, tomatoes, onions, apples).",
        "Target commercial pilots with local grocery chains and cold storage warehouses in Jaipur."
      ]
    }
  },

  // --- FLAGSHIP 5: VELOCITY LOCK / VELOCITY LOCKER ---
  {
    id: "velocity-lock",
    name: "Velocity Lock — Smart Two-Wheeler Safety Interlock",
    school: "CCIS",
    grade: "Grade 7 - 9",
    section: "7th - 9th",
    lead: "Sarthak Sanyal",
    members: ["Sarthak Sanyal", "Kushagra Singh", "Akshat", "Krishna", "Bhuvik Pancholi", "Kashvi Gupta", "Heer Golcha"],
    mentors: ["Chirag Sir", "Neha Gurbakshani Ma'am"],
    category: "Road Safety & Transportation",
    subCategories: ["Robotics & Automation", "Heritage, Culture & Tourism", "Civic Sense & Public Safety"],
    prototypeType: "Working Model & App",
    status: "In Progress",
    exhibitedBefore: "Yes",
    achievements: "Representing School in WRO (World Robot Olympiad) 2026; Launchverse Competitor",
    pptUrl: "https://www.canva.com/design/DAHRlPI0Wq0/N5C6JUg9POZN93O4en5dpA/edit",
    appUrl: "https://velocity-lock.vercel.app/",
    problem: "India accounts for over 1,50,000 road fatalities annually, with two-wheeler riders making up the highest proportion due to riding without helmets, drunken driving, and rash over-speeding in urban school and heritage zones.",
    solution: "An integrated safety ignition interlock system. The two-wheeler starter relay remains locked unless: (1) An RF-linked smart helmet is confirmed latched onto the rider's chin, (2) The MQ-3 breathalyzer detects zero blood-alcohol vapor, and (3) GPS speed geofencing automatically caps vehicle velocity in pedestrian, school, and monument heritage zones.",
    techStack: ["Arduino Nano", "MQ-3 Alcohol Sensor", "433MHz RF Transceiver", "NEO-6M GPS Module", "Automotive 12V Relay", "Vercel Telematics App"],
    specs: {
      mcu: "ATmega328P Arduino Nano V3.0 (16MHz, 32KB Flash)",
      sensors: "MQ-3 Semiconductor Alcohol Vapor Sensor, Magnetic Hall Sensor (Helmet latch detection), NEO-6M GPS Module",
      actuators: "12V 10A Optocoupled Ignition Cut Relay, 85dB Warning Piezo Buzzer, Status Indicator Bi-Color LEDs",
      power: "Vehicle 12V Battery interface with LM2596 high-efficiency DC buck regulator (step-down to 5V)",
      connectivity: "433MHz wireless link between helmet unit and motorcycle base unit + GPS NMEA stream",
      chassis: "Vibration-resistant IP64 ABS housing mounting under two-wheeler headlight/handlebar console"
    },
    budget: {
      prototypeCost: 1520,
      batchCost: 780,
      bom: [
        {
          name: "Arduino Nano V3.0 Board (CH340)",
          spec: "16MHz ATmega328P with mini-USB cable",
          qty: 1,
          price: 220,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/arduino-nano-v3-0",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/arduino-nano-v3-0-ch340-chip/"
        },
        {
          name: "MQ-3 Breath Alcohol Sensor Module",
          spec: "Pre-calibrated alcohol vapor detector with analog/digital out",
          qty: 1,
          price: 150,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/mq-3-alcohol-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mq-3-gas-sensor-module-alcohol-ethanol-detection/"
        },
        {
          name: "A3144 Hall Effect Sensor Modules",
          spec: "Magnetic latching detection sensor",
          qty: 2,
          price: 40,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/hall-effect-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/a3144-hall-effect-magnetic-sensor-module/"
        },
        {
          name: "433MHz RF Transmitter and Receiver Kit",
          spec: "Wireless ASK link for helmet-to-bike communication",
          qty: 1,
          price: 120,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/433mhz-rf-transmitter-and-receiver-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/433mhz-rf-transmitter-and-receiver-module/"
        },
        {
          name: "NEO-6M GPS Module with Antenna",
          spec: "High-sensitivity GPS receiver with EEPROM",
          qty: 1,
          price: 480,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/neo-6m-gps-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/gy-neo6mv2-flight-controller-gps-module-for-arduino-mwc-apm-2-5/"
        },
        {
          name: "12V 1-Channel Heavy Duty Relay Module",
          spec: "Isolated optocoupler relay for ignition trigger interruption",
          qty: 1,
          price: 90,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/1-channel-12v-relay-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/1-channel-isolated-12v-relay-module-optocoupler/"
        },
        {
          name: "LM2596 DC-DC Buck Converter Module",
          spec: "Step-down from 12V bike battery to stable 5V 3A",
          qty: 1,
          price: 110,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/lm2596-step-down-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/lm2596-dc-dc-step-down-module/"
        },
        {
          name: "Vibration-Resistant ABS Enclosure Box",
          spec: "Rugged black plastic housing with mounting tabs",
          qty: 1,
          price: 180,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=abs+box",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/abs-plastic-project-enclosure-box/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 81,
      competitionPotential: "WRO 2026 Nationals / Road Safety Innovation Category",
      pitchStrength: "Strong social urgency and alignment with Ministry of Road Transport & Highways (MoRTH) standards.",
      patentViability: "Medium. Existing patents exist for helmet interlocks; novelty must focus on GPS-geofenced speed limiting in heritage/school zones.",
      commercializationScore: 84,
      risks: [
        "433MHz RF interference in dense vehicle traffic (recommend switching to encrypted BLE pairing).",
        "Fail-safe protocol: Ignition must never cut abruptly during high-speed highway driving."
      ],
      nextSteps: [
        "Incorporate a 10-second auditory warning buffer before any speed governor engagement.",
        "Finalize the WRO 2026 engineering notebook and hardware demonstration rig.",
        "Demonstrate working mock-vehicle interlock to traffic police / safety evaluators."
      ]
    }
  },

  // --- FLAGSHIP 6: ADVANCE BRIDGE CONTROL & DETECTION SYSTEM ---
  {
    id: "advance-bridge-control",
    name: "Advance Bridge Control and Detection System",
    school: "CCHS",
    grade: "Grade 10",
    section: "X",
    lead: "Medhansh",
    members: ["Medhansh"],
    mentors: ["Ashok Sir", "Puru Sir"],
    category: "Civic Sense & Public Safety",
    subCategories: ["Disaster Management & Resilience", "Robotics & Automation"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "INSPIRE MANAK District Level Winner; State Level Qualifier",
    pptUrl: "https://drive.google.com/file/d/1yN6KU45pDk9BmNuQ_09OZn_hmZaerNq4/view?usp=drivesdk",
    appUrl: "https://advance-bridge.web.app",
    problem: "Catastrophic bridge collapses and vehicles drowning in submerged river crossings occur during sudden flash floods and excessive structural overloading, primarily due to delayed manual warning and absence of automatic road barriers.",
    solution: "An automated early-warning and physical closure system. An IP67 waterproof ultrasonic level sensor monitors river swelling, while piezoelectric and vibration sensors detect bridge structural oscillations. If danger thresholds are breached, servo-actuated boom barriers immediately lower to block vehicular entry, red traffic lights flash, and wireless emergency alerts trigger to disaster authorities.",
    techStack: ["ESP32 Dev Board", "JSN-SR04T Waterproof Ultrasonic", "SW-420 Vibration Sensor", "MG90S Servo Barriers", "Mini Traffic Light Module", "IoT Alert Server"],
    specs: {
      mcu: "ESP32-WROOM-32 (Dual Core 240MHz, Wi-Fi & BLE, 38-Pin)",
      sensors: "JSN-SR04T Waterproof Ultrasonic Water Level Transducer (20cm to 600cm range), SW-420 High-Sensitivity Vibration Sensor",
      actuators: "MG90S Metal Gear Micro Servos (operating twin entry boom barriers), Red/Amber/Green 5V Traffic Light Mini LED modules, 90dB Siren",
      power: "5V 3A DC Regulated Wall Adapter with backup 18650 Li-ion battery circuit",
      connectivity: "Wi-Fi (Direct MQTT webhook to municipal disaster dashboard + local fail-safe logic)",
      chassis: "Scale acrylic bridge model with laser-cut roadway, toll-booth barrier housings, and river channel basin"
    },
    budget: {
      prototypeCost: 2500,
      batchCost: 1300,
      bom: [
        {
          name: "ESP32 Wi-Fi + Bluetooth Dev Board",
          spec: "38-pin dual-core microcontroller with onboard antenna",
          qty: 1,
          price: 380,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/esp32-development-board",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/esp32-development-board/"
        },
        {
          name: "JSN-SR04T Waterproof Ultrasonic Sensor",
          spec: "Waterproof separate probe with 2.5m cable, 5V DC",
          qty: 1,
          price: 420,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/jsn-sr04t-integrated-ultrasonic-distance-measurement-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/jsn-sr04t-waterproof-ultrasonic-distance-sensor/"
        },
        {
          name: "SW-420 Vibration / Shake Sensor Module",
          spec: "Normally closed vibration switch with LM393 comparator",
          qty: 2,
          price: 65,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/sw-420-vibration-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/sw-420-vibration-sensor-module/"
        },
        {
          name: "MG90S Metal Gear Micro Servo Motors",
          spec: "Metal gear upgrade of SG90 with 2.2 kg-cm torque",
          qty: 2,
          price: 180,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/mg90s-metal-gear-micro-servo-motor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mg90s-metal-gear-micro-servo-motor/"
        },
        {
          name: "Mini 5V Traffic Light LED Modules",
          spec: "Integrated Red, Yellow, Green 8mm LED display board",
          qty: 2,
          price: 75,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/traffic-light-mini-led-display-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mini-traffic-light-led-display-module/"
        },
        {
          name: "Sunboard / Acrylic Scale Model Materials",
          spec: "5mm high-density white foam sheet & acrylic struts for bridge mockup",
          qty: 1,
          price: 600,
          vendor: "Amazon.in",
          vendorUrl: "https://www.amazon.in/Sunboard-Foam-Sheet-White-Thick/dp/B08Q85WJ3P/",
          altVendor: "Quartz Components",
          altUrl: "https://quartzcomponents.com/search?q=acrylic"
        },
        {
          name: "5V 3A DC Power Supply Adapter",
          spec: "High current regulated adapter for servos and Wi-Fi",
          qty: 1,
          price: 240,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/5v-3a-power-adapter",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/5v-3a-power-supply-adapter/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 86,
      competitionPotential: "INSPIRE MANAK State / National Level",
      pitchStrength: "District Winner with proven physical model demonstration. Clear relevance to National Disaster Management Authority (NDMA) priorities.",
      patentViability: "Medium. Requires focusing patent claims on multi-sensor redundancy arbitration (ultrasonic water + vibration + weight threshold).",
      commercializationScore: 78,
      risks: [
        "Water surface turbulence and debris can give false ultrasonic reflections (requires Kalman filtering code).",
        "Outdoor environmental weathering requires IP67 rated junction enclosures."
      ],
      nextSteps: [
        "Implement software moving-average / Kalman filter on ultrasonic water depth readings.",
        "Add GSM SIM800L module to broadcast automated SMS flood alerts to district collectorate.",
        "Prepare documentation and working video demonstration for the INSPIRE MANAK State round."
      ]
    }
  },

  // --- FLAGSHIP 7: ROBOWEEDER ---
  {
    id: "roboweeder",
    name: "Roboweeder — Autonomous Crop Weeding Agricultural Rover",
    school: "CCHS",
    grade: "Grade 12",
    section: "XII",
    lead: "Arsh Singhal",
    members: ["Arsh Singhal"],
    mentors: ["Ashok Sir"],
    category: "Robotics & Automation",
    subCategories: ["Agriculture & Agri-Tech", "Sustainability & Environment"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "CBSE National Winner, WSRO 1st Runner-Up, State INSPIRE MANAK Winner, IIT Mumbai Techfest Exhibitor",
    pptUrl: "https://drive.google.com/file/d/1cKPE_pkhQy43ViF-k6vpOXfv_gjPNafH98MVW7Aa9HI/edit?usp=drivesdk",
    appUrl: "https://roboweeder.web.app",
    problem: "Farmers spend over 30% of total agricultural labor on manual weeding, or spray toxic chemical herbicides that ruin soil microbiome, contaminate groundwater, and cost significant operational expense.",
    solution: "A rugged 4WD autonomous agricultural rover equipped with computer vision/ultrasonic furrow navigation and an active mechanical rotary blade weeder. Traversing crop rows automatically, it uproots weeds while leaving healthy crops intact, reducing herbicide chemical dependency to zero.",
    techStack: ["Arduino Mega 2560", "BTS7960 43A Motor Drivers", "Planetary DC Geared Motors", "775 Rotary Cutter Motor", "12V 7Ah LiFePO4", "Ultrasonic Furrow Sensors"],
    specs: {
      mcu: "Arduino Mega 2560 R3 (ATmega2560 16MHz, 54 digital I/O, 16 analog inputs)",
      sensors: "3x HC-SR04 Ultrasonic row-tracking sensors, optical crop/weed reflection sensors",
      actuators: "4x 12V 100RPM High Torque Metal Geared Motors, 1x 775 High-Speed Rotary Weeder Blade Motor, 1x MG996R Weeder Depth Adjustment Servo",
      power: "12V 7Ah rechargeable Li-ion / LiFePO4 battery pack with 20A BMS",
      connectivity: "2.4GHz RF Remote Controller (FS-i6) + autonomous ultrasonic navigation mode",
      chassis: "Heavy-duty 4WD aluminum alloy chassis with 130mm high-traction tractor rubber wheels"
    },
    budget: {
      prototypeCost: 7485,
      batchCost: 4500,
      bom: [
        {
          name: "Arduino Mega 2560 R3 Board",
          spec: "ATmega2560 microcontroller with USB cable",
          qty: 1,
          price: 750,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/arduino-mega-2560-r3",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/arduino-mega-2560-r3/"
        },
        {
          name: "BTS7960 43A High Power Motor Drivers",
          spec: "H-bridge drive module for heavy DC motors",
          qty: 2,
          price: 360,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/bts7960-43a-high-power-motor-driver-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/bts7960-43a-high-power-motor-driver-module/"
        },
        {
          name: "12V 100RPM Planetary Geared DC Motors",
          spec: "High torque metal gearbox motor for agricultural terrain",
          qty: 4,
          price: 390,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/12v-100rpm-dc-geared-motor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/12v-100rpm-dc-geared-motor/"
        },
        {
          name: "775 High-Speed 12V DC Motor",
          spec: "10,000 RPM ball bearing motor for weeding cutter blade",
          qty: 1,
          price: 450,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/775-dc-motor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/775-dc-motor-12v-10000-rpm/"
        },
        {
          name: "HC-SR04 Ultrasonic Distance Sensors",
          spec: "Furrow edge detection ranging modules",
          qty: 3,
          price: 95,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/hc-sr04-ultrasonic-sensor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/hc-sr04-ultrasonic-sensor/"
        },
        {
          name: "12V 7Ah Li-ion Battery Pack",
          spec: "12V 3S rechargeable battery pack with BMS",
          qty: 1,
          price: 1150,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/12v-lithium-ion-battery-pack",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/12v-rechargeable-lithium-ion-battery-pack/"
        },
        {
          name: "4WD Heavy Metal Rover Chassis + Wheels",
          spec: "Laser-cut aluminum robot platform with 130mm wheels",
          qty: 1,
          price: 1400,
          vendor: "Robu.in",
          vendorUrl: "https://robu.in/product/4wd-metal-robot-chassis/",
          altVendor: "Quartz Components",
          altUrl: "https://quartzcomponents.com/search?q=robot+chassis"
        },
        {
          name: "MG996R Metal Gear High Torque Servo",
          spec: "11 kg-cm torque digital servo for weeder depth control",
          qty: 1,
          price: 320,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/mg996r-digital-metal-gear-servo-motor",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/mg996r-digital-metal-gear-servo-motor/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 96,
      competitionPotential: "National / International (IIT Techfest, WSRO, CBSE Winner)",
      pitchStrength: "Top tier benchmark in the CCGS portfolio. Validated across multiple state and national podiums.",
      patentViability: "Eligible (IDF Ready). Novel mechanical furrow weed-uprooting depth regulator synchronized with forward motor speed.",
      commercializationScore: 89,
      risks: [
        "Rough muddy terrain traction slip requires differential lock or rubber track system.",
        "Blade safety guard required to prevent stone projection."
      ],
      nextSteps: [
        "Incorporate a solar charging roof panel (30W) to enable autonomous in-field battery top-up.",
        "File utility patent on the active depth-compensating cutter mechanism.",
        "Pitch prototype to agricultural implement incubators (e.g. ICRISAT / T-Hub / NABARD)."
      ]
    }
  },

  // --- FLAGSHIP 8: GREEN HORIZON ---
  {
    id: "green-horizon",
    name: "Green Horizon — AI-Driven Dual-Pipe Urban Cooling System",
    school: "CCHS",
    grade: "Grade 10",
    section: "X",
    lead: "Japit Jaiman",
    members: ["Japit Jaiman", "Vihan Pathak", "Viyansh Singhal"],
    mentors: ["Ashok Sir", "B Lal Institute Collaborator"],
    category: "Sustainability & Environment",
    subCategories: ["Clean & Renewable Energy", "Water Conservation & Management", "AI and Digital Technology"],
    prototypeType: "Working Model & IoT System",
    status: "Ready / Patent in Process",
    exhibitedBefore: "Yes",
    achievements: "Top 20 National Hackathon; Youth Ideathon Top 100; District Winner INSPIRE MANAK; Patent in Process with B Lal Institute",
    pptUrl: "https://drive.google.com/file/d/1loPwa1v-CzwURLNfaBBZinclCbVp02tTKI-Extv7IgY/edit?usp=drivesdk",
    appUrl: "https://green-horizon.web.app",
    problem: "Urban heat island effect increases city temperatures by 4-7°C, driving explosive air conditioning power consumption that spikes greenhouse gas emissions and strains power grids.",
    solution: "An eco-mimetic dual-pipe sub-surface geothermal cooling system. Sub-surface heat exchangers coupled with low-power micro-evaporative cooling cool ambient air by 8-12°C using under 15% of conventional HVAC energy. Controlled by an ESP32 edge controller monitoring relative humidity and enthalpy.",
    techStack: ["ESP32 NodeMCU", "BME280 Environmental Sensor", "DS18B20 Waterproof Temp Sensors", "12V Brushless Blower Fans", "Submersible Mist Pump", "Blynk IoT Cloud"],
    specs: {
      mcu: "ESP32-WROOM-32 (Dual Core 240MHz, Wi-Fi & BLE)",
      sensors: "BME280 Precision Barometric Pressure/Humidity/Temp Sensor, 3x DS18B20 1-Wire Waterproof Thermal Probes",
      actuators: "2x 12V High CFM Brushless Dual Ball-Bearing Blower Fans, 1x Ultrasonic Mist Generator / 12V Micro Pump",
      power: "12V 3A DC Regulated Power Supply + 20W Solar Panel integration",
      connectivity: "Wi-Fi (Blynk IoT Dashboard for thermal gradient tracking and power savings calculations)",
      chassis: "Double-walled thermally insulated pipe assembly with terracotta porous core and acrylic inspection jacket"
    },
    budget: {
      prototypeCost: 2850,
      batchCost: 1450,
      bom: [
        {
          name: "ESP32 Development Board",
          spec: "38-pin dual-core Wi-Fi/BLE module",
          qty: 1,
          price: 380,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/esp32-development-board",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/esp32-development-board/"
        },
        {
          name: "BME280 Temperature, Humidity & Pressure Sensor",
          spec: "High-accuracy digital I2C environmental sensor",
          qty: 1,
          price: 320,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/gy-bme280-temperature-humidity-barometric-pressure-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/gy-bme280-pressure-sensor-module/"
        },
        {
          name: "DS18B20 Waterproof Temperature Sensors",
          spec: "1-Wire digital temperature probes with 1m cable",
          qty: 3,
          price: 110,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/ds18b20-waterproof-temperature-sensor-module",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/waterproof-ds18b20-temperature-sensor/"
        },
        {
          name: "12V High CFM Brushless Blower Fans",
          spec: "Dual ball bearing high static pressure centrifugal fan",
          qty: 2,
          price: 240,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/12v-cooling-fan",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/12v-dc-brushless-cooling-fan/"
        },
        {
          name: "Ultrasonic Mist Atomizer Generator Module",
          spec: "24V / 12V 20mm ultrasonic transducer disc for evaporative cooling",
          qty: 1,
          price: 290,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/search?q=mist+maker",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/ultrasonic-mist-maker-fogger/"
        },
        {
          name: "Terracotta & Dual Pipe Heat Exchanger Mockup",
          spec: "Porous earthenware piping with acrylic thermal enclosure",
          qty: 1,
          price: 650,
          vendor: "Amazon.in",
          vendorUrl: "https://www.amazon.in/dp/B08Q85WJ3P/",
          altVendor: "Quartz Components",
          altUrl: "https://quartzcomponents.com/search?q=acrylic"
        },
        {
          name: "12V 3A DC Regulated Power Adapter",
          spec: "Standard wall adapter with DC jack breakout",
          qty: 1,
          price: 240,
          vendor: "Quartz Components",
          vendorUrl: "https://quartzcomponents.com/products/12v-3a-power-adapter",
          altVendor: "Robu.in",
          altUrl: "https://robu.in/product/12v-3a-power-supply-adapter/"
        }
      ]
    },
    aiAnalysis: {
      readinessScore: 94,
      competitionPotential: "National Level / Commercial Patent Stage",
      pitchStrength: "Advanced academic backing with B Lal Institute; Patent prosecution already underway.",
      patentViability: "Patent in Process. Dual-pipe counterflow sub-surface thermal exchange with closed-loop dewpoint modulation.",
      commercializationScore: 91,
      risks: [
        "Humidity saturation in humid monsoons requires desiccant / bypass damper.",
        "Biofilm / algae accumulation in wet porous terracotta pipes over prolonged duration."
      ],
      nextSteps: [
        "Monitor the Indian Patent Office (IPO) examination status.",
        "Fabricate a 1:1 scale window-retrofit pilot unit for school computer lab test testing.",
        "Compile thermal reduction enthalpy charts for international environmental hackathons."
      ]
    }
  },

  // --- ADDITIONAL COMPREHENSIVE CCGS PORTFOLIO PROJECTS ---
  {
    id: "myco-bharat",
    name: "myco Bharat",
    school: "CCHS",
    grade: "Grade 9",
    section: "IX C / IX E",
    lead: "Lishika Mathur",
    members: ["Lishika Mathur", "Paridhi Singhal"],
    mentors: ["Ashok Sir"],
    category: "Sustainability & Environment",
    subCategories: ["Agriculture & Agri-Tech"],
    prototypeType: "Working Model & Bio-Material",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "CBSE Science Exhibition — National Level Winner",
    pptUrl: "https://drive.google.com/drive/folders/10DKEeTYA1IMR_enIis46h9HUl7tii3ar?usp=sharing",
    appUrl: "",
    problem: "Single-use synthetic polystyrene (thermocol) and non-biodegradable packaging cause catastrophic landfill accumulation and plastic pollution across India.",
    solution: "Mycelium-based biodegradable packaging and acoustic insulation tiles grown from agricultural crop residue (stubbled wheat/paddy straw) bound by mushroom mycelium fungal networks.",
    techStack: ["Pleurotus Ostreatus Mycelium", "Sterilization Chamber", "Thermal Press", "Mold Tooling"],
    specs: {
      mcu: "N/A (Biotechnology & Material Science Prototype)",
      sensors: "Soil Moisture & Incubation Temperature Probes",
      actuators: "Incubator Heating Pad & Ultrasonic Humidifier",
      power: "220V AC Incubation Setup",
      connectivity: "Offline Scientific Bio-Process",
      chassis: "Modular thermoformed packaging molds"
    },
    budget: {
      prototypeCost: 1800,
      batchCost: 250,
      bom: [
        { name: "Mycelium Spawn Culture (Pleurotus)", spec: "Pure laboratory grain spawn", qty: 2, price: 350, vendor: "Amazon.in", vendorUrl: "https://www.amazon.in/Mushroom-Spawn/dp/B08X", altVendor: "Local Agri Lab", altUrl: "#" },
        { name: "Sterilized Agro Substrate & Nutrients", spec: "Pasteurized wheat straw & sawdust", qty: 1, price: 400, vendor: "Local", vendorUrl: "#", altVendor: "#", altUrl: "#" },
        { name: "Thermoformed Packing Molds", spec: "Vacuum-formed reusable PET molds", qty: 4, price: 700, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/search?q=molds", altVendor: "Amazon.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 95,
      competitionPotential: "National Level (CBSE National Winner)",
      pitchStrength: "Superb environmental story directly solving agricultural stubble burning (Parali) and plastic waste simultaneously.",
      patentViability: "Medium. Focus on binder nutrient mix and heat-cure compression profile.",
      commercializationScore: 88,
      risks: ["Contamination by Trichoderma green mold during growth.", "Long incubation cycle (7-10 days per batch)."],
      nextSteps: ["Scale mold capacity to produce standard consumer product boxes.", "Acquire formal ASTM D6400 compostability test certification."]
    }
  },

  {
    id: "symbiogrid",
    name: "Symbiogrid",
    school: "CCHS",
    grade: "Grade 10",
    section: "X C",
    lead: "Aron Meel",
    members: ["Aron Meel"],
    mentors: ["Ashok Sir"],
    category: "Sustainability & Environment",
    subCategories: ["Clean & Renewable Energy"],
    prototypeType: "Working Model & IoT Grid",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Youth Ideathon — National Winner",
    pptUrl: "https://drive.google.com/file/d/1yN6KU45pDk9BmNuQ_09OZn_hmZaerNq4/view?usp=drivesdk",
    appUrl: "",
    problem: "Unbalanced micro-generation from decentralized rooftop solar and wind causes power factor instability and reverse current grid surges.",
    solution: "A smart bi-directional energy routing node that balances localized micro-generation and battery storage across neighborhood clusters via automated dynamic load switches.",
    techStack: ["ESP32", "ACS712 Current Sensors", "ZMPT101B AC Voltage Sensors", "Solid State Relays", "Blynk IoT"],
    specs: {
      mcu: "ESP32-WROOM-32",
      sensors: "ACS712 20A Current Sensors, ZMPT101B Voltage Transformer Module",
      actuators: "Solid State Relays (SSR-40DA)",
      power: "12V Solar Panel + 12V LiFePO4 battery pack",
      connectivity: "Wi-Fi / ESP-NOW Mesh Grid",
      chassis: "DIN Rail Enclosure Box"
    },
    budget: {
      prototypeCost: 2750,
      batchCost: 1400,
      bom: [
        { name: "ESP32 Dev Board", spec: "38-Pin Module", qty: 1, price: 380, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "ACS712 20A Current Sensor", spec: "Hall Effect Module", qty: 2, price: 160, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/acs712-20a-range-current-sensor-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "ZMPT101B AC Voltage Sensor", spec: "Active AC Transformer", qty: 2, price: 190, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/zmpt101b-ac-single-phase-voltage-sensor-module", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 90,
      competitionPotential: "National Level (Youth Ideathon Winner)",
      pitchStrength: "Addresses peak-load demand and decentralized renewable grid orchestration.",
      patentViability: "Medium - High",
      commercializationScore: 84,
      risks: ["High voltage AC switching requires optical isolation safety certification."],
      nextSteps: ["Implement ESP-NOW mesh networking among 3 physical microgrid nodes."]
    }
  },

  {
    id: "smoke-dynamo",
    name: "Smoke Dynamo — Industrial Emission Particulate Harvester",
    school: "CCHS",
    grade: "Grade 10",
    section: "X A",
    lead: "Maan Patawari",
    members: ["Maan Patawari"],
    mentors: ["Ashok Sir"],
    category: "Civic Sense & Public Safety",
    subCategories: ["Disaster Management & Resilience", "Clean & Renewable Energy"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "CBSE Skill Expo — National Level Winner",
    pptUrl: "https://drive.google.com/file/d/1_sVj33NovLpPUWqAmaYthBRAIeWLgtbw/view?usp=drivesdk",
    appUrl: "",
    problem: "Industrial boiler stacks and diesel exhaust expel toxic particulate matter (PM2.5/PM10) and unburnt hydrocarbons directly into atmospheric air.",
    solution: "An electrostatic precipitator and kinetic vortex chimney dynamo that extracts carbon black soot from industrial flue gas, converting trapped soot into raw printer ink pigment while generating auxiliary electricity from exhaust flow velocity.",
    techStack: ["High Voltage Electrostatic Grid", "Turbine Dynamo", "MQ-2 Gas Sensor", "Carbon Collection Hopper"],
    specs: {
      mcu: "Arduino Uno R3",
      sensors: "MQ-2 Smoke/Combustible Sensor, Optical Dust PM2.5 Sensor (GP2Y1010AU0F)",
      actuators: "Mini Turbine Generator, High Voltage Electrostatic Ionizer 10kV module",
      power: "12V 2A DC Adapter",
      connectivity: "Local LCD Display Readout",
      chassis: "Clear Acrylic Flue Chimney Column"
    },
    budget: {
      prototypeCost: 2450,
      batchCost: 1200,
      bom: [
        { name: "Arduino Uno R3 Board", spec: "ATmega328P CH340", qty: 1, price: 340, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/arduino-uno-r3-with-cable", altVendor: "Robu.in", altUrl: "#" },
        { name: "High Voltage DC Pulse Generator (10kV)", spec: "Step-up arc generator for soot precipitation", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/high-voltage-generator-module-dc-3-6v-to-1000kv", altVendor: "Robu.in", altUrl: "#" },
        { name: "Optical Dust Sensor (GP2Y1010AU0F)", spec: "Infrared particle sensor", qty: 1, price: 420, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/optical-dust-sensor-gp2y1010au0f", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 88,
      competitionPotential: "National Level (CBSE Skill Expo Winner)",
      pitchStrength: "Circular economy circularity: Turning deadly pollution into printing ink.",
      patentViability: "Medium - High",
      commercializationScore: 80,
      risks: ["High voltage module insulation safety during demonstrations."],
      nextSteps: ["Collect precipitated carbon soot and formulate certified screen-printing ink sample."]
    }
  },

  {
    id: "voice-controlled-wheelchair",
    name: "Voice Controlled Wheelchair & Gesture Assist",
    school: "CCWS",
    grade: "Grade 11",
    section: "XI",
    lead: "Aarambh Ajmerjoshi",
    members: ["Aarambh Ajmerjoshi", "Keshav Garg", "Krishiv Gupta"],
    mentors: ["Ashok Sir"],
    category: "Robotics & Automation",
    subCategories: ["Healthcare & Mental Health", "Accessibility & Assistive Technology"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Winner in Various Interschool Competitions; WRO Regional Competitor",
    pptUrl: "https://drive.google.com/file/d/1xtzasgp2EJZFazoL77lyZTZ5AF1s55Sz/view?usp=drivesdk",
    appUrl: "",
    problem: "Quadriplegic and elderly patients who lack manual arm strength cannot operate conventional motorized joysticks to navigate wheelchairs independently.",
    solution: "A voice and head-gesture operated electric wheelchair controller. Uses offline speech recognition (Elechouse Voice Recognition V3) combined with MPU6050 accelerometer head-tracking and ultrasonic perimeter collision avoidance.",
    techStack: ["Arduino Mega", "Elechouse Voice V3", "MPU6050 Gyro", "L298N / Cytron Motor Drivers", "High-Torque DC Motors"],
    specs: {
      mcu: "Arduino Mega 2560 R3",
      sensors: "Voice Recognition Module V3 (Offline), MPU6050 6-DOF IMU, 3x Ultrasonic obstacle sensors",
      actuators: "2x 24V 250W Geared Wheelchair Motors (Simulated on prototype with 12V 100RPM DC motors)",
      power: "12V 7Ah Rechargeable Battery",
      connectivity: "Bluetooth HC-05 + Offline Voice",
      chassis: "Heavy duty robot base with omni-directional caster wheels"
    },
    budget: {
      prototypeCost: 4600,
      batchCost: 2800,
      bom: [
        { name: "Voice Recognition Module V3 (Elechouse)", spec: "Offline 80 voice command speaker dependent module", qty: 1, price: 1450, vendor: "Robu.in", vendorUrl: "https://robu.in/product/voice-recognition-module-v3/", altVendor: "Quartz Components", altUrl: "#" },
        { name: "Arduino Mega 2560 R3", spec: "Microcontroller", qty: 1, price: 750, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/arduino-mega-2560-r3", altVendor: "Robu.in", altUrl: "#" },
        { name: "MPU-6050 Gyro + Accelerometer", spec: "6-Axis motion sensor", qty: 1, price: 165, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/mpu-6050-accelerometer-and-gyroscope-sensor-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "Dual H-Bridge Motor Driver Module", spec: "High current motor driver", qty: 1, price: 380, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/l298n-motor-driver-module", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 89,
      competitionPotential: "National Level (Interschool Winner)",
      pitchStrength: "High emotional resonance and immediate assistive mobility impact.",
      patentViability: "Medium",
      commercializationScore: 85,
      risks: ["Ambient room noise interfering with voice recognition commands."],
      nextSteps: ["Implement emergency obstacle auto-braking when distance < 30cm."]
    }
  },

  {
    id: "visio-restore",
    name: "Visio Restore — AI Navigation Glasses for Visually Impaired",
    school: "CCWS",
    grade: "Grade 12",
    section: "XII",
    lead: "Deshna Jain",
    members: ["Deshna Jain", "Vatsal Anthwal"],
    mentors: ["Ashok Sir"],
    category: "Accessibility & Assistive Technology",
    subCategories: ["Healthcare & Mental Health"],
    prototypeType: "Working Model & Wearable",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Selected for National Level CBSE Science Exhibition (2024–25)",
    pptUrl: "https://docs.google.com/document/d/1R7p-gT08s_r_e2RDrUc1GWI19tXbzSY0dP3-viCCRJY/edit?usp=drivesdk",
    appUrl: "",
    problem: "Visually impaired pedestrians struggle with elevated head-level obstacles, potholes, and currency recognition with traditional white canes.",
    solution: "Smart wearable AI glasses equipped with dual ultrasonic sensors, wide-angle camera, bone-conduction audio earphones, and haptic buzzer temples that warn of overhead obstacles and announce currency denominations.",
    techStack: ["Raspberry Pi Zero 2 W", "Pi Camera Module", "Ultrasonic Transducers", "Bone Conduction Driver", "Python OpenCV"],
    specs: {
      mcu: "Raspberry Pi Zero 2 W (Quad-core 1GHz ARM Cortex-A53, 512MB RAM)",
      sensors: "Raspberry Pi Camera V2 8MP, 2x Micro Ultrasonic Transducers",
      actuators: "Mini Haptic Vibration Motors (Left/Right temples), Bone Conduction Audio Headset",
      power: "5V 2500mAh Li-Po flat battery pack in neck lanyard",
      connectivity: "BLE 4.2 / Offline Text-to-Speech (eSpeak / Piper)",
      chassis: "3D printed lightweight spectacle frame in nylon/carbon-fiber composite"
    },
    budget: {
      prototypeCost: 4850,
      batchCost: 2600,
      bom: [
        { name: "Raspberry Pi Zero 2 W", spec: "Quad core SBC with Wi-Fi/BLE", qty: 1, price: 1850, vendor: "Robu.in", vendorUrl: "https://robu.in/product/raspberry-pi-zero-2-w/", altVendor: "Quartz Components", altUrl: "#" },
        { name: "Raspberry Pi Camera Module V2", spec: "8MP Sony IMX219 sensor", qty: 1, price: 1450, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/raspberry-pi-camera-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "Micro Vibration Motors", spec: "Coin pager vibration motors", qty: 2, price: 50, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/vibration-motor-coin-type", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 92,
      competitionPotential: "National Level (CBSE National Finalist)",
      pitchStrength: "Exceptional assistive wearable utility solving head-level injury risk.",
      patentViability: "Medium - High",
      commercializationScore: 87,
      risks: ["Heat dissipation of SBC on eyeglass frame (needs neckband module split)."],
      nextSteps: ["Integrate bone conduction audio directly into the spectacles frame temple."]
    }
  },

  {
    id: "safar-saathi",
    name: "Safar Saathi — Wearable Cultural Shield & Artisan Router",
    school: "CCHS",
    grade: "Grade 11",
    section: "XI",
    lead: "Naisha",
    members: ["Naisha", "Kush", "Deepanshi"],
    mentors: ["Ashok Sir"],
    category: "Heritage, Culture & Tourism",
    subCategories: ["Civic Sense & Public Safety", "Social Impact & Community Welfare"],
    prototypeType: "Working Model & App",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "WRO (World Robot Olympiad) Nationals 2026 Nominee",
    pptUrl: "https://canva.link/aa5rnnhas76emu9",
    appUrl: "",
    problem: "Solo travelers and cultural tourists face acute security vulnerabilities, language exploitation, and difficulty finding verified indigenous local artisans.",
    solution: "A smart wearable tourist cultural-shield pendant with panic biometrics (heart rate spike detection), GPS location broadcast, multilingual voice translation, and verified fair-trade artisan routing.",
    techStack: ["ESP32-S3", "MAX30102 Pulse Oximeter", "NEO-6M GPS", "SIM800L GSM", "SOS Push Button"],
    specs: {
      mcu: "ESP32-S3 Dual Core 240MHz",
      sensors: "MAX30102 Heart Rate & SpO2 Sensor, NEO-6M GPS Module",
      actuators: "100dB Emergency Siren Buzzer, RGB Status Indicator",
      power: "3.7V 1000mAh Li-Po Battery with USB-C Charger",
      connectivity: "GSM/GPRS SIM800L Cellular + GPS Satellite",
      chassis: "Jewelry-style engraved pendant enclosure inspired by Rajasthani heritage motifs"
    },
    budget: {
      prototypeCost: 2850,
      batchCost: 1450,
      bom: [
        { name: "ESP32-S3 Development Board", spec: "Wi-Fi + BLE 5.0", qty: 1, price: 490, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-s3-wroom-1-n16r8-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "MAX30102 Pulse Oximeter Sensor", spec: "Heart rate and blood oxygen module", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/max30102-pulse-oximeter-and-heart-rate-sensor-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "SIM800L GSM GPRS Cellular Module", spec: "Micro SIM cellular breakout", qty: 1, price: 450, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/sim800l-gprs-gsm-module", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 87,
      competitionPotential: "WRO Nationals 2026",
      pitchStrength: "Beautiful convergence of cultural preservation with modern tourist emergency response.",
      patentViability: "Medium",
      commercializationScore: 82,
      risks: ["2G network sunset in certain international markets requires 4G LTE-M / NB-IoT."],
      nextSteps: ["Upgrade SIM800L to SIM7600E 4G module for international tourist compatibility."]
    }
  },

  {
    id: "udaan-women-safety",
    name: "Udaan — Women Safety & Security Wearable AI",
    school: "CCIS",
    grade: "Grade 9",
    section: "IX",
    lead: "Tanishka Negi",
    members: ["Tanishka Negi", "Ayana Agarwal", "Pankhuri Bhardwaj", "Aishwarya Sharma", "Vaidehi Shrivastava"],
    mentors: ["Puru Sir", "Neha Gurbakshani Ma'am"],
    category: "Women Empowerment & Gender Equality",
    subCategories: ["AI and Digital Technology", "Civic Sense & Public Safety", "Social Impact"],
    prototypeType: "App & Wearable Smart Accessory",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Participating in Launchverse; 1st Prize In-School STEM Challenge",
    pptUrl: "https://www.canva.com/design/DAGwIH6cuvQ/GpGg0tyGdmNzYbu7tAsB4g/edit",
    appUrl: "https://udaan01.lovable.app/",
    problem: "Women walking alone in unlit or isolated areas face harassment with zero time to unlock a phone or dial emergency numbers during an ambush.",
    solution: "A covert smart ring / bracelet wearable with a discreet double-tap haptic trigger that transmits live GPS coordinates, triggers continuous audio recording, and sends emergency alerts to pre-saved guardians and police contacts via an intuitive companion mobile app.",
    techStack: ["ESP32-C3 SuperMini", "BLE 5.0", "MEMS Accelerometer", "Flutter / Lovable Web App", "Firebase Realtime DB"],
    specs: {
      mcu: "ESP32-C3 SuperMini (RISC-V Single Core 160MHz, Ultra-low power sleep)",
      sensors: "LIS3DH Ultra-Low Power 3-Axis Accelerometer (Tap/Gesture detect)",
      actuators: "Miniature 0820 Haptic Vibration Motor, Emergency LED indicator",
      power: "3.7V 150mAh Coin/Pouch LiPo with magnetic wireless charging dock",
      connectivity: "BLE 5.0 Long Range to Smartphone app",
      chassis: "Hypoallergenic jewelry-grade resin ring/bracelet casing"
    },
    budget: {
      prototypeCost: 1450,
      batchCost: 650,
      bom: [
        { name: "ESP32-C3 SuperMini Board", spec: "Ultra-compact IoT controller", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-c3-supermini-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "LIS3DH 3-Axis Accelerometer", spec: "I2C ultra-low power motion sensor", qty: 1, price: 210, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/lis3dh-triple-axis-accelerometer-breakout", altVendor: "Robu.in", altUrl: "#" },
        { name: "Micro LiPo Battery (150mAh)", spec: "3.7V ultra-small form factor", qty: 1, price: 180, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/3-7v-150mah-lipo-battery", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 91,
      competitionPotential: "Launchverse / National Social Impact Challenge",
      pitchStrength: "Passionate, polished presentation with live Lovable web app prototype.",
      patentViability: "Medium",
      commercializationScore: 90,
      risks: ["Accidental false alarm triggers during ordinary sports/hand gestures."],
      nextSteps: ["Implement AI pattern filtering in the app to distinguish accidental bumps from panic taps."]
    }
  },

  {
    id: "seekly-marketing-ai",
    name: "Seekly — Autonomous SEO, GEO & AEO Optimization",
    school: "CCIS",
    grade: "Grade 8",
    section: "8th Nexa / D",
    lead: "Satvik Lohar",
    members: ["Satvik Lohar", "Aarav Kangan", "Aarav Nagpal", "Sarthak Dhaked", "Agastya Singh", "Akshat Singh"],
    mentors: ["Khushboo Tak Ma'am", "Chirag Sir"],
    category: "AI and Digital Technology",
    subCategories: ["Education & Skill Development", "Social Impact & Community Welfare"],
    prototypeType: "Web App & SaaS",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Participating in Launchverse; Live on Render (`seekly-8a5p.onrender.com`)",
    pptUrl: "https://storage.googleapis.com/skillizee-io.firebasestorage.app/ideathon/submissions/ppt/ccis_DIKQGemEAgRQ3bfsn9C1_level1_1786024350942.pdf",
    appUrl: "https://seekly-8a5p.onrender.com/",
    problem: "Small local businesses cannot afford enterprise marketing agencies (charging ₹50,000+/mo) to adapt their web presence to modern Generative AI search engines (Perplexity, ChatGPT, Gemini).",
    solution: "An automated search engine optimization engine that analyzes web assets for classic Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) to guarantee discoverability by LLMs and search crawlers.",
    techStack: ["Node.js / Express", "Python FastAPI", "OpenAI / Gemini API", "Render Cloud Hosting", "Tailwind CSS"],
    specs: {
      mcu: "Cloud Hosted (Render.com Docker Container)",
      sensors: "Web Scraper & Headless Chromium Crawler",
      actuators: "Automated Sitemap & Schema Markup Generator",
      power: "Cloud Computing Instance",
      connectivity: "REST API / Webhooks",
      chassis: "Web & Mobile SaaS Interface"
    },
    budget: {
      prototypeCost: 450,
      batchCost: 0,
      bom: [
        { name: "Domain Name & SSL (.tech/.ai)", spec: "1 Year registration", qty: 1, price: 450, vendor: "Namecheap / Cloudflare", vendorUrl: "https://www.cloudflare.com", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 94,
      competitionPotential: "Launchverse / Student Startup Challenge",
      pitchStrength: "Ahead of the curve addressing AEO/GEO disruption in search engines.",
      patentViability: "Low - Medium (Software Algorithm)",
      commercializationScore: 92,
      risks: ["API token costs scaling with high traffic."],
      nextSteps: ["Implement free tier caching to minimize OpenAI/Gemini API billing costs."]
    }
  },

  {
    id: "oxypod",
    name: "OxyPod — Portable Emergency Oxygen & Air Filter",
    school: "CCIS",
    grade: "Grade 8",
    section: "8th Nexa",
    lead: "Divit Bhansali",
    members: ["Divit Bhansali", "Nimrita Bhawani", "Naivaidhya Dubey", "Hemang Saini"],
    mentors: ["Chirayu Sir", "Khushboo Tak Ma'am"],
    category: "Healthcare & Mental Health",
    subCategories: ["Sustainability & Environment"],
    prototypeType: "Working Model & App",
    status: "In Progress",
    exhibitedBefore: "No",
    achievements: "Ideathon Level 1 Submissions Finalist; Live Web MVP Deployed",
    pptUrl: "https://storage.googleapis.com/skillizee-io.firebasestorage.app/ideathon/submissions/ppt/ccis_uDixYGec7iP4g4h57zDK_1786028097390.pptx",
    appUrl: "https://oxypod-ideathon.web.app/",
    problem: "Asthma sufferers, elderly patients, and athletes lack compact, personal localized clean-air pods during severe air pollution spikes in urban environments.",
    solution: "A miniaturized wearable HEPA + activated carbon positive-pressure air purification neckband pod that delivers purified oxygen-rich air directly around the wearer's breathing zone.",
    techStack: ["Micro Brushless Centrifugal Fan", "HEPA H13 Filter", "Negative Ion Generator", "ESP32", "Li-ion BMS"],
    specs: {
      mcu: "ESP32-C3",
      sensors: "PMS5003 Laser Dust PM2.5 Sensor",
      actuators: "Ultra-quiet 5V Blower Fan, Negative Anion Emitter",
      power: "3.7V 2000mAh Li-ion battery",
      connectivity: "BLE to OxyPod Mobile App",
      chassis: "Ergonomic silicone neckband housing"
    },
    budget: {
      prototypeCost: 2150,
      batchCost: 950,
      bom: [
        { name: "PMS5003 Laser Dust Sensor", spec: "Measures PM1.0, PM2.5, PM10", qty: 1, price: 950, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/pms5003-pm2-5-laser-dust-sensor-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "Mini 5V DC Centrifugal Blower", spec: "Low noise air intake", qty: 1, price: 220, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/5v-dc-blower-fan", altVendor: "Robu.in", altUrl: "#" },
        { name: "H13 Grade Miniature HEPA Filter", spec: "99.97% particulate filtration", qty: 2, price: 300, vendor: "Amazon.in", vendorUrl: "https://www.amazon.in", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 84,
      competitionPotential: "State Level (Ideathon Finalist)",
      pitchStrength: "Clear personal wellness utility for respiratory health.",
      patentViability: "Medium",
      commercializationScore: 83,
      risks: ["Noise level of blower close to the ears."],
      nextSteps: ["Incorporate noise-dampening acoustic foam around the air outlet."]
    }
  },

  {
    id: "chlorophyll-battery",
    name: "Chlorophyll Bio-Battery — Plant Bio-Photovoltaic Cell",
    school: "CCWS",
    grade: "Grade 11",
    section: "XI",
    lead: "Aarambh Ajmerjoshi",
    members: ["Aarambh Ajmerjoshi", "Keshav Garg"],
    mentors: ["Ashok Sir"],
    category: "Clean & Renewable Energy",
    subCategories: ["Sustainability & Environment"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "National Level Winner, CBSE Science Exhibition (2023–24)",
    pptUrl: "https://docs.google.com/presentation/d/1mJSwz3OAXtJKsHogQR0dTnPnQwL5NwyrpEpCaQP4wd0/edit?usp=drivesdk",
    appUrl: "",
    problem: "Toxic chemical battery disposal (lead, cadmium, lithium) contaminates soil and water ecosystems across rural and agricultural landscapes.",
    solution: "A bio-photovoltaic galvanic cell that harnesses photosynthetic electron transfer from extracted botanical chlorophyll and plant soil microbes to generate clean micro-power for IoT agricultural sensors.",
    techStack: ["Chlorophyll Pigment Extract", "Carbon Felt Electrodes", "Agar Gel Electrolyte", "Joule Thief Circuit"],
    specs: {
      mcu: "Ultra-low power harvesting circuit (Texas Instruments BQ25504)",
      sensors: "Multimeter Analog Voltage/Current Monitoring",
      actuators: "Ultra-bright LED / Low Power LCD Clock",
      power: "Self-charging biological photosynthetic cell array",
      connectivity: "Off-grid green energy",
      chassis: "Modular acrylic stackable bio-battery chamber"
    },
    budget: {
      prototypeCost: 1650,
      batchCost: 450,
      bom: [
        { name: "Carbon Felt Electrodes (High Surface Area)", spec: "Electrochemical grade 3mm felt", qty: 4, price: 450, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/search?q=carbon+felt", altVendor: "Robu.in", altUrl: "#" },
        { name: "TI BQ25504 Energy Harvester Module", spec: "Ultra low power boost converter with MPPT", qty: 1, price: 650, vendor: "Robu.in", vendorUrl: "https://robu.in/product/bq25504-energy-harvesting-module/", altVendor: "#", altUrl: "#" },
        { name: "Acrylic Bio-Chambers & Agar Gel", spec: "Laser cut bio-cell housings", qty: 1, price: 550, vendor: "Amazon.in", vendorUrl: "https://www.amazon.in", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 93,
      competitionPotential: "National Level (CBSE National Winner)",
      pitchStrength: "Captivating biological clean energy experiment with official CBSE award credential.",
      patentViability: "Medium",
      commercializationScore: 74,
      risks: ["Low milliampere current output limits applications to ultra-low-power microcontrollers."],
      nextSteps: ["Pair with supercapacitors to enable intermittent ESP32 deep-sleep IoT transmissions."]
    }
  },

  {
    id: "sandtherm",
    name: "SandTherm — High Density Sand Thermal Energy Storage",
    school: "CCWS",
    grade: "Grade 11",
    section: "XI",
    lead: "Darsh Khandelwal",
    members: ["Darsh Khandelwal"],
    mentors: ["Ashok Sir"],
    category: "Clean & Renewable Energy",
    subCategories: ["Sustainability & Environment"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "INSPIRE Award MANAK District & State Winner",
    pptUrl: "https://drive.google.com/file/d/1_sVj33NovLpPUWqAmaYthBRAIeWLgtbw/view?usp=drivesdk",
    appUrl: "",
    problem: "Excess solar energy generated during midday in desert areas (like Rajasthan) is wasted or requires expensive lithium batteries for storage.",
    solution: "A thermal battery using abundant desert silica sand as a high-temperature sensible heat storage medium. Surplus solar power heats resistive heating coils embedded in insulated sand up to 500°C, and heat is extracted at night via air coils for clean space heating and cooking.",
    techStack: ["Silica Sand Thermal Reservoir", "K-Type Thermocouple Probes", "MAX6675 ADC", "Nichrome Resistive Coils"],
    specs: {
      mcu: "Arduino Uno",
      sensors: "2x K-Type Thermocouple with MAX6675 SPI amplifier",
      actuators: "High-Temperature Nichrome Wire Heating Element (500W), 12V Heat Exchange Air Blower",
      power: "Solar PV / Grid heating input",
      connectivity: "Local Temperature Monitor Readout",
      chassis: "Double-walled refractory brick and vermiculite insulated kiln housing"
    },
    budget: {
      prototypeCost: 2200,
      batchCost: 1100,
      bom: [
        { name: "MAX6675 + K-Type Thermocouple", spec: "0-1024C high temp sensor module", qty: 2, price: 280, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/max6675-module-k-type-thermocouple-temperature-sensor", altVendor: "Robu.in", altUrl: "#" },
        { name: "Nichrome 80/20 Resistance Wire Element", spec: "500W high temperature heater", qty: 1, price: 350, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/nichrome-wire", altVendor: "Amazon.in", altUrl: "#" },
        { name: "Refractory Insulation Blanket & Casing", spec: "Ceramic fiber thermal insulation", qty: 1, price: 750, vendor: "Amazon.in", vendorUrl: "https://www.amazon.in", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 88,
      competitionPotential: "State / National Level (INSPIRE MANAK)",
      pitchStrength: "Remarkable low-cost thermal battery leveraging Rajasthan's abundant natural sand.",
      patentViability: "Medium",
      commercializationScore: 82,
      risks: ["Thermal insulation must guarantee zero outer-casing burn hazards for school demonstrations."],
      nextSteps: ["Measure round-trip thermal efficiency (percentage heat retained after 12 hours)."]
    }
  },

  {
    id: "fridge-chef",
    name: "Fridge Chef / Fridge Guy — Smart Inventory & Recipe AI",
    school: "CCIS",
    grade: "Grade 8 - 11",
    section: "8th & 11th",
    lead: "Satvik Lohar",
    members: ["Satvik Lohar", "Vedant Singh", "Sarthak Dhaked", "Aarav Kangan"],
    mentors: ["Puru Sir", "Chirag Sir"],
    category: "AI and Digital Technology",
    subCategories: ["SDG-Aligned Innovation"],
    prototypeType: "App & IoT Inventory Scale",
    status: "In Progress",
    exhibitedBefore: "No",
    achievements: "Ideathon Level 1 Submissions Finalist; Interactive Pitch Deck on Canva",
    pptUrl: "https://www.canva.com/design/DAGv-N5Q19o/cJX63-hZIE7RzVhE2L6iVA/edit",
    appUrl: "https://frzai.com",
    problem: "Household food waste in urban kitchens accounts for thousands of rupees monthly because ingredients get forgotten and spoil in refrigerator corners.",
    solution: "A smart refrigerator camera and weight shelf that auto-catalogs groceries, detects expiration dates, and uses generative AI to recommend delicious zero-waste recipes from whatever is in the fridge.",
    techStack: ["ESP32-CAM", "Load Cell Shelf", "OpenAI Vision API", "Flutter Mobile App"],
    specs: {
      mcu: "ESP32-CAM + Arduino Nano",
      sensors: "OV2640 2MP Camera, 4x 5kg Load Cells with HX711",
      actuators: "Magnetic Door Sensor & LED Light Bar",
      power: "5V 2A USB Adapter",
      connectivity: "Wi-Fi (MQTT to Cloud AI Recipe Engine)",
      chassis: "Slim modular shelf tray inserting into standard home refrigerators"
    },
    budget: {
      prototypeCost: 1980,
      batchCost: 890,
      bom: [
        { name: "ESP32-CAM Module with OV2640", spec: "Camera module", qty: 1, price: 520, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-cam-wifi-bluetooth-camera-module-development-board-with-ov2640-camera", altVendor: "Robu.in", altUrl: "#" },
        { name: "4x 5kg Load Cells + HX711 ADC", spec: "Weight shelf sensing", qty: 1, price: 420, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/hx711-weighing-sensor-amplifier-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "Acrylic Shelf Assembly", spec: "Laser cut transparent food-grade tray", qty: 1, price: 450, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/search?q=acrylic", altVendor: "Amazon.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 82,
      competitionPotential: "Launchverse / Ideathon Finalist",
      pitchStrength: "Appealing lifestyle utility with high TAM in smart home appliance tech.",
      patentViability: "Low - Medium",
      commercializationScore: 86,
      risks: ["Condensation fogging the camera lens inside cold refrigerator interiors."],
      nextSteps: ["Add an anti-fog hydrophobic coating or miniature defogging heating resistor onto the lens."]
    }
  },

  {
    id: "braille-teaching-aid",
    name: "Tactile Braille Teaching Aid & Interactive Slate",
    school: "CCWS",
    grade: "Grade 11",
    section: "XI",
    lead: "Krishiv Gupta",
    members: ["Krishiv Gupta"],
    mentors: ["Ashok Sir"],
    category: "Accessibility & Assistive Technology",
    subCategories: ["Education & Skill Development"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Vivo Ignite National Level Finalist; Interschool Winner",
    pptUrl: "https://docs.google.com/document/d/18D-B5HfAEqIcU2eCQIAcPPwfFpjGDuG2DyVSPF0gHzI/edit?usp=drivesdk",
    appUrl: "",
    problem: "Visually impaired students take years to master physical Braille due to the lack of interactive, real-time auditory feedback during mechanical slate-and-stylus practice.",
    solution: "An electronic 6-dot refreshable Braille learning cell with electromagnetic solenoids and audio pronunciation. When the student touches or presses a Braille dot combination, the device instantly pronounces the corresponding letter and word through an onboard MP3 speaker.",
    techStack: ["Arduino Mega", "6-Dot Solenoid Actuator Matrix", "DFPlayer Mini MP3", "Capacitive Touch Pins"],
    specs: {
      mcu: "Arduino Uno / Mega",
      sensors: "6x Capacitive Touch Brass Studs",
      actuators: "Mini 5V Push-Pull Solenoid Actuators, 8 Ohm 2W Speaker",
      power: "5V 2A DC Power Supply",
      connectivity: "Stand-alone audio learning device",
      chassis: "Large ergonomic child-friendly wooden/acrylic tablet"
    },
    budget: {
      prototypeCost: 2650,
      batchCost: 1300,
      bom: [
        { name: "Mini 5V Push-Pull Solenoids", spec: "Tactile pin actuators", qty: 6, price: 180, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/5v-solenoid-valve-actuator", altVendor: "Robu.in", altUrl: "#" },
        { name: "DFPlayer Mini MP3 Player Module", spec: "Audio playback module", qty: 1, price: 210, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/dfplayer-mini-mp3-player-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "TTP229 16-Channel Capacitive Touch Module", spec: "Touch input sensor", qty: 1, price: 140, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/ttp229-16-channel-capacitive-touch-module", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 92,
      competitionPotential: "National Level (Vivo Ignite Finalist)",
      pitchStrength: "Profound educational impact for inclusive classrooms and blind schools.",
      patentViability: "Medium - High",
      commercializationScore: 86,
      risks: ["Solenoid power consumption and heat during continuous touch."],
      nextSteps: ["Replace heavy solenoids with bistable micro-servos or piezoelectric pins to save power."]
    }
  },

  {
    id: "sakha-helping-hand",
    name: "Sakha: A Helping Hand — Robotic Prosthetic Exoskeleton",
    school: "CCWS",
    grade: "Grade 11",
    section: "XI",
    lead: "Krishiv Gupta",
    members: ["Krishiv Gupta"],
    mentors: ["Ashok Sir"],
    category: "Healthcare & Mental Health",
    subCategories: ["Accessibility & Assistive Technology", "Robotics & Automation"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "Winner in Various Interschool Robotics Competitions",
    pptUrl: "https://drive.google.com/file/d/1yN6KU45pDk9BmNuQ_09OZn_hmZaerNq4/view?usp=drivesdk",
    appUrl: "",
    problem: "Stroke rehabilitation and amputee hand prosthetics cost lakhs of rupees and are too heavy for daily motor function recovery.",
    solution: "A lightweight 3D-printed bionic hand exoskeleton operated by surface electromyography (EMG) muscle signals and flex sensors, enabling patients to grasp everyday cups, pens, and cutlery with adaptive grip tension.",
    techStack: ["Arduino Nano", "MyoWare Muscle Sensor (EMG)", "MG996R Metal Servos", "Nylon Tendon Cables", "3D Bionic Hand"],
    specs: {
      mcu: "Arduino Nano V3.0",
      sensors: "MyoWare Muscle EMG Sensor with gel bio-electrodes, Flex Sensors (2.2 inch)",
      actuators: "5x Micro Servos driving individual finger tendon cables",
      power: "7.4V 2S Li-ion battery pack with 5V 5A UBEC buck regulator",
      connectivity: "Direct biosignal muscle control",
      chassis: "Anatomically articulated 3D printed PLA bionic hand and forearm gauntlet"
    },
    budget: {
      prototypeCost: 3850,
      batchCost: 1950,
      bom: [
        { name: "MyoWare Muscle Sensor (EMG Module)", spec: "Bio-potential EMG sensor", qty: 1, price: 1650, vendor: "Robu.in", vendorUrl: "https://robu.in/product/myoware-muscle-sensor/", altVendor: "Quartz Components", altUrl: "#" },
        { name: "MG90S Metal Gear Micro Servos", spec: "Tendon pull actuators", qty: 5, price: 180, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/mg90s-metal-gear-micro-servo-motor", altVendor: "Robu.in", altUrl: "#" },
        { name: "3D Printed Bionic Hand Assembly", spec: "Articulated fingers and palm", qty: 1, price: 650, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/search?q=pla", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 90,
      competitionPotential: "National Level (Interschool Podium)",
      pitchStrength: "High-impact biomedical engineering showcasing live muscle-controlled actuation.",
      patentViability: "Medium",
      commercializationScore: 84,
      risks: ["Electrode skin impedance variations require skin prep alcohol wipes."],
      nextSteps: ["Integrate pressure sensors on fingertips to provide tactile haptic feedback to the patient."]
    }
  },

  {
    id: "voronoi-shield",
    name: "Voronoi Shield — Biomimetic Impact Absorption Armor",
    school: "CCWS",
    grade: "Grade 9",
    section: "IX A",
    lead: "Vihaan Singhal",
    members: ["Vihaan Singhal", "Aaman Singhal"],
    mentors: ["Ashok Sir"],
    category: "Civic Sense & Public Safety",
    subCategories: ["Disaster Management & Resilience"],
    prototypeType: "Working Model & Structural Material",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "CBSE Science Exhibition — National Level (2025–26)",
    pptUrl: "https://docs.google.com/document/d/1loPwa1v-CzwURLNfaBBZinclCbVp02tTKI-Extv7IgY/edit?usp=drivesdk",
    appUrl: "",
    problem: "Standard civil defense crash barriers, construction helmets, and military body armor are heavy, rigid, and fail catastrophically under blunt-force shockwaves.",
    solution: "A lightweight biomimetic energy-absorbing lattice inspired by Voronoi cellular structures found in bone trabeculae and dragonfly wings. Dissipates impact kinetic energy across multi-nodal cell walls, reducing peak transmitted shock by over 60%.",
    techStack: ["Parametric Voronoi CAD", "SLA/FDM 3D Printing", "Piezoelectric Shock Force Sensors", "Drop-Weight Impact Rig"],
    specs: {
      mcu: "Arduino Uno for impact load cell datalogging",
      sensors: "High-G Piezoelectric Shock Force Sensor & 50kg Strain Gauge",
      actuators: "Drop-Tower Electromagnetic Release Mechanism",
      power: "12V Laboratory Power Bench",
      connectivity: "Serial Oscilloscope Telemetry",
      chassis: "Variable-density 3D printed Voronoi test plates"
    },
    budget: {
      prototypeCost: 2400,
      batchCost: 850,
      bom: [
        { name: "Piezoelectric Shock Sensor Film", spec: "PVDF high frequency shock sensor", qty: 2, price: 320, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/piezoelectric-sensor", altVendor: "Robu.in", altUrl: "#" },
        { name: "50kg Load Cell with HX711 Module", spec: "Impact force transducer", qty: 1, price: 340, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/50kg-load-cell-with-hx711", altVendor: "Robu.in", altUrl: "#" },
        { name: "Engineering Tough Resin 3D Print", spec: "High impact Voronoi cellular structure", qty: 1, price: 850, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/search?q=resin", altVendor: "Amazon.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 91,
      competitionPotential: "National Level (CBSE National Qualified)",
      pitchStrength: "Rigorous mechanical engineering and mathematical biomimicry concept.",
      patentViability: "Medium - High",
      commercializationScore: 81,
      risks: ["Requires certified drop-tower deceleration curves to convince defense/automotive judges."],
      nextSteps: ["Perform high-speed 240fps slow-motion impact analysis with quantitative stress-strain curves."]
    }
  }
];

// Component Procurement Catalog for quick lookups across suppliers
const COMPONENT_PROCUREMENT_CATALOG = [
  { name: "ESP32 Development Board (38-Pin)", category: "Microcontrollers", price: "₹380 - ₹450", quartzUrl: "https://quartzcomponents.com/products/esp32-development-board", robuUrl: "https://robu.in/product/esp32-development-board/", stock: "In Stock" },
  { name: "ESP32-CAM Board with OV2640", category: "Microcontrollers & Vision", price: "₹520 - ₹590", quartzUrl: "https://quartzcomponents.com/products/esp32-cam-wifi-bluetooth-camera-module-development-board-with-ov2640-camera", robuUrl: "https://robu.in/product/esp32-cam-development-board-with-ov2640-camera-module/", stock: "In Stock" },
  { name: "Arduino Uno R3 with Cable", category: "Microcontrollers", price: "₹320 - ₹390", quartzUrl: "https://quartzcomponents.com/products/arduino-uno-r3-with-cable", robuUrl: "https://robu.in/product/arduino-uno-r3-ch340g-atmega328p/", stock: "In Stock" },
  { name: "Arduino Nano V3.0 (CH340)", category: "Microcontrollers", price: "₹220 - ₹260", quartzUrl: "https://quartzcomponents.com/products/arduino-nano-v3-0", robuUrl: "https://robu.in/product/arduino-nano-v3-0-ch340-chip/", stock: "In Stock" },
  { name: "Arduino Mega 2560 R3", category: "Microcontrollers", price: "₹750 - ₹850", quartzUrl: "https://quartzcomponents.com/products/arduino-mega-2560-r3", robuUrl: "https://robu.in/product/arduino-mega-2560-r3/", stock: "In Stock" },
  { name: "Raspberry Pi Zero 2 W", category: "Single Board Computers", price: "₹1850 - ₹2100", quartzUrl: "https://quartzcomponents.com/search?q=raspberry+pi+zero+2", robuUrl: "https://robu.in/product/raspberry-pi-zero-2-w/", stock: "Available" },
  { name: "Capacitive Soil Moisture Sensor V1.2", category: "Sensors", price: "₹95 - ₹120", quartzUrl: "https://quartzcomponents.com/products/capacitive-soil-moisture-sensor-module", robuUrl: "https://robu.in/product/capacitive-soil-moisture-sensor-module/", stock: "In Stock" },
  { name: "MQ-3 Alcohol Sensor Module", category: "Sensors", price: "₹150 - ₹180", quartzUrl: "https://quartzcomponents.com/products/mq-3-alcohol-sensor-module", robuUrl: "https://robu.in/product/mq-3-gas-sensor-module-alcohol-ethanol-detection/", stock: "In Stock" },
  { name: "MQ-135 Air Quality Sensor Module", category: "Sensors", price: "₹140 - ₹170", quartzUrl: "https://quartzcomponents.com/products/mq-135-air-quality-sensor-module", robuUrl: "https://robu.in/product/mq135-air-quality-hazardous-gas-detection-sensor-module/", stock: "In Stock" },
  { name: "JSN-SR04T Waterproof Ultrasonic Sensor", category: "Sensors", price: "₹420 - ₹480", quartzUrl: "https://quartzcomponents.com/products/jsn-sr04t-integrated-ultrasonic-distance-measurement-sensor-module", robuUrl: "https://robu.in/product/jsn-sr04t-waterproof-ultrasonic-distance-sensor/", stock: "In Stock" },
  { name: "HC-SR04 Ultrasonic Sensor", category: "Sensors", price: "₹85 - ₹110", quartzUrl: "https://quartzcomponents.com/products/hc-sr04-ultrasonic-sensor", robuUrl: "https://robu.in/product/hc-sr04-ultrasonic-sensor/", stock: "In Stock" },
  { name: "1kg Load Cell + HX711 Module", category: "Sensors & ADCs", price: "₹260 - ₹310", quartzUrl: "https://quartzcomponents.com/products/hx711-weighing-sensor-amplifier-module", robuUrl: "https://robu.in/product/1kg-load-cell-with-hx711-weighing-sensor-module/", stock: "In Stock" },
  { name: "MAX98357A I2S Audio Amplifier", category: "Audio & Speech", price: "₹135 - ₹170", quartzUrl: "https://quartzcomponents.com/products/max98357-i2s-3w-class-d-amplifier-interface-audio-dac-decoder-module", robuUrl: "https://robu.in/product/max98357a-i2s-3w-class-d-amplifier-interface-audio-dac-decoder-module/", stock: "In Stock" },
  { name: "DFPlayer Mini MP3 Player Module", category: "Audio & Speech", price: "₹210 - ₹250", quartzUrl: "https://quartzcomponents.com/products/dfplayer-mini-mp3-player-module", robuUrl: "https://robu.in/product/dfplayer-mini-mp3-player-module/", stock: "In Stock" },
  { name: "TowerPro SG90 9g Micro Servo", category: "Actuators & Motors", price: "₹120 - ₹145", quartzUrl: "https://quartzcomponents.com/products/sg90-micro-servo-motor-9g", robuUrl: "https://robu.in/product/towerpro-sg90-9g-mini-servo-motor/", stock: "In Stock" },
  { name: "MG90S Metal Gear Micro Servo", category: "Actuators & Motors", price: "₹180 - ₹220", quartzUrl: "https://quartzcomponents.com/products/mg90s-metal-gear-micro-servo-motor", robuUrl: "https://robu.in/product/mg90s-metal-gear-micro-servo-motor/", stock: "In Stock" },
  { name: "MG996R High Torque Metal Servo", category: "Actuators & Motors", price: "₹320 - ₹380", quartzUrl: "https://quartzcomponents.com/products/mg996r-digital-metal-gear-servo-motor", robuUrl: "https://robu.in/product/mg996r-digital-metal-gear-servo-motor/", stock: "In Stock" },
  { name: "5V 2-Channel Relay Module", category: "Actuators & Drivers", price: "₹110 - ₹135", quartzUrl: "https://quartzcomponents.com/products/2-channel-5v-relay-module", robuUrl: "https://robu.in/product/5v-two-channel-relay-module-with-optocoupler/", stock: "In Stock" },
  { name: "12V R385 Mini Water Pump", category: "Pumps & Solenoids", price: "₹280 - ₹340", quartzUrl: "https://quartzcomponents.com/products/r385-diaphragm-water-pump-12v", robuUrl: "https://robu.in/product/r385-dc12v-mini-aquarium-water-pump/", stock: "In Stock" },
  { name: "NEO-6M GPS Module with Antenna", category: "Wireless & Navigation", price: "₹480 - ₹550", quartzUrl: "https://quartzcomponents.com/products/neo-6m-gps-module", robuUrl: "https://robu.in/product/gy-neo6mv2-flight-controller-gps-module-for-arduino-mwc-apm-2-5/", stock: "In Stock" },
  { name: "TP4056 Type-C Li-ion Charger Module", category: "Power & Batteries", price: "₹45 - ₹65", quartzUrl: "https://quartzcomponents.com/products/tp4056-type-c-lithium-battery-charger-module", robuUrl: "https://robu.in/product/tp4056-type-c-usb-5v-1a-18650-lithium-battery-charger-module/", stock: "In Stock" },
  { name: "0.96 inch I2C OLED Display Module", category: "Displays", price: "₹165 - ₹195", quartzUrl: "https://quartzcomponents.com/products/0-96-inch-i2c-iic-128x64-oled-display-module", robuUrl: "https://robu.in/product/0-96-inch-i2c-iic-spi-128x64-oled-display-module/", stock: "In Stock" }
];


const ADDITIONAL_PROJECTS = [
  {
    id: "smart-anti-theft-farm",
    name: "Smart Anti-Theft Farm Workstation",
    school: "CCIS",
    grade: "Grade 7 - 8",
    section: "7th / 8th",
    lead: "Viraaj Gupta",
    members: ["Viraaj Gupta", "Kaushabi", "Amayrah"],
    mentors: ["Puru Sir", "Chirag Sir"],
    category: "Agriculture & Agri-Tech",
    subCategories: ["Civic Sense & Public Safety", "Sustainability & Environment"],
    prototypeType: "Working Model",
    status: "Ready",
    exhibitedBefore: "Yes",
    achievements: "C'est Ton Moment & Creo STEM 1st Prize Winners",
    pptUrl: "https://drive.google.com/file/d/1fozhWHE0516enrrHI8eRwq1ZV5K8P4xf/view?usp=sharing",
    appUrl: "https://smart-agri-dock.web.app",
    problem: "Agricultural perimeter crop theft, nocturnal cattle intrusion, and motor pump theft cost smallholder farmers tens of thousands of rupees per harvest.",
    solution: "A solar-powered perimeter surveillance and pump-security station with laser/PIR tripwires, automated acoustic animal repeller, and cellular GSM tamper alert to the farmer's mobile.",
    techStack: ["Arduino Uno", "PIR Motion Sensor", "Laser & LDR Tripwire", "SIM800L GSM", "Solar Charging Board"],
    specs: {
      mcu: "Arduino Uno R3 (ATmega328P)",
      sensors: "PIR Motion Sensors, 650nm Laser with LDR receiver, Tilt Vibration Sensor",
      actuators: "110dB High-Pitch Strobe Siren, 12V High-Beam LED floodlight",
      power: "12V 5W Solar Panel with 12V 4.5Ah Lead Acid / Li-ion Battery",
      connectivity: "SIM800L GSM Automated Voice Call / SMS",
      chassis: "Weatherproof junction station with grounding spike"
    },
    budget: {
      prototypeCost: 2350,
      batchCost: 1200,
      bom: [
        { name: "Arduino Uno R3", spec: "CH340G Board", qty: 1, price: 340, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/arduino-uno-r3-with-cable", altVendor: "Robu.in", altUrl: "#" },
        { name: "SIM800L GSM GPRS Module", spec: "Cellular alert module", qty: 1, price: 450, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/sim800l-gprs-gsm-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "PIR Motion Sensor (HC-SR501)", spec: "Infrared intrusion sensor", qty: 2, price: 95, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/hc-sr501-pir-motion-sensor-module", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 88,
      competitionPotential: "National Level (Creo STEM 1st Prize)",
      pitchStrength: "Clear rural crime prevention thesis with high farmer empathy.",
      patentViability: "Medium",
      commercializationScore: 84,
      risks: ["False triggers from domestic stray animals (requires dual PIR confirmation)."],
      nextSteps: ["Implement dual-beam optical tripwire logic to eliminate false alarms from falling leaves."]
    }
  },

  {
    id: "shakti-ki-avaaz",
    name: "Shakti Ki Avaaz — Emergency Safety & Audio Beacon",
    school: "CCIS",
    grade: "Grade 6",
    section: "6th Neo",
    lead: "Ritvika",
    members: ["Ritvika", "Medhanshi", "Archi", "Aaradhya", "Navya", "Anaya"],
    mentors: ["Chirag Sir", "Siddhi Ma'am"],
    category: "Women Empowerment & Gender Equality",
    subCategories: ["Civic Sense & Public Safety"],
    prototypeType: "Working Model & App",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Ideathon Level 1 Submissions Finalist; Live Web App Deployed",
    pptUrl: "https://drive.google.com/file/d/1vhS3a0xEQcINNywe6pWsUBOY2y-ODx6q/view?usp=drivesdk",
    appUrl: "https://shakti-ki-avaaz-app.web.app/",
    problem: "Young schoolgirls and women in distressing situations need an instant acoustic deterrent and fast guardian notification without handling a complex phone.",
    solution: "A compact smart alarm pendant with dual-stage panic trigger: an immediate 120dB ear-piercing siren to deter aggressors and an automatic Bluetooth location broadcast to nearby safe hubs.",
    techStack: ["Thunkable AI", "ESP32", "High-Decibel Siren", "Firebase Web App"],
    specs: {
      mcu: "ESP32-C3 SuperMini",
      sensors: "Tactile pull-pin emergency switch",
      actuators: "120dB Piezo Alarm Horn, High-Intensity Strobe LED",
      power: "Rechargeable 3.7V Li-Po battery",
      connectivity: "BLE 5.0 beaconing to Shakti App",
      chassis: "Heart-shaped compact keychain enclosure"
    },
    budget: {
      prototypeCost: 1250,
      batchCost: 450,
      bom: [
        { name: "ESP32-C3 SuperMini Board", spec: "Microcontroller", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-c3-supermini-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "120dB Siren Module", spec: "Personal alarm buzzer", qty: 1, price: 180, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/active-buzzer", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 89,
      competitionPotential: "State / National Social Innovation",
      pitchStrength: "Enthusiastic Grade 6 girls team with deployed, functional web app.",
      patentViability: "Low - Medium",
      commercializationScore: 88,
      risks: ["Accidental pin pulling in backpacks."],
      nextSteps: ["Add a safety sliding lock cover over the pull-pin."]
    }
  },

  {
    id: "checkmates-anti-counterfeit",
    name: "CheckMates (Check Karo) — AI Medicine Authenticator",
    school: "CCIS",
    grade: "Grade 7",
    section: "7th B",
    lead: "Vihaan Sani",
    members: ["Vihaan Sani", "Arnav Aggarwal", "Bhuvnashver Prajapat", "Vinayak Sharma"],
    mentors: ["Chirayu Sir", "Siddhi Ma'am"],
    category: "AI and Digital Technology",
    subCategories: ["Healthcare & Mental Health"],
    prototypeType: "App & Web Platform",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Ideathon Level 1 Finalist; Hosted on Google Cloud Platform",
    pptUrl: "https://prezi.com/craft?load=ojjvb1g8hadg&edit=true",
    appUrl: "https://check-karo--ideathon-projects.us-central1.hosted.app/",
    problem: "Counterfeit and fake pharmaceuticals flood developing markets, putting patients at risk from adulterated or ineffective drugs.",
    solution: "A mobile OCR and barcode verification tool that cross-checks medicine packaging holograms, batch numbers, and manufacturer barcodes against official CDSCO database records.",
    techStack: ["Lovable / AI Studio", "OCR Vision Engine", "Google Cloud Platform", "Prezi Presentation"],
    specs: {
      mcu: "Cloud Hosted Web App",
      sensors: "Smartphone Camera Barcode Scanner",
      actuators: "Verification Badge & Drug Expiry Warning",
      power: "Cloud Computing",
      connectivity: "HTTPS REST API",
      chassis: "Mobile Friendly Web App"
    },
    budget: {
      prototypeCost: 400,
      batchCost: 0,
      bom: [
        { name: "Cloud Database & Barcode API License", spec: "Cloud hosting", qty: 1, price: 400, vendor: "Google Cloud", vendorUrl: "https://cloud.google.com", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 88,
      competitionPotential: "National Ideathon Finalist",
      pitchStrength: "Addresses huge pharmaceutical public health danger with simple mobile scan.",
      patentViability: "Low (Software Solution)",
      commercializationScore: 90,
      risks: ["Need access to verified manufacturer batch databases."],
      nextSteps: ["Scrape or integrate with public FDA/CDSCO medicine registration portals."]
    }
  },

  {
    id: "evora-skincare-ai",
    name: "Évora — Personalized AI Dermatological Assistant",
    school: "CCIS",
    grade: "Grade 7",
    section: "7th Zen",
    lead: "Manya",
    members: ["Manya", "Hridyanshi"],
    mentors: ["Puru Sir", "Siddhi Ma'am"],
    category: "Healthcare & Mental Health",
    subCategories: ["AI and Digital Technology"],
    prototypeType: "App & Web Platform",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Deployed on Vercel (`evora-nine-xi.vercel.app`); Instagram Brand Channel Active",
    pptUrl: "https://storage.googleapis.com/skillizee-io.firebasestorage.app/ideathon/submissions/ppt/ccis_xkcSwD5tBHJKPJpEoBNG_level1_1787380311900.pdf",
    appUrl: "https://evora-nine-xi.vercel.app/",
    problem: "Adolescents struggle with acne, eczema, and skin damage without affordable access to certified dermatologists, often buying harmful OTC steroid creams.",
    solution: "An AI skin diagnostic platform that scans facial skin blemishes, categorizes skin types (oily, dry, sensitive), and generates personalized skincare routines using natural Ayurvedic and dermatologically approved ingredients.",
    techStack: ["Next.js", "Vercel", "AI Studio Skin Vision", "Tailwind CSS"],
    specs: {
      mcu: "Cloud Hosted (Vercel Edge)",
      sensors: "High-Resolution Phone Camera",
      actuators: "Personalized Daily Routine Generator",
      power: "Cloud Computing",
      connectivity: "Web HTTPS",
      chassis: "Mobile PWA Application"
    },
    budget: {
      prototypeCost: 500,
      batchCost: 0,
      bom: [
        { name: "Domain & Vercel Pro Tier", spec: "Annual deployment", qty: 1, price: 500, vendor: "Vercel", vendorUrl: "https://vercel.com", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 90,
      competitionPotential: "Launchverse / Ideathon Finalist",
      pitchStrength: "Very active branding and sleek Vercel frontend design.",
      patentViability: "Low",
      commercializationScore: 92,
      risks: ["Medical disclaimer compliance to avoid liability for allergic skin reactions."],
      nextSteps: ["Add prominent medical disclaimer and partner with verified dermatologists."]
    }
  },

  {
    id: "she-shield-next-nova",
    name: "She-Shield (Next Nova) — Smart Defense Ring & App",
    school: "CCIS",
    grade: "Grade 8",
    section: "8th D",
    lead: "Prerit Meena",
    members: ["Prerit Meena", "Thiransh Singh", "Samridhi Saraswat", "Navya Sardha", "Freya Panwar", "Shaurya Dakh"],
    mentors: ["Chirag Sir", "Khushboo Tak Ma'am"],
    category: "Women Empowerment & Gender Equality",
    subCategories: ["Civic Sense & Public Safety", "AI and Digital Technology"],
    prototypeType: "Working Model & App",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Ideathon Level 1 Finalist; Web Prototype Deployed on Firebase",
    pptUrl: "https://docs.google.com/presentation/d/1T7CoOIVD_D9uDdx4qkKebkJy10u1BiSpD2SDyWzRGQc/edit?usp=sharing",
    appUrl: "https://she-shield-app.web.app",
    problem: "Women walking alone at night lack discreet means to signal distress without attracting the attacker's attention.",
    solution: "A smart ring and companion app that transmits distress alerts and live location upon triple-tap pressure, along with an integrated pepper spray micro-canister holster.",
    techStack: ["ESP32-C3", "BLE", "Firebase Web App", "Lovable UI"],
    specs: {
      mcu: "ESP32-C3 SuperMini",
      sensors: "Force Sensitive Resistor (FSR402)",
      actuators: "Mini Haptic Motor",
      power: "3.7V 120mAh LiPo Coin Cell",
      connectivity: "BLE 5.0 to Smartphone",
      chassis: "Custom 3D printed ring casing"
    },
    budget: {
      prototypeCost: 1350,
      batchCost: 550,
      bom: [
        { name: "ESP32-C3 SuperMini", spec: "Controller", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-c3-supermini-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "Force Sensitive Resistor (FSR402)", spec: "Pressure trigger", qty: 1, price: 320, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/fsr402-force-sensing-resistor", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 87,
      competitionPotential: "National Ideathon",
      pitchStrength: "Comprehensive 6-member team collaboration with working web application.",
      patentViability: "Medium",
      commercializationScore: 89,
      risks: ["Miniaturization into a wearable ring size."],
      nextSteps: ["Design custom PCB for the ring to eliminate jumper wires."]
    }
  },

  {
    id: "adhyay-zyra",
    name: "Adhyay (Zyra) — Adaptive Learning & Mental Clarity",
    school: "CCIS",
    grade: "Grade 8",
    section: "8th Zen",
    lead: "Siddharth Tiwari",
    members: ["Siddharth Tiwari", "Havisha Basotia", "Shlok Agarwal", "Vaidehi Agarwal", "Shravya Khandelwal"],
    mentors: ["Puru Sir", "Ayushi Ma'am"],
    category: "Education & Skill Development",
    subCategories: ["Healthcare & Mental Health", "AI and Digital Technology"],
    prototypeType: "Mobile App (Play Store Published)",
    status: "Ready (Published on Play Store)",
    exhibitedBefore: "No",
    achievements: "Official Google Play Store App Published (`com.adhyay.foundation`); Deployed Web Portal",
    pptUrl: "https://gamma.app/docs/From-Overwhelmed-To-Clear-saooncqw3kw64ul",
    appUrl: "https://play.google.com/store/apps/details?id=com.adhyay.foundation",
    problem: "Students experience chronic study burnout, exam anxiety, and distraction due to unstructured schedules and cognitive overload.",
    solution: "A gamified cognitive study planner and mental wellness companion that breaks complex syllabi into bite-sized Pomodoro sprints, tracks focus brainwaves, and provides calming mindfulness breaks.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Play Console", "HTML5 Canvas"],
    specs: {
      mcu: "Android & iOS Native Engine",
      sensors: "Phone Screen Time & Gyro Motion Tracking",
      actuators: "Binaural Beats Audio & Haptic Focus Ticks",
      power: "Mobile Device",
      connectivity: "Firebase Cloud Firestore",
      chassis: "Published Android APK"
    },
    budget: {
      prototypeCost: 2100,
      batchCost: 0,
      bom: [
        { name: "Google Play Console Developer Account", spec: "One-time developer fee ($25)", qty: 1, price: 2100, vendor: "Google Play", vendorUrl: "https://play.google.com/console", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 97,
      competitionPotential: "National Level (Live on Play Store)",
      pitchStrength: "Rare achievement for 8th graders: Having a live published app on the Google Play Store with active downloads.",
      patentViability: "Low (Software Product)",
      commercializationScore: 94,
      risks: ["User retention after exam season ends."],
      nextSteps: ["Add daily competitive streak leaderboards among school classmates."]
    }
  },

  {
    id: "kadam-eduband",
    name: "Kadam (EduBand) — Silent Smart School Communication",
    school: "CCIS",
    grade: "Grade 9",
    section: "9th Zen",
    lead: "Aaradhya",
    members: ["Aaradhya", "Aditi", "Kavya", "Mihira", "Divyanshi"],
    mentors: ["Chirag Sir", "Amita Ma'am"],
    category: "Education & Skill Development",
    subCategories: ["Robotics & Automation", "AI and Digital Technology"],
    prototypeType: "Wearable Smart Band & APK",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "EduBand Android APK Generated; Guardian Hub Web Portal Live",
    pptUrl: "https://storage.googleapis.com/skillizee-io.firebasestorage.app/ideathon/submissions/ppt/ccis_8bowr1Rjy94LuAgUw4PV_level1_1786466514399.pdf",
    appUrl: "https://eduband-guardian-hub.lovable.app",
    problem: "School bells disrupt quiet learning environments, and emergency evacuation announcements can trigger stampedes if sirens cause blind panic.",
    solution: "A smart wristband worn by students that receives silent haptic timetable vibrations, period change alerts, and synchronized silent evacuation directions from the principal's console.",
    techStack: ["ESP32-C3", "Vibration Motor", "OLED Screen", "Android Studio (EduBand.apk)", "Lovable Hub"],
    specs: {
      mcu: "ESP32-C3 RISC-V",
      sensors: "Touch Tap Button",
      actuators: "Linear Resonant Actuator (Haptic Motor), 0.42 inch OLED",
      power: "3.7V 200mAh LiPo Battery",
      connectivity: "ESP-NOW Schoolwide Mesh / BLE",
      chassis: "Silicone watch strap with snap-in 3D printed module"
    },
    budget: {
      prototypeCost: 1450,
      batchCost: 650,
      bom: [
        { name: "ESP32-C3 SuperMini", spec: "Controller", qty: 1, price: 290, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-c3-supermini-development-board", altVendor: "Robu.in", altUrl: "#" },
        { name: "0.42 inch Mini I2C OLED", spec: "Wristband display", qty: 1, price: 280, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/0-42-inch-oled-display", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 91,
      competitionPotential: "National Ideathon",
      pitchStrength: "Novel smart campus IoT infrastructure with ready APK and web dashboard.",
      patentViability: "Medium",
      commercializationScore: 88,
      risks: ["Schoolwide mesh network coverage in multi-story concrete buildings."],
      nextSteps: ["Conduct a 1-class live test trial with 10 prototype wristbands during school hours."]
    }
  },

  {
    id: "smart-lpg-safety-yutrix",
    name: "Yutrix — Smart LPG Cylinder Safety Dock",
    school: "CCIS",
    grade: "Grade 9",
    section: "9th Neo",
    lead: "Abhay Agarwal",
    members: ["Abhay Agarwal", "Vishash Shivhare", "Daksh Dudi", "Divyann Mittal", "Aarav Alha", "Bhavya Jeph"],
    mentors: ["Chirag Sir", "Amita Ma'am"],
    category: "Civic Sense & Public Safety",
    subCategories: ["Disaster Management & Resilience"],
    prototypeType: "Working Model & App",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Web Platform Live (`smart-lpg-safety-dock.web.app`); Ideathon Finalist",
    pptUrl: "https://0la005cf-4435-7506-8375-c986ccel3a87.arena.site/",
    appUrl: "https://smart-lpg-safety-dock.web.app",
    problem: "Household gas cylinder explosions and sudden cylinder exhaustion during cooking cause property destruction and domestic panic.",
    solution: "A smart circular dock placed under LPG cylinders. Measures remaining gas weight, detects gas leaks using an MQ-2 sensor, automatically shuts the regulator solenoid, and places an automated booking for cylinder refill when below 10%.",
    techStack: ["NodeMCU ESP8266", "50kg Load Cell", "MQ-2 Gas Sensor", "12V Gas Solenoid Valve", "Firebase IoT"],
    specs: {
      mcu: "ESP8266 NodeMCU",
      sensors: "4x 50kg Strain Gauge Load Cells with HX711, MQ-2 Gas/LPG Sensor",
      actuators: "12V Emergency Gas Shutoff Solenoid Valve, Buzzer Siren",
      power: "12V 2A DC Power Adapter with Battery Backup",
      connectivity: "Wi-Fi (MQTT to Mobile App & LPG Agency API)",
      chassis: "Heavy gauge circular steel/ABS turntable dock"
    },
    budget: {
      prototypeCost: 2150,
      batchCost: 1100,
      bom: [
        { name: "NodeMCU ESP8266", spec: "Controller", qty: 1, price: 245, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/nodemcu-esp8266-v3", altVendor: "Robu.in", altUrl: "#" },
        { name: "MQ-2 Gas & Smoke Sensor Module", spec: "LPG/Propane detector", qty: 1, price: 110, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/mq-2-gas-sensor-module", altVendor: "Robu.in", altUrl: "#" },
        { name: "50kg Load Cells + HX711 Module", spec: "4-Cell full bridge weighing plate", qty: 1, price: 420, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/50kg-load-cell-with-hx711", altVendor: "Robu.in", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 92,
      competitionPotential: "National Level (Ideathon Finalist)",
      pitchStrength: "Critical home safety gadget with direct consumer convenience (auto-booking refill).",
      patentViability: "Medium",
      commercializationScore: 93,
      risks: ["Solenoid valve installation must comply with LPG PESO safety certification."],
      nextSteps: ["Fabricate heavy metal weight-bearing plate capable of holding 30kg loaded cylinders."]
    }
  },

  {
    id: "nutri-scan-beta-tester",
    name: "Nutri-Scan — AI Food Ingredient & Allergen Scanner",
    school: "CCIS",
    grade: "Grade 7",
    section: "7th D",
    lead: "Rayaansh Rathore",
    members: ["Rayaansh Rathore", "Aarav Poonia", "Naksh Raj Singh Rathore", "Ritvik Jain", "Vaibhav Sera"],
    mentors: ["Chirag Sir", "Neha Agarwal Ma'am"],
    category: "Healthcare & Mental Health",
    subCategories: ["AI and Digital Technology"],
    prototypeType: "Mobile App (Play Store Published)",
    status: "Ready (Published on Play Store)",
    exhibitedBefore: "No",
    achievements: "Google Play Store Published (`com.skillizee.nutriscan`); Live Web Scanner (`nutri-scan-ideathon.web.app`)",
    pptUrl: "https://gamma.app/docs/Beta-Testers-nsb9x3pku8xd3fg",
    appUrl: "https://play.google.com/store/apps/details?id=com.skillizee.nutriscan",
    problem: "Shoppers cannot decipher complex chemical additives, palm oil, hidden trans fats, and allergens on packaged food labels.",
    solution: "A mobile camera scanner that extracts ingredient lists using OCR, translates E-numbers (e.g. E621 MSG) into plain English, flags hidden sugars/trans-fats, and grades packaged foods on a health score from A to F.",
    techStack: ["Flutter", "Google ML Kit OCR", "Open Food Facts API", "Firebase Web App"],
    specs: {
      mcu: "Smartphone Native Engine",
      sensors: "High-Resolution Phone Camera",
      actuators: "Color Coded Health Badge (Green / Red Warning)",
      power: "Mobile Device",
      connectivity: "REST API to Food Additive DB",
      chassis: "Published Android App"
    },
    budget: {
      prototypeCost: 2100,
      batchCost: 0,
      bom: [
        { name: "Google Play Console Developer Account", spec: "Account registration", qty: 1, price: 2100, vendor: "Google Play", vendorUrl: "https://play.google.com/console", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 96,
      competitionPotential: "National Level (Play Store Published)",
      pitchStrength: "Top tier credibility: Real app published on Play Store with live barcode & label OCR scanning.",
      patentViability: "Low",
      commercializationScore: 92,
      risks: ["Continuous maintenance of barcode ingredient databases."],
      nextSteps: ["Add diabetic-friendly and gluten-free personalized diet profile filter toggles."]
    }
  },

  {
    id: "cyber-guard",
    name: "Cyber Guard — Anti-Phishing & Digital Identity Protector",
    school: "CCIS",
    grade: "Grade 8 - 9",
    section: "8th & 9th",
    lead: "Chirayu Student Team",
    members: ["Chirayu Sir Student Team"],
    mentors: ["Chirayu Sir"],
    category: "AI and Digital Technology",
    subCategories: ["Civic Sense & Public Safety"],
    prototypeType: "Mobile App (Play Store Published)",
    status: "Ready (Published on Play Store)",
    exhibitedBefore: "No",
    achievements: "Google Play Store Published (`com.cyberguard.app`); Live Web Portal",
    pptUrl: "",
    appUrl: "https://play.google.com/store/apps/details?id=com.cyberguard.app",
    problem: "Senior citizens and school students fall prey to SMS phishing, lottery fraud, and malicious APK downloads on their smartphones.",
    solution: "An on-device SMS and URL scanner that flags phishing links, scam phone numbers, and dangerous app permissions in real-time without uploading personal private messages to cloud servers.",
    techStack: ["Android Kotlin", "TensorFlow Lite NLP", "Local SQLite Threat DB", "Play Store"],
    specs: {
      mcu: "Mobile Device Android",
      sensors: "SMS Broadcast Receiver & URL Intent Filter",
      actuators: "Warning Notification Popup",
      power: "Smartphone Battery",
      connectivity: "Offline Local Pattern Matching",
      chassis: "Published Android APK"
    },
    budget: {
      prototypeCost: 2100,
      batchCost: 0,
      bom: [
        { name: "Google Play Console Developer Account", spec: "Play Store deployment", qty: 1, price: 2100, vendor: "Google Play", vendorUrl: "https://play.google.com/console", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 95,
      competitionPotential: "National Cyber Safety Challenge",
      pitchStrength: "Published app directly answering National Cyber Crime Reporting Portal priorities.",
      patentViability: "Low - Medium",
      commercializationScore: 91,
      risks: ["Google Play strict SMS permission policies requiring policy exemption declaration."],
      nextSteps: ["Implement automated WhatsApp spam link detector via Accessibility API."]
    }
  },

  {
    id: "parkora",
    name: "Parkora — Smart Urban Parking Allocator",
    school: "CCIS",
    grade: "Grade 8 - 9",
    section: "8th & 9th",
    lead: "Titans Student Team",
    members: ["Titans Student Team"],
    mentors: ["Chirayu Sir"],
    category: "Road Safety & Transportation",
    subCategories: ["Civic Sense & Public Safety", "AI and Digital Technology"],
    prototypeType: "Mobile App (Play Store Published)",
    status: "Ready (Published on Play Store)",
    exhibitedBefore: "No",
    achievements: "Google Play Store Published (`com.titans.parkora`); Web Portal Active",
    pptUrl: "",
    appUrl: "https://play.google.com/store/apps/details?id=com.titans.parkora",
    problem: "Over 30% of downtown traffic congestion is caused by drivers cruising in circles looking for vacant parking slots.",
    solution: "A smart municipal parking locator and reservation portal. Integrates with IoT parking slot sensors and roadside cameras to guide drivers directly to open parking spaces.",
    techStack: ["Flutter", "Google Maps API", "Firebase Realtime DB", "Play Store"],
    specs: {
      mcu: "Mobile Client + ESP32 Ultrasonic Slot Nodes",
      sensors: "HC-SR04 Slot Occupancy Sensors",
      actuators: "LED Slot Availability Indicators (Red/Green)",
      power: "12V Parking Node Power",
      connectivity: "Google Maps Navigation Intent",
      chassis: "Published App & Sensor Nodes"
    },
    budget: {
      prototypeCost: 2400,
      batchCost: 650,
      bom: [
        { name: "ESP32 Slot Nodes & Ultrasonic Sensors", spec: "IoT parking slot units", qty: 2, price: 300, vendor: "Quartz Components", vendorUrl: "https://quartzcomponents.com/products/esp32-development-board", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 94,
      competitionPotential: "Smart City Innovation Challenge",
      pitchStrength: "Published Play Store mobile application with immediate urban utility.",
      patentViability: "Low",
      commercializationScore: 89,
      risks: ["City municipality approval needed for physical street slot deployment."],
      nextSteps: ["Pitch the app to local Jaipur shopping malls for private basement parking management."]
    }
  },

  {
    id: "lifeline-hub",
    name: "LifeLine — Emergency Blood Donor & Bed Finder Hub",
    school: "CCIS",
    grade: "Grade 8",
    section: "8th Zen",
    lead: "Tanmay Khandelwal",
    members: ["Tanmay Khandelwal"],
    mentors: ["Chirag Sir"],
    category: "Healthcare & Mental Health",
    subCategories: ["Civic Sense & Public Safety"],
    prototypeType: "Web App & Community Network",
    status: "Ready",
    exhibitedBefore: "No",
    achievements: "Web Platform Live (`lifeline-hub-app.web.app`); Ideathon Submissions",
    pptUrl: "",
    appUrl: "https://lifeline-hub-app.web.app/",
    problem: "During critical emergencies, families struggle to find rare blood group donors and vacant ICU beds in nearby hospitals in time.",
    solution: "A community blood donor matching and live ICU bed availability hub. Verified blood donors within a 5km radius receive emergency push notifications when an SOS blood request is submitted.",
    techStack: ["React", "Firebase Realtime DB", "Geolocation API", "Twilio SMS"],
    specs: {
      mcu: "Cloud Hosted Web App",
      sensors: "Browser Geolocation API",
      actuators: "Automated SMS / Push Broadcast",
      power: "Cloud Computing",
      connectivity: "HTTPS Web",
      chassis: "Mobile Friendly Web App"
    },
    budget: {
      prototypeCost: 350,
      batchCost: 0,
      bom: [
        { name: "Firebase SMS Authentication Credit", spec: "SMS OTP service", qty: 1, price: 350, vendor: "Firebase", vendorUrl: "https://firebase.google.com", altVendor: "#", altUrl: "#" }
      ]
    },
    aiAnalysis: {
      readinessScore: 89,
      competitionPotential: "National Ideathon",
      pitchStrength: "Heartfelt humanitarian cause with clean, responsive web application.",
      patentViability: "Low",
      commercializationScore: 86,
      risks: ["Spam or fake blood requests requiring strict Aadhaar/Hospital patient ID verification."],
      nextSteps: ["Add mandatory hospital admission slip upload requirement to prevent prank requests."]
    }
  }
];


const ALL_PROJECTS_DATA = [...INITIAL_PROJECTS_DATA, ...ADDITIONAL_PROJECTS];
// Plain-English STEM Glossary & Jargon Buster for Students, Parents & Mentors
const STEM_GLOSSARY = {
  "MCU": {
    term: "MCU (Microcontroller Unit)",
    simple: "The Microchip Brain",
    desc: "A small computer on a single chip (like an ESP32 or Arduino) that runs the software code, reads data from sensors, and tells motors when to turn."
  },
  "SoC": {
    term: "SoC (System on Chip)",
    simple: "All-in-One Superchip",
    desc: "An advanced microchip that packs a processor, memory, Wi-Fi, and Bluetooth all into one tiny package (e.g. ESP32-S3)."
  },
  "BOM": {
    term: "BOM (Bill of Materials)",
    simple: "Hardware Shopping List",
    desc: "The itemized list of all physical electronic components, sensors, wires, and casings needed to build a working prototype, including prices and direct vendor links."
  },
  "Sensor": {
    term: "Sensor / Transducer",
    simple: "Electronic Eye, Nose or Ear",
    desc: "A device that detects physical changes in the real world (such as soil wetness, alcohol fumes, river water levels, or patient weight) and converts them into electrical signals."
  },
  "Actuator": {
    term: "Actuator",
    simple: "Electronic Muscle",
    desc: "A motor, solenoid, pump, or valve that converts electrical commands into physical movement, like opening an irrigation valve or turning a robot wheel."
  },
  "Solenoid Valve": {
    term: "Solenoid Valve",
    simple: "Electric Water/Gas Tap",
    desc: "An electric valve that snaps open or shut in milliseconds when powered, used to control water flow in irrigation or shut off gas in LPG safety."
  },
  "Load Cell": {
    term: "Load Cell + HX711",
    simple: "Digital Weighing Sensor",
    desc: "A metal bar with microscopic strain gauges that measures weight accurately down to a fraction of a gram, used in drip monitoring and smart scales."
  },
  "IDF": {
    term: "IDF (Invention Disclosure Form)",
    simple: "Patent Application Draft",
    desc: "The formal document that describes a new invention's unique features, filed with a patent attorney or government office to protect it from being copied."
  },
  "AAC": {
    term: "AAC (Augmentative Communication)",
    simple: "Speech-Generating Aid",
    desc: "Assistive technology (like Voice Bridge) that helps people who cannot speak express themselves using electronic speech synthesis."
  },
  "Gross Margin": {
    term: "Gross Margin",
    simple: "Profit on Physical Goods",
    desc: "The percentage of money kept as profit after subtracting the direct cost of making the item (e.g., selling a ₹1,085 device for ₹4,499 gives a ~75% margin)."
  },
  "TTS": {
    term: "TTS (Text to Speech)",
    simple: "Computer Voice Synthesizer",
    desc: "Software that turns typed words or button presses into natural-sounding human spoken voice."
  },
  "GeM": {
    term: "GeM (Government e-Marketplace)",
    simple: "Government Shopping Portal",
    desc: "India's official procurement portal where schools, hospitals, and government ministries buy certified goods directly from registered manufacturers."
  }
};

window.STEM_GLOSSARY = STEM_GLOSSARY;
window.ALL_PROJECTS_DATA = ALL_PROJECTS_DATA;
window.COMPONENT_PROCUREMENT_CATALOG = COMPONENT_PROCUREMENT_CATALOG;
