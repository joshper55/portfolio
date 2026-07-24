// src/app/data/portfolio-data.ts

export interface LocalizedText {
  es: string;
  en: string;
}

export interface LocalizedBullets {
  es: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: LocalizedText; 
  stack: string[];
  summary: LocalizedText;
  bullets: LocalizedBullets;
}

export interface Experience {
  company: string;
  role: LocalizedText;
  location: string;
  period: LocalizedText;
  bullets: LocalizedBullets;
}

export interface EducationItem {
  school: string;
  degree: LocalizedText;
  location: string;
  period: string;
}

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { category: { es: 'Backend', en: 'Backend' }, items: ['Spring Boot (Java 8 y 21)', 'Gin (Golang)', 'FastAPI (Python)'] },
  { category: { es: 'Frontend', en: 'Frontend' }, items: ['Angular', 'TypeScript', 'JavaScript', 'Ionic', 'HTML', 'CSS', 'PyQT'] },
  { category: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
  { category: { es: 'DevOps', en: 'DevOps' }, items: ['Linux', 'Git (GitLab, Bitbucket)', 'Jira', 'Postman', 'Docker'] },
  { category: { es: 'Integraciones', en: 'Integrations' }, items: ['REST APIs', 'JWT', 'OAuth2', 'JasperReports', 'QGIS'] },
];

export const PROJECTS: Project[] = [
  {
    id: 'caja-cobro',
    title: {
      es: 'Caja de Cobro Municipal (Xitoca)',
      en: 'Xitoca (Municipal Revenue & Cashier System)'
    },
    stack: ['Spring Boot', 'Angular', 'SQL Server', 'JasperReports'],
    summary: {
      es: 'Sistema de ingresos municipales para el ayuntamiento de Cuautitlán, con más de 200 trámites cobrables.',
      en: 'Municipal revenue system for the Cuautitlán city hall, managing over 200 billable procedures.'
    },
    bullets: {
      es: [
        'Desarrollo full stack colaborando en vistas, cálculos y análisis de datos.',
        'Integración de la pasarela bancaria Global Payments para pagos electrónicos en línea y su conciliación.',
        'Diseño de reportes financieros con JasperReports usados por el área de tesorería.',
        'Resolución de incidencias reportadas por usuarios a través de una plataforma de tickets propia.',
      ],
      en: [
        'Full-stack development collaborating on views, financial calculations, and data analysis.',
        'Integration of Global Payments banking gateway for online electronic payments and reconciliation.',
        'Design of financial reports using JasperReports utilized by the treasury department.',
        'Resolution of user-reported incidents through a proprietary ticketing platform.'
      ]
    },
  },
  {
    id: 'tramitta',
    title: {
      es: 'Tramitta — Gestión de Trámites',
      en: 'Tramitta — Online Procedure Management Platform'
    },
    stack: ['BPMN', 'Spring Boot', 'Angular'],
    summary: {
      es: 'Plataforma de trámites en línea para diversas dependencias gubernamentales.',
      en: 'Online procedures and workflows platform for multiple government agencies.'
    },
    bullets: {
      es: [
        'Diseño e implementación de flujos BPMN para la realización de trámites en línea.',
        'Sistema documental basado en códigos QR para que inspectores municipales validaran la autenticidad de certificados.',
        'Liderazgo en la integración de la pasarela bancaria del proyecto.',
      ],
      en: [
        'Design and implementation of BPMN workflows for online government procedures.',
        'Document system based on QR codes for municipal inspectors to validate certificate authenticity.',
        'Leadership in the integration of the project\'s payment gateway.'
      ]
    },
  },
  {
    id: 'emergencias',
    title: {
      es: 'Sistema de Atención de Emergencias (SOS)',
      en: 'SOS (Real-Time Emergency Response System)'
    },
    stack: ['Go', 'PostgreSQL', 'WebSockets', 'Ionic'],
    summary: {
      es: 'Sistema en tiempo real usado por personal de seguridad para alertas y seguimiento de unidades.',
      en: 'Real-time system used by security personnel for emergency alerts and unit dispatch tracking.'
    },
    bullets: {
      es: [
        'Backend en Go y PostgreSQL con comunicación vía WebSockets para alertas instantáneas.',
        'Seguimiento de unidades en tiempo real.',
        'Aplicación móvil complementaria desarrollada con Ionic Angular.',
      ],
      en: [
        'Backend in Go and PostgreSQL with WebSockets communication for instantaneous alerts.',
        'Real-time tracking of security units.',
        'Complementary mobile application developed with Ionic Angular.'
      ]
    },
  },
  {
    id: 'erp-metalurgico',
    title: {
      es: 'ERP Metalúrgico',
      en: 'Metallurgical ERP System'
    },
    stack: ['Angular', 'Go', 'SQL Server'],
    summary: {
      es: 'ERP full stack para una maquila metalúrgica de gran tamaño, digitalizando flujos antes manejados en Excel.',
      en: 'Full-stack ERP for a large-scale metallurgical plant, digitalizing workflows previously handled in Excel.'
    },
    bullets: {
      es: [
        'Catálogos de productos y materia prima con notificaciones automáticas entre departamentos.',
        'Trazabilidad completa del flujo de materiales.',
        'Sistema de alertas y análisis de datos con KPIs operativos.',
        'Levantamiento de requerimientos directamente con usuarios finales y personal operativo.',
      ],
      en: [
        'Product and raw material catalogs with automated notifications between departments.',
        'Full traceability of material workflows.',
        'Alert system and data analysis featuring operational KPIs.',
        'Requirement gathering directly from end-users and operational personnel.'
      ]
    },
  },
  {
    id: 'pld',
    title: {
      es: 'PLD — Prevención de Lavado de Dinero',
      en: 'AML — Anti-Money Laundering System'
    },
    stack: ['Spring Boot', 'Python', 'FastAPI', 'Tesseract', 'LLM'],
    summary: {
      es: 'Sistema de validación de documentos con OCR e interpretación por LLM.',
      en: 'Document validation system utilizing OCR and LLM-powered text interpretation.'
    },
    bullets: {
      es: [
        'Backend inicial en Spring Boot con autenticación OAuth2 y JWT.',
        'Microservicio OCR (Python, FastAPI, Tesseract) para extraer datos de documentos como estados de cuenta.',
        'Validación de información sensible (como el RFC) contra datos capturados manualmente.',
        'Integración de un modelo LLM para interpretar el texto del OCR y estructurarlo en JSON.',
      ],
      en: [
        'Initial backend in Spring Boot with OAuth2 and JWT authentication.',
        'OCR microservice (Python, FastAPI, Tesseract) to extract data from bank statements and documents.',
        'Validation of sensitive data (like tax IDs) against manually captured records.',
        'Integration of an LLM model to interpret OCR text and structure it into clean JSON output.'
      ]
    },
  },
  {
    id: 'ide-geo',
    title: {
      es: 'IDE — Infraestructura de Datos Espaciales',
      en: 'Cartographic Management System'
    },
    stack: ['Angular', 'GeoServer', 'PostGIS'],
    summary: {
      es: 'Plataforma de gestión de capas geoespaciales.',
      en: 'Geospatial layer management and infrastructure platform.'
    },
    bullets: {
      es: [
        'Frontend en Angular y administración de capas geoespaciales en GeoServer.',
        'Integración con PostGIS, PostgreSQL y servicios en Spring Boot.',
      ],
      en: [
        'Angular frontend and management of geospatial layers within GeoServer.',
        'Integration with PostGIS, PostgreSQL, and Spring Boot services.'
      ]
    },
  },
];


export const EXPERIENCE: Experience[] = [
  {
    company: 'CIANET',
    role: { es: 'Software Engineer', en: 'Software Engineer' },
    location: 'Durango, México',
    period: { es: 'Mayo 2022 – Actualidad', en: 'May 2022 – Present' },
    bullets: {
      es: [
        'Desarrollo full stack (Java/Spring Boot, Go, Angular) de aplicaciones empresariales y gubernamentales, participando en el ciclo completo: diseño de APIs REST, base de datos, frontend y soporte productivo.',
        'Colaboración directa con clientes y usuarios finales para levantamiento de requerimientos, análisis de incidencias y entrega de soluciones a la medida.',
      ],
      en: [
        'Full-stack development (Java/Spring Boot, Go, Angular) of enterprise and government applications, participating in the entire cycle: REST API design, databases, frontend, and production support.',
        'Direct collaboration with clients and end-users for requirements gathering, incident analysis, and tailoring custom solutions.'
      ]
    },
  },
  {
    company: 'Jadosh',
    role: { es: 'Freelance Web Developer', en: 'Freelance Web Developer' },
    location: 'Remoto',
    period: { es: 'Junio 2026 – Actualidad', en: 'June 2026 – Present' },
    bullets: {
      es: [
        'Desarrollo de landing pages y sitios web corporativos con React para pequeños negocios, desde el levantamiento de requerimientos hasta la entrega final.',
      ],
      en: [
        'Development of landing pages and corporate websites using React for small businesses, covering everything from initial requirement collection to final delivery.'
      ]
    },
  },
  {
    company: 'UNIPOLI Durango',
    role: { es: 'Pasante de GIS en Python', en: 'Python GIS Intern' },
    location: 'Durango, México',
    period: { es: 'Mayo 2021 – Agosto 2021', en: 'May 2021 – August 2021' },
    bullets: {
      es: [
        'Automatización de la generación de reportes cartográficos y del análisis espacial en QGIS mediante scripts en Python, incluyendo procesamiento por lotes de capas geográficas.',
      ],
      en: [
        'Automation of cartographic report generation and spatial analysis in QGIS using Python scripts, including batch processing of geographic layers.'
      ]
    },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'Universidad Politécnica de Durango',
    degree: { es: 'Ingeniería en Tecnología Ambiental — Titulado', en: 'B.S. in Environmental Technology — Degree Completed' },
    location: 'Durango, México',
    period: '2018 – 2021',
  },
  {
    school: 'CBTis #110',
    degree: { es: 'Bachillerato Técnico en Soporte a Equipo de Cómputo', en: 'Technical High School Degree in Computer Equipment Support' },
    location: 'Durango, México',
    period: '2015 – 2018',
  },
];