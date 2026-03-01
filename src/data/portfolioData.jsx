import { Code, Terminal, Database, Cpu } from "lucide-react";
import React from "react";

export const personalInfo = {
  name: "Josué Ruíz",
  role: "Desarrollador Full Stack",
  tagline:
    "Arquitecto de software especializado en construir soluciones escalables y de alto rendimiento.",
  description:
    "Egresado de Ingeniería en Sistemas Computacionales enfocado en el desarrollo web y backend. Cuento con experiencia en PHP (Laravel), Java, Python y MySQL, además de conocimientos en APIs REST. Actualmente estoy ampliando mis habilidades en Spring y ciberseguridad, motivado por el aprendizaje continuo y las buenas prácticas de desarrollo.",
  email: "josueru444@gmail.com",
  phone: "715-164-7702",
  linkedin: "https://linkedin.com/in/josue-ruiz",
  github: "https://github.com/josueru444",
  location: "H. Zitácuaro, Mich, MX",
};

export const heroData = {
  badge: "Disponible para Proyectos",
  titlePrefix: "Desarrollador",
  titleSuffix: "Full Stack",
  description:
    "Desarrollador Full Stack con experiencia en arquitecturas escalables, construcción de APIs robustas y desarrollo de software a medida.",
  primaryBtn: "Ver Portafolio",
  secondaryBtn: "Descargar CV",
};

export const skills = [
  {
    name: "Frontend",
    icon: <Code size={24} />,
    items: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
      { name: "HTML5", icon: "html5", color: "E34F26" },
      { name: "CSS3", icon: "css", color: "1572B6" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
    ],
  },
  {
    name: "Backend & DB",
    icon: <Terminal size={24} />,
    items: [
      { name: "Laravel", icon: "laravel", color: "FF2D20" },
      { name: "Livewire", icon: "livewire", color: "FB70A9" },
      { name: "PHP", icon: "php", color: "777BB4" },
      { name: "Django", icon: "django", color: "092E20" },
      { name: "Python", icon: "python", color: "3776AB" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      //{ name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "47A248" },
    ],
  },
  {
    name: "Languages & Tools",
    icon: <Cpu size={24} />,
    items: [
      { name: "Java", icon: "openjdk", color: "FFFFFF" },
      { name: "Kotlin", icon: "kotlin", color: "7F52FF" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "Git", icon: "git", color: "F05032" },
      { name: "Docker", icon: "docker", color: "2496ED" },
    ],
  },
];

export const projects = [
  {
    title: "Sistema de Gestión para Escuela de Deportes e Idiomas",
    slug: "oasis-surf-school",
    desc: "Plataforma digital integral para la Escuela OASIS (Backoffice Web y App Móvil). Optimiza la gestión de clientes, reservas, pagos con Stripe, inventario y staff. Incluye firma digital de responsivas y prevención de conflictos de horario.",
    tags: [
      "Laravel",
      "React",
      "DOMPDF",
      "MySQL",
      "Typescript",
      "Orion",
      "Stripe",
    ],
    link: "https://oasissurfschoolpuertoescondido.com/",
    repo: "#",
    showLink: true,
    showRepo: false,
    image: "https://static.wixstatic.com/media/e8476f_66eed023f0b44694942530bdc2bb647c~mv2.jpg/v1/fill/w_1857,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e8476f_66eed023f0b44694942530bdc2bb647c~mv2.jpg",
    isSchoolProject: false,
    hasDetails: true,
    details: [
      { type: "image", src: "https://static.wixstatic.com/media/e8476f_66eed023f0b44694942530bdc2bb647c~mv2.jpg/v1/fill/w_1857,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e8476f_66eed023f0b44694942530bdc2bb647c~mv2.jpg", alt: "Imagen promocional de la escuela" },
      { type: "title", content: "Descripción del Proyecto" },
      { type: "paragraph", content: "Plataforma web SPA (React + TypeScript) integral para la Escuela OASIS – Surf & Español. El sistema abarca múltiples módulos y rutas (dashboard, staff, schedule) centralizando las operaciones comerciales, académicas y administrativas bajo una experiencia de usuario altamente reactiva." },
      { type: "image", src: "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafkreihj4jwzohcczei3tmsv2n3dnjtb7ufvdvdlfay3b7zzezvmcojkke", alt: "Dashboard Principal del Sistema" },

      { type: "title", content: "Portal del Cliente y Experiencia de Reserva" },
      {
        type: "list", items: [
          "Área Privada Estudiantil: Dashboard dedicado donde el alumno puede supervisar sus reservas, revisar su historial de pagos, firmar cartas responsivas (Waivers) y descargar sus certificados.",
          "Control de Clases: Interfaz interactiva para revisar clases vigentes de surf y español, visualizando detalles como instructor asignado, estado, horario y punto de encuentro.",
          "Motor de Reservas y Paquetes: Sistema dinámico para configurar y adquirir paquetes (clases individuales, Surf & Español, hospedaje) con reglas de pagos anticipados y selección de complementos (fotos, coaching, equipo).",
          "Checkout Integrado: Pasarela de pagos implementada con Stripe y PayPal, brindando confirmaciones de transacción automáticas y manejo de resultados (success/cancel)."
        ]
      },
      { type: "title", content: "Módulos de Backoffice y Operaciones" },
      {
        type: "list", items: [
          "Gestión de Staff y Agendas: Herramientas administrativas avanzadas para controlar perfiles de instructores, administrar calendarios diarios/mensuales, y prevenir conflictos de horarios.",
          "Centro Financiero: Módulos específicos para supervisión de ingresos, operaciones diarias de caja (CashBox), aplicación de reembolsos (Refunds) y gestión de matrículas.",
          "Seguridad y Roles: API protegida por JSON Web Tokens (JWT) que administra de manera independiente las sesiones y permisos de clientes y administradores operativos."
        ]
      },

      { type: "title", content: "Arquitectura Técnica y Capa Frontend" },
      {
        type: "list", items: [
          "Stack Moderno: Interfaz gráfica responsiva construida con la potencia de React Router, tipada sólidamente con TypeScript.",
          "Cliente API Optimizado: Entorno centralizado en el Frontend para el consumo de la API, encargándose de la inyección de Bearer tokens, construcción de URLs y manejo global de excepciones y errores de red.",
          "UI/UX y Sistema de Diseño: Base visual estructurada íntegramente con Tailwind CSS, complementada por utilidades dinámicas y componentes de feedback (Toasters, Tooltips) que aseguran una usabilidad premium en toda la plataforma."
        ]
      }
    ]
  },
  {
    title: "Sistema de Gestión de Grupos",
    slug: "gestion-grupos-entidad",
    desc: "Plataforma full-stack de gestión académica para optimizar la organización escolar. Incluye autenticación segura (SSO) con Azure Entra y generación automática de formularios con OpenAI.",
    tags: ["Laravel 11", "Azure Entra", "OpenAI API", "MySQL", "PHPWord"],
    link: "#",
    repo: "#",
    showLink: false,
    showRepo: false,
    image:
      "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafkreihall3gpnx2lnuofbsyhegnej5xj2eqg33ef6yagk55ccrdveqhzy",
    isSchoolProject: true,
    hasDetails: false,
  },
  {
    title: "App Móvil venta de vinilos",
    slug: "app-vinilos",
    desc: "Aplicación nativa Android de comercio electrónico con arquitectura MVVM. Sincronización en tiempo real con API REST propia y autenticación Google Sign-In.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Laravel API", "MVVM"],
    link: "#",
    repo: "#",
    showLink: false,
    showRepo: false,
    image:
      "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafkreiabzzrnsbw42wupe3mp3upykacksdkgzifzhiumnflwikhigcu4ua",
    isSchoolProject: true,
    hasDetails: false,
  },
  {
    title: "Tienda en Línea",
    slug: "ecommerce-laravel-maps",
    desc: "Mi primer proyecto escolar utilizando Laravel. Desarrollé una aplicación de comercio electrónico (MVC) con autenticación social (Google/Facebook), pagos vía PayPal y geolocalización de tiendas mediante Google Maps API.",
    tags: [
      "Laravel",
      "Paypal",
      "Google Maps API",
      "MySQL",
      "Google Sign-In",
      "Facebook",
    ],
    link: "#",
    repo: "#",
    showLink: false,
    showRepo: false,
    image:
      "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafybeihyoqmupssemysgif3zhe2vdpuvu4cmn3empqywheacxg6dkgrbsy",
    isSchoolProject: true,
    hasDetails: false,
  },
];

export const experience = [
  {
    role: "Desarrollador de Software Full Stack (Residencia Profesional)",
    company: "Extendevs",
    period: "Ago. 2025 – Dic. 2025",
    achievements: [
      "Migración y modernización del módulo de comités (Sector Bancario - Kapital Bank) usando Lumen, Angular y MySQL.",
      "Implementación de IA (Meeting BaaS y Google Gemini 2.5) para transcripción automática de videollamadas, reduciendo 85% el tiempo de gestión.",
      "Integración de API DocuSign para flujo de firma digital y validez legal de minutas.",
      "Desarrollo de algoritmos backend para procesamiento de datos de bots de transcripción.",
    ],
    extraProject: {
      name: "Sistema de Gestión OASIS Surf & Español",
      achievements: [
        "Desarrollo de plataforma integral (WebApp Frontoffice/Backoffice + App Móvil) para la gestión total de la escuela.",
        "Implementación de reservas en línea, pagos automatizados con Stripe y firma digital de responsivas.",
        "Automatización de reportes, envío de encuestas/certificados y prevención de colisión de horarios.",
      ],
    },
  },
  {
    role: "Desarrollador de Sistemas (Servicio Social)",
    company: "Secretaría de Seguridad Pública",
    period: "Ago. 2023 – Ene. 2024",
    achievements: [
      "Colaboración en el desarrollo de un sistema integral para optimizar procesos internos y mejorar la eficiencia operativa.",
      "Programación de interfaces de usuario con Qt Designer y Python, contribuyendo a la digitalización de la gestión de recursos.",
    ],
  },
];
