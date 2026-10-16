export type Language = "es" | "en";

export const navItems = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#contact", key: "contact" },
] as const;

export const content = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Finance & Data Analyst",
      description:
        "Profesional financiero con experiencia en gestión de activos, controlling y análisis de datos. Conecto finanzas, automatización e IA aplicada para convertir procesos complejos en decisiones más claras.",
      projects: "Ver proyectos",
      contact: "Contactar",
      availability: "Disponible para proyectos de datos, reporting y automatización financiera",
    },
    metrics: [
      { value: "+3", label: "años en finanzas y contabilidad" },
      { value: "120", label: "cuentas bancarias gestionadas" },
      { value: "SAP", label: "FI-AA, activos, PEP y cierre mensual" },
    ],
    about: {
      label: "Sobre mí",
      title: "Perfil financiero con criterio de datos",
      text:
        "Soy un profesional con más de 3 años de experiencia en finanzas y contabilidad, actualmente en GASIB (CEPSA) como Gestor de Activos y Contable General. Complemento mi perfil financiero con formación en análisis de datos, Python, SQL y Power BI, orientando mi desarrollo hacia la automatización y el análisis descriptivo en entornos financieros. Actualmente estoy completando dos especializaciones en ThePower orientadas al mundo de la IA, con el objetivo de integrar herramientas de inteligencia artificial en procesos financieros y de análisis de datos para aumentar la productividad.",
      education: "Formación",
      verify: "Ver acreditación oficial",
    },
    education: [
      {
        title: "Máster en Data Analytics",
        institution: "ThePower Business School",
        date: "2024-2025",
        featured: true,
        verification: "https://verified.sertifier.com/en/verify/35524001443935/",
      },
      {
        title: "FP Superior en Administración y Finanzas",
        institution: "iFP",
        date: "2021-2023 · Nota: 9,17",
      },
      {
        title: "Certificación Excel Avanzado",
        institution: "Universidad Complutense de Madrid",
        date: "2023",
      },
      {
        title: "Certified Data Analytics",
        institution: "ThePower",
        date: "Dic 2025",
      },
      {
        title: "Licenciatura en Business Administration and Management",
        institution: "Universidad Rafael Urdaneta",
        date: "2017-2020",
      },
      {
        title: "Bachillerato en Ciencias",
        institution: "Colegio Bellas Artes",
        date: "Sep 2012 - Jul 2017",
      },
    ],
    experience: {
      label: "Experiencia",
      title: "Trayectoria profesional",
      items: [
        {
          company: "GASIB · CEPSA",
          role: "Gestor de Activos / Contable General",
          date: "Oct 2025 - Presente",
          tasks: [
            "Gestión integral del inmovilizado material e inmaterial",
            "Creación, validación y liquidación de proyectos PEP en SAP",
            "Análisis de informes CAF y conciliación de activos",
            "Participación en cierre contable mensual",
            "Apoyo a auditoría interna y externa",
          ],
        },
        {
          company: "Azzam Vivienda",
          role: "Administrativo Contable",
          date: "Sep 2023 - Sep 2025",
          tasks: [
            "Contabilización y control de Capex y Opex de fondos inmobiliarios",
            "Conciliación bancaria con SAP",
            "Manejo y análisis de datos financieros con cuadros de mando",
          ],
        },
        {
          company: "Renovalia Energy Group",
          role: "Técnico Junior de Tesorería",
          date: "May 2023 - Sep 2023",
          tasks: ["Gestión y control de 120 cuentas bancarias", "Registro y control de avales"],
        },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Trabajo aplicado",
      github: "Ver en GitHub",
      wip: "Próximamente",
      items: [
        {
          icon: "chart",
          title: "Análisis de Salarios - Data Science vs Data Analytics",
          description:
            "EDA completo sobre salarios del sector datos en EEUU (2020-2024). Limpieza, transformación y dashboard interactivo en Excel con análisis por experiencia, modalidad, tamaño de empresa y evolución anual.",
          tags: ["Excel", "EDA", "Dashboard"],
          href: "https://github.com/Claudiobaldinii/Analisis_salarios",
        },
        {
          icon: "store",
          title: "Análisis E-commerce - Proyecto Final",
          description:
            "Análisis 360° de un e-commerce con Python y Power BI para modelado, dashboards de ventas, clientes y logística. Incluye medidas DAX y KPIs clave.",
          tags: ["Python", "Pandas", "Power BI", "DAX"],
          href: "https://github.com/Claudiobaldinii/Proyecto_Final",
        },
        {
          icon: "scan",
          title: "Extractor de Facturas PDF",
          description:
            "Herramienta de automatización en Python para extraer datos contables de facturas en PDF y estructurarlos automáticamente, reduciendo trabajo manual en procesos contables.",
          tags: ["Python", "Automatización", "PDF"],
          status: "En desarrollo",
        },
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Stack & competencias",
      groups: [
        {
          title: "Análisis de datos",
          skills: ["SQL", "Python (Pandas)", "Power BI", "Excel Avanzado"],
        },
        {
          title: "Finanzas",
          skills: ["SAP (FI-AA)", "Controlling", "Contabilidad General", "Gestión de Activos"],
        },
        {
          title: "Automatización e IA",
          skills: ["Git & GitHub", "IA aplicada", "Reporting", "Procesos financieros"],
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      intro:
        "¿Tienes un proyecto, propuesta o proceso financiero que quieras convertir en un flujo más claro y automatizado?",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame brevemente el contexto...",
      send: "Preparar email",
      sent: "Email preparado",
      phone: "Teléfono",
    },
    footer: "© 2026 Claudio Baldini. Todos los derechos reservados.",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Finance & Data Analyst",
      description:
        "Finance professional with experience in asset management, controlling and data analysis. I connect finance, automation and applied AI to turn complex processes into clearer decisions.",
      projects: "View projects",
      contact: "Contact me",
      availability: "Available for data, reporting and finance automation projects",
    },
    metrics: [
      { value: "+3", label: "years in finance and accounting" },
      { value: "120", label: "bank accounts managed" },
      { value: "SAP", label: "FI-AA, assets, PEP and monthly close" },
    ],
    about: {
      label: "About",
      title: "Finance profile with data judgment",
      text:
        "I am a professional with more than 3 years of experience in finance and accounting, currently at GASIB (CEPSA) as Asset Manager and General Accountant. I complement my financial profile with training in data analytics, Python, SQL and Power BI, focusing my development on automation and descriptive analysis in financial environments. I am currently completing two AI-focused specializations at ThePower, with the goal of integrating artificial intelligence tools into financial and data analysis processes to boost productivity.",
      education: "Education",
      verify: "View official accreditation",
    },
    education: [
      {
        title: "Master in Data Analytics",
        institution: "ThePower Business School",
        date: "2024-2025",
        featured: true,
        verification: "https://verified.sertifier.com/en/verify/35524001443935/",
      },
      {
        title: "Advanced VET in Business Administration and Finance",
        institution: "iFP",
        date: "2021-2023 · Grade: 9.17",
      },
      {
        title: "Advanced Excel Certification",
        institution: "Universidad Complutense de Madrid",
        date: "2023",
      },
      {
        title: "Certified Data Analytics",
        institution: "ThePower",
        date: "Dec 2025",
      },
      {
        title: "Bachelor's in Business Administration and Management",
        institution: "Universidad Rafael Urdaneta",
        date: "2017-2020",
      },
      {
        title: "Science Baccalaureate",
        institution: "Colegio Bellas Artes",
        date: "Sep 2012 - Jul 2017",
      },
    ],
    experience: {
      label: "Experience",
      title: "Professional career",
      items: [
        {
          company: "GASIB · CEPSA",
          role: "Asset Manager / General Accountant",
          date: "Oct 2025 - Present",
          tasks: [
            "Comprehensive management of tangible and intangible fixed assets",
            "Creation, validation and settlement of PEP projects in SAP",
            "Analysis of CAF reports and asset reconciliation",
            "Participation in monthly accounting close",
            "Support for internal and external audit",
          ],
        },
        {
          company: "Azzam Vivienda",
          role: "Accounting Administrator",
          date: "Sep 2023 - Sep 2025",
          tasks: [
            "Capex and Opex accounting and control for real estate funds",
            "Bank reconciliation with SAP",
            "Management and analysis of financial data with dashboards",
          ],
        },
        {
          company: "Renovalia Energy Group",
          role: "Junior Treasury Technician",
          date: "May 2023 - Sep 2023",
          tasks: ["Management and control of 120 bank accounts", "Registration and control of bank guarantees"],
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Applied work",
      github: "View on GitHub",
      wip: "Coming soon",
      items: [
        {
          icon: "chart",
          title: "Salary Analysis - Data Science vs Data Analytics",
          description:
            "Complete EDA on data sector salaries in the US (2020-2024). Cleaning, transformation and interactive Excel dashboard with analysis by experience, work mode, company size and annual evolution.",
          tags: ["Excel", "EDA", "Dashboard"],
          href: "https://github.com/Claudiobaldinii/Analisis_salarios",
        },
        {
          icon: "store",
          title: "E-commerce Analysis - Final Project",
          description:
            "360° analysis of an e-commerce using Python and Power BI for modeling, sales, customer and logistics dashboards. Includes DAX measures and key KPIs.",
          tags: ["Python", "Pandas", "Power BI", "DAX"],
          href: "https://github.com/Claudiobaldinii/Proyecto_Final",
        },
        {
          icon: "scan",
          title: "PDF Invoice Extractor",
          description:
            "Python automation tool to extract accounting data from PDF invoices and structure them automatically, reducing manual work in accounting processes.",
          tags: ["Python", "Automation", "PDF"],
          status: "In development",
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Stack & competencies",
      groups: [
        {
          title: "Data analysis",
          skills: ["SQL", "Python (Pandas)", "Power BI", "Advanced Excel"],
        },
        {
          title: "Finance",
          skills: ["SAP (FI-AA)", "Controlling", "General Accounting", "Asset Management"],
        },
        {
          title: "Automation & AI",
          skills: ["Git & GitHub", "Applied AI", "Reporting", "Financial processes"],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      intro:
        "Do you have a project, proposal or financial process that you want to turn into a clearer automated workflow?",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Briefly tell me the context...",
      send: "Prepare email",
      sent: "Email prepared",
      phone: "Phone",
    },
    footer: "© 2026 Claudio Baldini. All rights reserved.",
  },
} as const;

export type SiteContent = (typeof content)[Language];
