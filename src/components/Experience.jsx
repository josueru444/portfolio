import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { experience } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <div className="mb-24 border-b border-zinc-800 pb-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                            <span className="text-accent text-4xl align-top mr-4">04.</span>
                            Trayectoria
                            <span className="text-accent text-6xl">.</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 space-y-12">
                    {experience.map((job, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="relative pl-12">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-2 w-5 h-5 bg-zinc-900 border-4 border-accent rounded-full"></div>

                                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                                            <div className="text-accent font-medium mt-1">{job.company}</div>
                                        </div>
                                        <div className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-mono text-zinc-400 border border-white/5 whitespace-nowrap">
                                            {job.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {job.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                                                <p className="text-zinc-400 font-light leading-relaxed">{item}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    {job.extraProject && (
                                        <div className="mt-8 pt-8 border-t border-zinc-800/50">
                                            <h4 className="text-lg font-bold text-white mb-3">Proyecto Destacado: {job.extraProject.name}</h4>
                                            <ul className="space-y-3">
                                                {job.extraProject.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-1 h-1 bg-zinc-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                                        <p className="text-zinc-500 text-sm leading-relaxed">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
