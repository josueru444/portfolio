import { Code, Terminal, Database, Cpu } from "lucide-react";
import React from "react";

import oasisSurfSchool from "./projects/oasis-surf-school.json";
import gestionGrupos from "./projects/gestion-grupos-entidad.json";
import appVinilos from "./projects/app-vinilos.json";
import ecommerceLaravelMaps from "./projects/ecommerce-laravel-maps.json";

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
      { name: "Java", icon: "openjdk", color: "ED8B00" },
      { name: "PHP", icon: "php", color: "777BB4" },
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
      { name: "Java", icon: "openjdk", color: "ED8B00" },
      { name: "Kotlin", icon: "kotlin", color: "7F52FF" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "Git", icon: "git", color: "F05032" },
      { name: "Docker", icon: "docker", color: "2496ED" },
    ],
  },
];

export const projects = [
  oasisSurfSchool,
  gestionGrupos,
  appVinilos,
  ecommerceLaravelMaps,
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
