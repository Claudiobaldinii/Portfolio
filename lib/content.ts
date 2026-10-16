export type Language = "es" | "en";

/** Function codes double as section ids and command-line mnemonics. */
export const functions = [
  { code: "PER", id: "perfil", key: "1" },
  { code: "EXP", id: "experiencia", key: "2" },
  { code: "PRJ", id: "proyectos", key: "3" },
  { code: "STK", id: "stack", key: "4" },
  { code: "EDU", id: "formacion", key: "5" },
  { code: "CON", id: "contacto", key: "6" },
] as const;

export type FunctionCode = (typeof functions)[number]["code"];

export const contact = {
  email: "Cbaldiniwork@gmail.com",
  phone: "+34658209727",
  phoneLabel: "658 209 727",
  linkedin: "https://www.linkedin.com/in/claudio-baldini-2338251b9",
  github: "https://github.com/Claudiobaldinii",
  credential: "https://verified.sertifier.com/en/verify/35524001443935/",
};

/** Timeline in decimal years (month / 12). `end: null` = present. */
export const timeline = {
  from: 2017,
  to: 2027,
  work: [
    { label: "GASIB · Cepsa", start: 2025 + 9 / 12, end: null },
    { label: "Azzam Vivienda", start: 2023 + 8 / 12, end: 2025 + 9 / 12 },
    { label: "Renovalia", start: 2023 + 4 / 12, end: 2023 + 9 / 12 },
    { label: "Natruly", start: 2022 + 5 / 12, end: 2023 + 1 / 12 },
    { label: "Gelati Dino", start: 2020 + 5 / 12, end: 2021 + 7 / 12 },
    { label: "PetsDeli", start: 2018 + 3 / 12, end: 2021 + 2 / 12 },
  ],
  study: [
    { label: "thePower", start: 2024 + 8 / 12, end: 2025 + 9 / 12 },
    { label: "iFP", start: 2021 + 1 / 12, end: 2023 + 2 / 12 },
    { label: "URU", start: 2017, end: 2020 + 6 / 12, yearsOnly: true },
  ],
};

export const content = {
  es: {
    fn: {
      PER: "Perfil",
      EXP: "Experiencia",
      PRJ: "Proyectos",
      STK: "Stack",
      EDU: "Formación",
      CON: "Contacto",
    },
    bar: {
      cmdLabel: "Función",
      cmdPlaceholder: "EXP",
      go: "GO",
      unknown: "Función no reconocida. Prueba:",
      clock: "Madrid",
      open: "Abierto a trabajo",
      menu: "Funciones",
    },
    hero: {
      headline: "Gestor de activos y contable en Cepsa",
      sub: "SAP FI-AA · Automatización y análisis de datos con SQL, Power BI y Python",
      rows: [
        { k: "Puesto actual", v: "Gestor de activos / Contable general · GASIB (Cepsa)" },
        { k: "Ubicación", v: "Madrid, España" },
        { k: "Modalidad", v: "Presencial · Híbrido · Remoto" },
        { k: "Idiomas", v: "Español nativo · Inglés B1" },
      ],
      contact: "Contactar",
      linkedin: "LinkedIn",
      chartTitle: "Trayectoria",
      chartWork: "Trabajo",
      chartStudy: "Formación",
      present: "hoy",
    },
    about: {
      title: "De finanzas a datos",
      paragraphs: [
        "Vengo de Finanzas y Contabilidad. Hoy gestiono activos y contabilidad general en GASIB (Cepsa): SAP FI-AA, proyectos PEP, cierres mensuales y conciliación de activos. Antes pasé por cuentas a pagar y conciliación bancaria en fondos inmobiliarios, y por tesorería, con la gestión de 120 cuentas bancarias.",
        "Lo que más me interesa es el trabajo que se repite cada mes: cierres, conciliaciones, informes. Estudié Data Analytics en thePower (SQL, Python, Power BI) y uso Excel avanzado y VBA para reducir trabajo manual y errores. Ahora me especializo en thePower en el uso de IA generativa para automatizar y mejorar procesos, y en Data Visualization para sacar más partido a Power BI y preparar la certificación PL-300 de Microsoft.",
      ],
      facts: [
        { k: "Cuentas bancarias gestionadas", v: "120" },
        { k: "Empresa actual", v: "GASIB (Cepsa)" },
        { k: "Años en finanzas y contabilidad", v: "+3" },
        { k: "ERP", v: "SAP FI-AA" },
      ],
    },
    experience: {
      title: "Trayectoria profesional",
      cols: { period: "Periodo", company: "Empresa", role: "Puesto", mode: "Modalidad" },
      expand: "Ver detalle",
      collapse: "Ocultar detalle",
      earlier: "Antes de las finanzas",
      items: [
        {
          company: "GASIB · Cepsa",
          role: "Gestor de activos / Contable general",
          period: "Oct 2025 — hoy",
          mode: "Madrid · Híbrido",
          current: true,
          tags: ["SAP FI-AA", "PEP", "Cierre mensual", "Auditoría"],
          tasks: [
            "Gestión integral del inmovilizado material e inmaterial, asegurando el correcto registro y control contable.",
            "Creación, validación y liquidación de proyectos PEP en SAP.",
            "Registro y seguimiento de amortizaciones, bajas y traspasos entre activos en curso y terminados.",
            "Elaboración y análisis de informes CAF para control y conciliación de activos.",
            "Gestión de previsiones contables y gastos anticipados de proveedores.",
            "Participación en el cierre contable mensual: imputación de costes y provisiones.",
            "Apoyo a auditoría interna y externa con informes, documentación y trazabilidad contable.",
            "Colaboración con otros departamentos para optimizar el ciclo de vida del activo y mejorar procesos.",
          ],
        },
        {
          company: "Azzam Vivienda",
          role: "Administrativo contable",
          period: "Sep 2023 — Sep 2025",
          mode: "Madrid · Híbrido",
          tags: ["Capex / Opex", "Cuentas a pagar", "SAP", "Cuadros de mando"],
          tasks: [
            "Contabilización y control de Capex y Opex mensuales de las promociones de fondos inmobiliarios.",
            "Cuentas a pagar en diversos fondos inmobiliarios y remesas a proveedores a través de SAP.",
            "Cierres mensuales de cuentas del grupo 6 (gastos).",
            "Conciliación bancaria con SAP, incluidos préstamos con tipos de interés variables.",
            "Contabilización, altas y amortización de activos inmobiliarios.",
            "Análisis de datos financieros con cuadros de mando, tablas dinámicas y SAP.",
          ],
        },
        {
          company: "Renovalia Energy Group",
          role: "Técnico junior de tesorería",
          period: "May 2023 — Sep 2023",
          mode: "Presencial",
          tags: ["Tesorería", "Avales", "Conciliación"],
          tasks: [
            "Gestión y control de 120 cuentas bancarias de diversas empresas del grupo.",
            "Petición, registro, control y actualización de avales.",
            "Ejecución de pagos e ingresos mediante banca online.",
            "Conciliación con la previsión de tesorería y contabilización de apuntes bancarios.",
            "Mantenimiento de bases de datos y documentación del área de Tesorería.",
            "Propuestas de mejora continua para ganar eficiencia en los procesos.",
          ],
        },
        {
          company: "Natruly",
          role: "Administrativo",
          period: "Jun 2022 — Ene 2023",
          mode: "Híbrido",
          tags: ["Contabilidad", "Facturación", "Reporting"],
          tasks: [
            "Registro contable de las operaciones de la empresa.",
            "Facturación, verificación de facturas y albaranes.",
            "Alta de cuentas de proveedores y clientes.",
            "Redacción de informes para dirección.",
          ],
        },
      ],
      before: [
        { company: "Gelati Dino Gruppo", role: "Encargado (negocio familiar)", period: "Jun 2020 — Jul 2021" },
        { company: "PetsDeli", role: "Propietario · importación y distribución (familiar)", period: "Abr 2018 — Feb 2021" },
      ],
    },
    projects: {
      title: "Proyectos con datos",
      cols: { status: "Estado", project: "Proyecto", stack: "Stack" },
      live: "Publicado",
      wip: "En desarrollo",
      github: "Ver en GitHub",
      soon: "Próximamente",
      items: [
        {
          title: "App de control de gastos personales",
          description:
            "Aplicación web para controlar gastos y ahorro: presupuestos por categoría, registro de gastos, objetivos, préstamos, histórico mensual y medallas por cumplir los límites. Los datos se guardan solo en el dispositivo.",
          tags: ["React", "JavaScript", "UX", "localStorage"],
          href: "https://github.com/Claudiobaldinii/App-control-de-gastos",
        },
        {
          title: "Análisis de salarios: Data Science vs Data Analytics",
          description:
            "EDA sobre salarios del sector datos en EE. UU. (2020–2024): limpieza, transformación y dashboard interactivo en Excel por experiencia, modalidad, tamaño de empresa y evolución anual.",
          tags: ["Excel", "EDA", "Dashboard"],
          href: "https://github.com/Claudiobaldinii/Analisis_salarios",
        },
        {
          title: "Análisis 360° de un e-commerce",
          description:
            "Proyecto final del máster: Python y Power BI para modelar ventas, clientes y logística, con medidas DAX y KPIs clave.",
          tags: ["Python", "Pandas", "Power BI", "DAX"],
          href: "https://github.com/Claudiobaldinii/Proyecto_Final",
        },
        {
          title: "Extractor de facturas PDF",
          description:
            "Automatización en Python que extrae datos contables de facturas en PDF y los estructura para reducir el trabajo manual del proceso contable.",
          tags: ["Python", "Automatización", "PDF"],
        },
      ],
    },
    stack: {
      title: "Stack y dónde lo uso",
      cols: { tool: "Herramienta", area: "Área", where: "Dónde lo aplico" },
      groups: [
        {
          area: "Finanzas",
          rows: [
            { tool: "SAP FI-AA", where: "Trabajo diario en GASIB: activos, PEP, amortizaciones" },
            { tool: "Contabilidad general", where: "Cierres mensuales, provisiones, conciliaciones" },
            { tool: "Tesorería", where: "120 cuentas bancarias y avales en Renovalia" },
            { tool: "Auditoría", where: "Soporte a auditoría interna y externa" },
          ],
        },
        {
          area: "Datos",
          rows: [
            { tool: "Excel avanzado · VBA", where: "Automatización de informes y conciliaciones" },
            { tool: "SQL", where: "Consultas, agregaciones, subconsultas, CTEs" },
            { tool: "Python · Pandas", where: "EDA, limpieza y ETL en proyectos del máster" },
            { tool: "Power BI · DAX", where: "Modelado, Power Query y dashboards · preparando PL-300" },
          ],
        },
        {
          area: "IA y flujo",
          rows: [
            { tool: "IA generativa", where: "Automatizar y mejorar procesos · especialización en curso" },
            { tool: "Git · GitHub", where: "Control de versiones de proyectos y este portfolio" },
          ],
        },
      ],
    },
    education: {
      title: "Formación y certificaciones",
      verify: "Verificar credencial",
      diploma: "Ver diploma",
      diplomaAlt: "Diploma del Máster en Data Analytics de thePower",
      close: "Cerrar",
      degrees: [
        {
          title: "Máster en Big Data Analyst — Procesamiento de datos",
          school: "thePower Business School",
          period: "Sep 2024 — Sep 2025",
          note: "Python, SQL, Power BI, Excel e IA aplicada",
          featured: true,
        },
        {
          title: "FP Grado Superior en Administración y Finanzas",
          school: "iFP · Innovación en Formación Profesional",
          period: "Feb 2021 — Feb 2023",
          note: "Nota 9,17 · cursos de Excel y Sage",
        },
        {
          title: "Licenciatura en Business Administration and Management",
          school: "Universidad Rafael Urdaneta",
          period: "2017 — 2020",
        },
        {
          title: "Bachillerato en Ciencias",
          school: "Colegio Bellas Artes",
          period: "2012 — 2017",
        },
      ],
      certs: [
        { title: "Certified Data Analytics", school: "thePower", period: "Dic 2025", credential: true },
        { title: "Hojas de cálculo con Excel II", school: "Universidad Complutense de Madrid", period: "May 2023" },
        { title: "Especialización en IA generativa", school: "thePower", period: "En curso" },
        { title: "Data Visualization · Power BI", school: "thePower", period: "En curso" },
      ],
    },
    contactSection: {
      title: "Hablemos",
      intro:
        "Busco puestos de finanzas, contabilidad o análisis de datos en Madrid, presencial, híbrido o remoto. Escríbeme y te respondo.",
      phone: "Teléfono",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Email",
      emailPh: "tu@empresa.com",
      message: "Mensaje",
      messagePh: "Puesto, empresa y cómo te encaja mi perfil",
      send: "Preparar email",
      sent: "Abriendo tu cliente de correo…",
    },
    footer: "Claudio Baldini · Datos sincronizados con LinkedIn en octubre de 2026",
  },
  en: {
    fn: {
      PER: "Profile",
      EXP: "Experience",
      PRJ: "Projects",
      STK: "Stack",
      EDU: "Education",
      CON: "Contact",
    },
    bar: {
      cmdLabel: "Function",
      cmdPlaceholder: "EXP",
      go: "GO",
      unknown: "Unknown function. Try:",
      clock: "Madrid",
      open: "Open to work",
      menu: "Functions",
    },
    hero: {
      headline: "Asset manager and accountant at Cepsa",
      sub: "SAP FI-AA · Data automation and analysis with SQL, Power BI and Python",
      rows: [
        { k: "Current role", v: "Asset Manager / General Accountant · GASIB (Cepsa)" },
        { k: "Location", v: "Madrid, Spain" },
        { k: "Work mode", v: "On-site · Hybrid · Remote" },
        { k: "Languages", v: "Spanish native · English B1" },
      ],
      contact: "Contact me",
      linkedin: "LinkedIn",
      chartTitle: "Career",
      chartWork: "Work",
      chartStudy: "Education",
      present: "now",
    },
    about: {
      title: "From finance to data",
      paragraphs: [
        "My background is finance and accounting. Today I run fixed assets and general accounting at GASIB (Cepsa): SAP FI-AA, WBS (PEP) projects, monthly closes and asset reconciliation. Before that I handled accounts payable and bank reconciliation for real-estate funds, and treasury, managing 120 bank accounts.",
        "What interests me most is the work that repeats every month: closes, reconciliations, reports. I studied Data Analytics at thePower (SQL, Python, Power BI) and use advanced Excel and VBA to cut manual work and errors. I am now specialising at thePower in using generative AI to automate and improve processes, and in Data Visualization to get more out of Power BI and prepare for Microsoft's PL-300 certification.",
      ],
      facts: [
        { k: "Bank accounts managed", v: "120" },
        { k: "Current employer", v: "GASIB (Cepsa)" },
        { k: "Years in finance & accounting", v: "3+" },
        { k: "ERP", v: "SAP FI-AA" },
      ],
    },
    experience: {
      title: "Professional career",
      cols: { period: "Period", company: "Company", role: "Role", mode: "Mode" },
      expand: "Show detail",
      collapse: "Hide detail",
      earlier: "Before finance",
      items: [
        {
          company: "GASIB · Cepsa",
          role: "Asset Manager / General Accountant",
          period: "Oct 2025 — now",
          mode: "Madrid · Hybrid",
          current: true,
          tags: ["SAP FI-AA", "WBS (PEP)", "Monthly close", "Audit"],
          tasks: [
            "End-to-end management of tangible and intangible fixed assets, ensuring correct recording and accounting control.",
            "Creation, validation and settlement of WBS (PEP) projects in SAP.",
            "Recording and tracking of depreciation, disposals and transfers between assets under construction and completed assets.",
            "Preparation and analysis of CAF reports for asset control and reconciliation.",
            "Management of accounting accruals and supplier prepayments.",
            "Monthly close: allocation of costs and provisions.",
            "Support for internal and external audits with reports, documentation and accounting traceability.",
            "Cross-department work to optimise the asset life cycle and improve processes.",
          ],
        },
        {
          company: "Azzam Vivienda",
          role: "Accounting Administrator",
          period: "Sep 2023 — Sep 2025",
          mode: "Madrid · Hybrid",
          tags: ["Capex / Opex", "Accounts payable", "SAP", "Dashboards"],
          tasks: [
            "Monthly Capex and Opex accounting and control for real-estate fund developments.",
            "Accounts payable across several real-estate funds and supplier payment runs in SAP.",
            "Monthly close of group 6 (expense) accounts.",
            "Bank reconciliation in SAP, including variable-rate loans.",
            "Recording, capitalisation and depreciation of real-estate assets.",
            "Financial data analysis with dashboards, pivot tables and SAP.",
          ],
        },
        {
          company: "Renovalia Energy Group",
          role: "Junior Treasury Analyst",
          period: "May 2023 — Sep 2023",
          mode: "On-site",
          tags: ["Treasury", "Bank guarantees", "Reconciliation"],
          tasks: [
            "Management and control of 120 bank accounts across group companies.",
            "Requesting, recording, tracking and updating bank guarantees.",
            "Executing payments and collections through online banking.",
            "Reconciliation against the cash forecast and posting of bank entries.",
            "Maintaining the treasury databases and documentation.",
            "Continuous-improvement proposals to make processes more efficient.",
          ],
        },
        {
          company: "Natruly",
          role: "Administrative Assistant",
          period: "Jun 2022 — Jan 2023",
          mode: "Hybrid",
          tags: ["Accounting", "Invoicing", "Reporting"],
          tasks: [
            "Recording the company's transactions in the books.",
            "Invoicing and verification of invoices and delivery notes.",
            "Opening supplier and customer accounts.",
            "Writing reports for management.",
          ],
        },
      ],
      before: [
        { company: "Gelati Dino Gruppo", role: "Store manager (family business)", period: "Jun 2020 — Jul 2021" },
        { company: "PetsDeli", role: "Owner · import and distribution (family)", period: "Apr 2018 — Feb 2021" },
      ],
    },
    projects: {
      title: "Data projects",
      cols: { status: "Status", project: "Project", stack: "Stack" },
      live: "Published",
      wip: "In progress",
      github: "View on GitHub",
      soon: "Coming soon",
      items: [
        {
          title: "Personal expense tracker app",
          description:
            "Web app to track spending and savings: budgets per category, expense logging, goals, loans, monthly history and medals for staying within limits. Data stays on the device.",
          tags: ["React", "JavaScript", "UX", "localStorage"],
          href: "https://github.com/Claudiobaldinii/App-control-de-gastos",
        },
        {
          title: "Salary analysis: Data Science vs Data Analytics",
          description:
            "EDA of US data-sector salaries (2020–2024): cleaning, transformation and an interactive Excel dashboard by seniority, work mode, company size and year.",
          tags: ["Excel", "EDA", "Dashboard"],
          href: "https://github.com/Claudiobaldinii/Analisis_salarios",
        },
        {
          title: "360° e-commerce analysis",
          description:
            "Master's final project: Python and Power BI to model sales, customers and logistics, with DAX measures and key KPIs.",
          tags: ["Python", "Pandas", "Power BI", "DAX"],
          href: "https://github.com/Claudiobaldinii/Proyecto_Final",
        },
        {
          title: "PDF invoice extractor",
          description:
            "Python automation that extracts accounting data from PDF invoices and structures it to cut manual work in the accounting process.",
          tags: ["Python", "Automation", "PDF"],
        },
      ],
    },
    stack: {
      title: "Stack and where I use it",
      cols: { tool: "Tool", area: "Area", where: "Where I apply it" },
      groups: [
        {
          area: "Finance",
          rows: [
            { tool: "SAP FI-AA", where: "Daily at GASIB: assets, WBS, depreciation" },
            { tool: "General accounting", where: "Monthly closes, provisions, reconciliations" },
            { tool: "Treasury", where: "120 bank accounts and guarantees at Renovalia" },
            { tool: "Audit", where: "Support for internal and external audits" },
          ],
        },
        {
          area: "Data",
          rows: [
            { tool: "Advanced Excel · VBA", where: "Automating reports and reconciliations" },
            { tool: "SQL", where: "Queries, aggregations, subqueries, CTEs" },
            { tool: "Python · Pandas", where: "EDA, cleaning and ETL in master's projects" },
            { tool: "Power BI · DAX", where: "Modelling, Power Query and dashboards · preparing PL-300" },
          ],
        },
        {
          area: "AI & workflow",
          rows: [
            { tool: "Generative AI", where: "Automating and improving processes · specialisation in progress" },
            { tool: "Git · GitHub", where: "Version control for projects and this portfolio" },
          ],
        },
      ],
    },
    education: {
      title: "Education and certifications",
      verify: "Verify credential",
      diploma: "View diploma",
      diplomaAlt: "thePower Master's in Data Analytics diploma",
      close: "Close",
      degrees: [
        {
          title: "Master's in Big Data Analysis — Data Processing",
          school: "thePower Business School",
          period: "Sep 2024 — Sep 2025",
          note: "Python, SQL, Power BI, Excel and applied AI",
          featured: true,
        },
        {
          title: "Higher VET Diploma in Business Administration and Finance",
          school: "iFP · Innovación en Formación Profesional",
          period: "Feb 2021 — Feb 2023",
          note: "Grade 9.17 · Excel and Sage courses",
        },
        {
          title: "Bachelor's in Business Administration and Management",
          school: "Universidad Rafael Urdaneta",
          period: "2017 — 2020",
        },
        {
          title: "Science Baccalaureate",
          school: "Colegio Bellas Artes",
          period: "2012 — 2017",
        },
      ],
      certs: [
        { title: "Certified Data Analytics", school: "thePower", period: "Dec 2025", credential: true },
        { title: "Spreadsheets with Excel II", school: "Universidad Complutense de Madrid", period: "May 2023" },
        { title: "Generative AI specialisation", school: "thePower", period: "In progress" },
        { title: "Data Visualization · Power BI", school: "thePower", period: "In progress" },
      ],
    },
    contactSection: {
      title: "Let's talk",
      intro:
        "I'm looking for finance, accounting or data analyst roles in Madrid, on-site, hybrid or remote. Drop me a line and I'll get back to you.",
      phone: "Phone",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@company.com",
      message: "Message",
      messagePh: "Role, company and how my profile fits",
      send: "Prepare email",
      sent: "Opening your email client…",
    },
    footer: "Claudio Baldini · Data synced with LinkedIn in October 2026",
  },
} as const;

export type SiteContent = (typeof content)[Language];
