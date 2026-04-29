import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { skills } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">

                <RevealOnScroll>
                    <div className="mb-24 border-b border-zinc-800 pb-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mb-6">
                            <span className="text-accent text-4xl align-top mr-4">03.</span>
                            Habilidades Técnicas
                            <span className="text-accent text-6xl">.</span>
                        </h2>
                        <p className="text-zinc-400 text-xl font-light max-w-2xl">
                            Todas las herramientas que he utilizado para desarrollar mis proyectos.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-500 group h-full shadow-lg hover:shadow-2xl hover:shadow-accent/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold">{category.name}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {category.items.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 pl-3 pr-4 py-3 bg-zinc-950/50 border border-zinc-800/50 rounded-xl hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 group/item"
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
                                                    alt={skill.name}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-zinc-200 uppercase tracking-wide group-hover/item:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
