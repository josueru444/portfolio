import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 flex items-end gap-4">
                    <span className="text-white">Experiencia</span>
                    <span className="text-purple-500 text-6xl leading-[0.8] mb-1">.</span>
                </h2>

                <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
                    {experience.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-black border-4 border-cyan-500 group-hover:scale-125 transition-transform duration-300"></div>

                            {/* Content Card */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {job.role}
                                    </h3>
                                    <span className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} /> {job.period}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-slate-400 text-sm">
                                    <span className="flex items-center gap-1">
                                        <Briefcase size={16} className="text-purple-400" /> {job.company}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {job.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {job.extraProject && (
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Proyectos Adicionales: <span className="text-purple-400">{job.extraProject.name}</span>
                                        </h4>
                                        <ul className="space-y-3">
                                            {job.extraProject.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                                    <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
