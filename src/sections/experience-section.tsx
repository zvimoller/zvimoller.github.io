"use client";

import { useState } from "react";
import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/singularity_logo.png",
            title: "Head of Product / Co-Founder",
            company: "Singularity",
            location: "Chile",
            start: "11/2025",
            end: "Presente",
            description: [
                "Superviso la estrategia de producto e innovación en Singularity, donde creamos soluciones de gobernanza de datos para empresas en América Latina, con un fuerte enfoque en trazabilidad, privacidad, seguridad e implementación segura de IA. Enfocado en convertir los datos en un activo estratégico mediante tecnología confiable, escalable y conforme a normativa.",
            ],
        },
        {
            image: "/assets/rvbionics_logo.jpg",
            title: "Chief Technology Officer / Co-Founder",
            company: "RVBionics",
            location: "Chile & Argentina",
            start: "02/2023",
            end: "08/2025",
            description: [
                "Cofundé RVBionics. Fui parte del liderazgo ejecutivo y del directorio. Responsable de I+D y de toda la oferta tecnológica (Securics® Platform, BionicEdge®, Neuronics®). Formé uno de los primeros equipos de investigación OT en América Latina, implementé procesos continuos de verificación y validación y reduje los costos iniciales del programa en más de un 25%.",
            ],
        },
        {
            image: "/assets/freelancing_logo.png",
            title: "Software Engineer",
            company: "Freelance",
            location: "Argentina",
            start: "04/2020",
            end: "09/2023",
            description: [
                "Consultoría para cliente de packaging industrial en Argentina, Chile y Paraguay: estabilización de software OT y habilitación de flujos de datos confiables. Implementé APIs entre PLCs, sensores y servicios cloud. Lideré V&V y commissioning end-to-end para nuevas líneas, mejorando disponibilidad y reduciendo fricción de integración. Colaboré con equipos en I+D de ciberseguridad, I+D de producto y V&V.",
            ],
        },
        {
            image: "/assets/pentanite_logo.jpg",
            title: "Associate Software Engineer",
            company: "Pentanite",
            location: "Chile, Argentina & Perú",
            start: "10/2018",
            end: "01/2020",
            description: [
                "Desarrollé y mantuve software para proyectos de publicidad y marketing, mejorando eficiencia y escalabilidad. Optimicé aplicaciones web y servicios backend con Django REST Framework, resolví incidencias en producción y contribuí al desarrollo de plataforma y páginas orientadas al cliente, asegurando una experiencia consistente.",
            ],
        },
    ];

    const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

    const getId = (e: (typeof experience)[number]) => `${e.company}::${e.title}::${e.start}::${e.end}`;

    const toggle = (id: string) => {
        setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full">
            <Section title="EXPERIENCIA">
            <div className="w-full space-y-6">
                {experience.map((experience) => {
                    const id = getId(experience);
                    const isOpen = !!openIds[id];

                    return (
                    <div
                        key={id}
                        className="w-full border border-gray-200 bg-white p-6 rounded-xl dark:border-slate-800 dark:bg-slate-900/30"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-slate-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 dark:bg-slate-900 dark:border-slate-800">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-slate-100">
                                        {experience.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-2">
                                        <span>{experience.company}</span>
                                        <span className="text-gray-300 dark:text-slate-700">•</span>
                                        <span>{experience.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>{experience.start} - {experience.end}</div>
                                {/* Fixed dimensions so open/closed states don't shift layout. */}
                                <button
                                    type="button"
                                    onClick={() => toggle(id)}
                                    aria-expanded={isOpen}
                                    aria-label={isOpen ? "Ocultar descripción" : "Ver descripción"}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-900/60"
                                >
                                    <img
                                        src="https://static.thenounproject.com/png/636009-200.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                        className={`block w-4 h-4 opacity-80 transition-transform duration-200 dark:invert ${isOpen ? "rotate-180" : "rotate-0"}`}
                                    />
                                </button>
                            </div>
                        </div>
                        {isOpen && (
                            <ul className="list-disc px-5 mt-6 text-gray-500 dark:text-slate-400 space-y-2">
                                {experience.description.map((description) => (
                                    <li key={description}>{description}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    );
                })}
            </div>
            </Section>
        </div>
    );
}