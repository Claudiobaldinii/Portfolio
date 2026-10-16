import { contact, Language } from "@/lib/content";

export type Preview = {
  code: string;
  kind: string;
  title: string;
  summary: string;
  facts: { k: string; v: string }[];
  action?: { label: string; href: string };
  diploma?: boolean;
};

export type PreviewId =
  | "prj-salarios"
  | "prj-ecommerce"
  | "prj-facturas"
  | "edu-master"
  | "edu-ifp"
  | "edu-uru"
  | "edu-bach"
  | "cert-data"
  | "cert-excel"
  | "cert-ia"
  | "cert-dataviz"
  | "con-linkedin"
  | "con-github";

export const inspectorText = {
  es: {
    close: "Cerrar",
    hint: "Pasa el cursor o pulsa una fila para ver el detalle",
    escape: "Esc para cerrar",
    soon: "Repositorio próximamente",
    diploma: "Ver diploma",
    more: "Ver detalle",
  },
  en: {
    close: "Close",
    hint: "Hover or tap a row to see the detail",
    escape: "Esc to close",
    soon: "Repository coming soon",
    diploma: "View diploma",
    more: "View detail",
  },
} as const;

const repo = (name: string) => `${contact.github}/${name}`;

export const previews: Record<Language, Record<PreviewId, Preview>> = {
  es: {
    "prj-salarios": {
      code: "PRJ · 01",
      kind: "Proyecto",
      title: "Análisis de salarios: Data Science vs Data Analytics",
      summary:
        "Análisis exploratorio de salarios del sector datos en EE. UU. entre 2020 y 2024. Limpié y transformé los datos y monté un dashboard interactivo en Excel para comparar los dos perfiles.",
      facts: [
        { k: "Datos", v: "2020 — 2024" },
        { k: "Ejes", v: "Experiencia, modalidad, tamaño de empresa, año" },
        { k: "Herramientas", v: "Excel · EDA · Dashboard" },
      ],
      action: { label: "Abrir en GitHub", href: repo("Analisis_salarios") },
    },
    "prj-ecommerce": {
      code: "PRJ · 02",
      kind: "Proyecto",
      title: "Análisis 360° de un e-commerce",
      summary:
        "Proyecto final del máster en thePower. Preparé los datos con Python y Pandas y construí en Power BI un modelo con medidas DAX para seguir ventas, clientes y logística.",
      facts: [
        { k: "Contexto", v: "Proyecto final del máster" },
        { k: "Áreas", v: "Ventas, clientes, logística" },
        { k: "Herramientas", v: "Python · Pandas · Power BI · DAX" },
      ],
      action: { label: "Abrir en GitHub", href: repo("Proyecto_Final") },
    },
    "prj-facturas": {
      code: "PRJ · 03",
      kind: "Proyecto en desarrollo",
      title: "Extractor de facturas PDF",
      summary:
        "Automatiza una tarea que conozco del día a día contable: leer facturas en PDF, extraer sus datos y dejarlos estructurados para contabilizarlos sin teclear.",
      facts: [
        { k: "Estado", v: "En desarrollo" },
        { k: "Objetivo", v: "Menos trabajo manual y menos errores" },
        { k: "Herramientas", v: "Python · Automatización" },
      ],
    },
    "edu-master": {
      code: "EDU · 01",
      kind: "Máster",
      title: "Máster en Big Data Analyst — Procesamiento de datos",
      summary:
        "Análisis, visualización y automatización de datos: estadística y análisis exploratorio, SQL (subconsultas, CTEs), Python para análisis (NumPy, Pandas, ETL), Power BI (modelado, DAX, Power Query), Excel avanzado e IA aplicada a procesos.",
      facts: [
        { k: "Centro", v: "thePower Business School" },
        { k: "Fechas", v: "Sep 2024 — Sep 2025" },
        { k: "Proyecto final", v: "Análisis 360° de un e-commerce" },
      ],
      action: { label: "Verificar credencial", href: contact.credential },
      diploma: true,
    },
    "edu-ifp": {
      code: "EDU · 02",
      kind: "Formación profesional",
      title: "FP Grado Superior en Administración y Finanzas",
      summary:
        "La base técnica de mi perfil: contabilidad, finanzas y gestión administrativa. La terminé con nota 9,17 y la completé con cursos de Excel y Sage.",
      facts: [
        { k: "Centro", v: "iFP · Innovación en Formación Profesional" },
        { k: "Fechas", v: "Feb 2021 — Feb 2023" },
        { k: "Nota", v: "9,17" },
      ],
    },
    "edu-uru": {
      code: "EDU · 03",
      kind: "Licenciatura",
      title: "Business Administration and Management",
      summary:
        "Formación universitaria en administración de empresas en Venezuela, que compaginé con el negocio familiar de importación y distribución.",
      facts: [
        { k: "Universidad", v: "Universidad Rafael Urdaneta" },
        { k: "Fechas", v: "2017 — 2020" },
      ],
    },
    "edu-bach": {
      code: "EDU · 04",
      kind: "Bachillerato",
      title: "Bachillerato en Ciencias",
      summary: "Educación secundaria en la rama de ciencias.",
      facts: [
        { k: "Centro", v: "Colegio Bellas Artes" },
        { k: "Fechas", v: "2012 — 2017" },
      ],
    },
    "cert-data": {
      code: "CRT · 01",
      kind: "Certificación",
      title: "Certified Data Analytics",
      summary:
        "Credencial digital emitida por thePower al completar el programa de Data Analytics. Se puede verificar online con su ID.",
      facts: [
        { k: "Emisor", v: "thePower" },
        { k: "Fecha", v: "Dic 2025" },
        { k: "ID", v: "35524001443935" },
      ],
      action: { label: "Verificar credencial", href: contact.credential },
    },
    "cert-excel": {
      code: "CRT · 02",
      kind: "Certificación",
      title: "Hojas de cálculo con Excel II",
      summary: "Curso de la Universidad Complutense de Madrid sobre fórmulas, funciones y análisis con hojas de cálculo.",
      facts: [
        { k: "Emisor", v: "Universidad Complutense de Madrid" },
        { k: "Fecha", v: "May 2023" },
      ],
    },
    "cert-ia": {
      code: "CRT · 03",
      kind: "En curso",
      title: "Especialización en IA generativa",
      summary:
        "Especialización en el uso de IA generativa en el día a día, con un objetivo práctico: automatizar tareas y mejorar procesos, sobre todo los financieros y de reporting que se repiten cada mes.",
      facts: [
        { k: "Centro", v: "thePower" },
        { k: "Estado", v: "En curso" },
        { k: "Enfoque", v: "Automatización y mejora de procesos" },
      ],
    },
    "cert-dataviz": {
      code: "CRT · 04",
      kind: "En curso",
      title: "Data Visualization · Power BI",
      summary:
        "Especialización en visualización de datos para sacar más partido a Power BI. Es también mi preparación para la certificación PL-300 (Power BI Data Analyst) de Microsoft.",
      facts: [
        { k: "Centro", v: "thePower" },
        { k: "Estado", v: "En curso" },
        { k: "Objetivo", v: "Certificación Microsoft PL-300" },
      ],
    },
    "con-linkedin": {
      code: "LNK · IN",
      kind: "Perfil",
      title: "LinkedIn",
      summary:
        "Mi perfil profesional completo: experiencia, formación y certificaciones, y lo que voy publicando sobre proyectos y aprendizajes.",
      facts: [
        { k: "Usuario", v: "claudio-baldini" },
        { k: "Estado", v: "Abierto a trabajo" },
      ],
      action: { label: "Abrir LinkedIn", href: contact.linkedin },
    },
    "con-github": {
      code: "LNK · GH",
      kind: "Código",
      title: "GitHub",
      summary: "Los repositorios de mis proyectos de datos y el código de este portfolio.",
      facts: [
        { k: "Usuario", v: "Claudiobaldinii" },
        { k: "Destacados", v: "Analisis_salarios · Proyecto_Final" },
      ],
      action: { label: "Abrir GitHub", href: contact.github },
    },
  },
  en: {
    "prj-salarios": {
      code: "PRJ · 01",
      kind: "Project",
      title: "Salary analysis: Data Science vs Data Analytics",
      summary:
        "Exploratory analysis of US data-sector salaries from 2020 to 2024. I cleaned and transformed the data and built an interactive Excel dashboard to compare both profiles.",
      facts: [
        { k: "Data", v: "2020 — 2024" },
        { k: "Cuts", v: "Seniority, work mode, company size, year" },
        { k: "Tools", v: "Excel · EDA · Dashboard" },
      ],
      action: { label: "Open on GitHub", href: repo("Analisis_salarios") },
    },
    "prj-ecommerce": {
      code: "PRJ · 02",
      kind: "Project",
      title: "360° e-commerce analysis",
      summary:
        "Final project of my master's at thePower. I prepared the data with Python and Pandas and built a Power BI model with DAX measures to track sales, customers and logistics.",
      facts: [
        { k: "Context", v: "Master's final project" },
        { k: "Areas", v: "Sales, customers, logistics" },
        { k: "Tools", v: "Python · Pandas · Power BI · DAX" },
      ],
      action: { label: "Open on GitHub", href: repo("Proyecto_Final") },
    },
    "prj-facturas": {
      code: "PRJ · 03",
      kind: "Project in progress",
      title: "PDF invoice extractor",
      summary:
        "Automates a task I know from daily accounting work: reading PDF invoices, extracting their data and structuring it so it can be posted without retyping.",
      facts: [
        { k: "Status", v: "In progress" },
        { k: "Goal", v: "Less manual work, fewer errors" },
        { k: "Tools", v: "Python · Automation" },
      ],
    },
    "edu-master": {
      code: "EDU · 01",
      kind: "Master's degree",
      title: "Master's in Big Data Analysis — Data Processing",
      summary:
        "Data analysis, visualisation and automation: statistics and EDA, SQL (subqueries, CTEs), Python for analysis (NumPy, Pandas, ETL), Power BI (modelling, DAX, Power Query), advanced Excel and AI applied to processes.",
      facts: [
        { k: "School", v: "thePower Business School" },
        { k: "Dates", v: "Sep 2024 — Sep 2025" },
        { k: "Final project", v: "360° e-commerce analysis" },
      ],
      action: { label: "Verify credential", href: contact.credential },
      diploma: true,
    },
    "edu-ifp": {
      code: "EDU · 02",
      kind: "Vocational degree",
      title: "Higher VET Diploma in Business Administration and Finance",
      summary:
        "The technical base of my profile: accounting, finance and business administration. I finished with a 9.17 grade and added Excel and Sage courses.",
      facts: [
        { k: "School", v: "iFP · Innovación en Formación Profesional" },
        { k: "Dates", v: "Feb 2021 — Feb 2023" },
        { k: "Grade", v: "9.17" },
      ],
    },
    "edu-uru": {
      code: "EDU · 03",
      kind: "Bachelor's degree",
      title: "Business Administration and Management",
      summary:
        "University studies in business administration in Venezuela, combined with the family import and distribution business.",
      facts: [
        { k: "University", v: "Universidad Rafael Urdaneta" },
        { k: "Dates", v: "2017 — 2020" },
      ],
    },
    "edu-bach": {
      code: "EDU · 04",
      kind: "Baccalaureate",
      title: "Science Baccalaureate",
      summary: "Secondary education, science track.",
      facts: [
        { k: "School", v: "Colegio Bellas Artes" },
        { k: "Dates", v: "2012 — 2017" },
      ],
    },
    "cert-data": {
      code: "CRT · 01",
      kind: "Certification",
      title: "Certified Data Analytics",
      summary:
        "Digital credential issued by thePower on completing the Data Analytics programme. It can be verified online with its ID.",
      facts: [
        { k: "Issuer", v: "thePower" },
        { k: "Date", v: "Dec 2025" },
        { k: "ID", v: "35524001443935" },
      ],
      action: { label: "Verify credential", href: contact.credential },
    },
    "cert-excel": {
      code: "CRT · 02",
      kind: "Certification",
      title: "Spreadsheets with Excel II",
      summary: "Universidad Complutense de Madrid course on formulas, functions and spreadsheet analysis.",
      facts: [
        { k: "Issuer", v: "Universidad Complutense de Madrid" },
        { k: "Date", v: "May 2023" },
      ],
    },
    "cert-ia": {
      code: "CRT · 03",
      kind: "In progress",
      title: "Generative AI specialisation",
      summary:
        "Specialisation in using generative AI day to day, with a practical goal: automating tasks and improving processes, especially the finance and reporting work that repeats every month.",
      facts: [
        { k: "School", v: "thePower" },
        { k: "Status", v: "In progress" },
        { k: "Focus", v: "Process automation and improvement" },
      ],
    },
    "cert-dataviz": {
      code: "CRT · 04",
      kind: "In progress",
      title: "Data Visualization · Power BI",
      summary:
        "Data visualisation specialisation to get more out of Power BI. It is also my preparation for Microsoft's PL-300 (Power BI Data Analyst) certification.",
      facts: [
        { k: "School", v: "thePower" },
        { k: "Status", v: "In progress" },
        { k: "Goal", v: "Microsoft PL-300 certification" },
      ],
    },
    "con-linkedin": {
      code: "LNK · IN",
      kind: "Profile",
      title: "LinkedIn",
      summary:
        "My full professional profile: experience, education and certifications, plus what I post about projects and learning.",
      facts: [
        { k: "User", v: "claudio-baldini" },
        { k: "Status", v: "Open to work" },
      ],
      action: { label: "Open LinkedIn", href: contact.linkedin },
    },
    "con-github": {
      code: "LNK · GH",
      kind: "Code",
      title: "GitHub",
      summary: "Repositories for my data projects and the code of this portfolio.",
      facts: [
        { k: "User", v: "Claudiobaldinii" },
        { k: "Featured", v: "Analisis_salarios · Proyecto_Final" },
      ],
      action: { label: "Open GitHub", href: contact.github },
    },
  },
};
