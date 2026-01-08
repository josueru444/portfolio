import {
    Code,
    Terminal,
    Database,
    Cpu
} from 'lucide-react';
import React from 'react';

export const personalInfo = {
    name: "Josué Ruíz",
    role: "Ingeniero en Sistemas Computacionales",
    tagline: "Arquitecto de software especializado en construir soluciones escalables y de alto rendimiento.",
    description: "Próximo Ingeniero en Sistemas Computacionales enfocado en el desarrollo web y backend. Cuento con experiencia en PHP (Laravel), Java, Python y MySQL, además de conocimientos en APIs REST. Actualmente estoy ampliando mis habilidades en Spring y ciberseguridad, motivado por el aprendizaje continuo y las buenas prácticas de desarrollo.",
    email: "josueru444@gmail.com",
    phone: "715-164-7702",
    linkedin: "https://linkedin.com/in/josue-ruiz",
    github: "https://github.com/josueru444",
    location: "H. Zitácuaro, Mich, MX"
};

export const heroData = {
    badge: "Disponible para Proyectos",
    titlePrefix: "Ingeniero en",
    titleSuffix: "Sistemas Computacionales",
    description: "Desarrollador Full Stack con experiencia en arquitecturas escalables, construcción de APIs robustas y desarrollo de software a medida.",
    primaryBtn: "Ver Portafolio",
    secondaryBtn: "Descargar CV"
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
            { name: "TypeScript", icon: "typescript", color: "3178C6" }
        ]
    },
    {
        name: "Backend & DB",
        icon: <Terminal size={24} />,
        items: [
            { name: "Laravel", icon: "laravel", color: "FF2D20" },
            { name: "PHP", icon: "php", color: "777BB4" },
            { name: "Django", icon: "django", color: "092E20" },
            { name: "Python", icon: "python", color: "3776AB" },
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
            { name: "MySQL", icon: "mysql", color: "4479A1" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" }
        ]
    },
    {
        name: "Languages & Tools",
        icon: <Cpu size={24} />,
        items: [
            { name: "Java", icon: "openjdk", color: "FFFFFF" },
            { name: "Kotlin", icon: "kotlin", color: "7F52FF" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Git", icon: "git", color: "F05032" },
            { name: "Docker", icon: "docker", color: "2496ED" }
        ]
    },
];

export const projects = [
    {
        title: " Plataforma Administrativa Oasis Surf School",
        desc: "Integré la infraestructura de pagos digitales mediante las APIs de Stripe y PayPal, programando la lógica para cobros únicos y esquemas de parcialidades. Codifiqué los módulos administrativos para la gestíon automatizada de inscripciones, cancelaciones y devoluciones. Construí el sistema de reportes financieros y el módulo de galería multimedia para el panel de control (Backoffice)",
        tags: ["Laravel", "React", "DOMPDF", "MySQL", "Typescript", "Orion", "Paypal", "Stripe"],
        link: "#",
        repo: "#",
        showLink: false,
        showRepo: false,
        image: "",
        isSchoolProject: false

    },
    {
        title: "Sistema de Gestión de Grupos",
        desc: "Plataforma full-stack de gestión académica para optimizar la organización escolar. Incluye autenticación segura (SSO) con Azure Entra y generación automática de formularios con OpenAI.",
        tags: ["Laravel 11", "Azure Entra", "OpenAI API", "MySQL", "PHPWord"],
        link: "#",
        repo: "#",
        showLink: false,
        showRepo: false,
        image: "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafkreihall3gpnx2lnuofbsyhegnej5xj2eqg33ef6yagk55ccrdveqhzy",
        isSchoolProject: true
    },
    {
        title: "App Móvil venta de vinilos",
        desc: "Aplicación nativa Android de comercio electrónico con arquitectura MVVM. Sincronización en tiempo real con API REST propia y autenticación Google Sign-In.",
        tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Laravel API", "MVVM"],
        link: "#",
        repo: "#",
        showLink: false,
        showRepo: false,
        image: "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafkreiabzzrnsbw42wupe3mp3upykacksdkgzifzhiumnflwikhigcu4ua",
        isSchoolProject: true
    },
    {
        title: "Tienda en Línea",
        desc: "Proyecto escolar de comercio electrónico con arquitectura MVC. Autenticación con Google Sign-In y Facebook. Se integraron pagos con Paypal. Se implementó el uso de mapas con Google Maps API para mostrar la ubicación de las tiendas físicas.",
        tags: ["Laravel", "Paypal", "Google Maps API", "MySQL", "Google Sign-In", "Facebook"],
        link: "#",
        repo: "#",
        showLink: false,
        showRepo: false,
        image: "https://magenta-rare-python-472.mypinata.cloud/ipfs/bafybeihyoqmupssemysgif3zhe2vdpuvu4cmn3empqywheacxg6dkgrbsy",
        isSchoolProject: true
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
            "Desarrollo de algoritmos backend para procesamiento de datos de bots de transcripción."
        ],
        extraProject: {
            name: "Plataforma Administrativa Oasis Surf School",
            achievements: [
                "Infraestructura de pagos digitales (Stripe, PayPal) con lógica para cobros únicos y parcialidades.",
                "Módulos administrativos para inscripciones, cancelaciones y devoluciones.",
                "Sistema de reportes financieros y galería multimedia para Backoffice."
            ]
        }
    },
    {
        role: "Desarrollador de Sistemas (Servicio Social)",
        company: "Secretaría de Seguridad Pública",
        period: "Ago. 2023 – Ene. 2024",
        achievements: [
            "Colaboración en el desarrollo de un sistema integral para optimizar procesos internos y mejorar la eficiencia operativa.",
            "Programación de interfaces de usuario con Qt Designer y Python, contribuyendo a la digitalización de la gestión de recursos."
        ]
    }
];
