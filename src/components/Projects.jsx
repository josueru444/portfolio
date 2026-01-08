import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, X, Code, GraduationCap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Projects = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    setSelectedProject(null);
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedProject]);

    return (
        <section id="projects" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <div className="mb-24 border-b border-zinc-800 pb-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase relative inline-block">
                            <span className="text-accent text-4xl align-top mr-4">02.</span>
                            Proyectos
                            <span className="text-accent text-6xl leading-[0.6] absolute -top-4 -right-8 animate-pulse">.</span>
                        </h2>
                        <p className="text-zinc-500 text-xl font-light max-w-2xl">
                            Selección de trabajos recientes y desarrollos destacados.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="group bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-accent transition-all duration-300 flex flex-col relative overflow-hidden cursor-pointer h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden border-b border-zinc-800 group-hover:border-accent transition-colors">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                            <Code size={48} className="text-zinc-600 group-hover:text-accent transition-colors duration-300" />
                                        </div>
                                    )}

                                    {/* Overlay Icons - Visual hint only now */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Ver Detalles
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors uppercase tracking-wide">{project.title}</h3>
                                        {project.isSchoolProject && (
                                            <div className="relative group/icon">
                                                <div className="text-zinc-600 group-hover:text-accent transition-colors">
                                                    <GraduationCap size={20} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 font-light">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 uppercase tracking-wider group-hover:border-zinc-700 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Full Details Modal using Portal */}
            {selectedProject && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/95 animate-in fade-in duration-200"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors z-50"
                            onClick={() => setSelectedProject(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="grid md:grid-cols-2">
                            {/* Left: Image */}
                            <div className="h-64 md:h-auto relatives bg-zinc-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 p-8">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
                                    />
                                ) : (
                                    <Code size={64} className="text-zinc-700" />
                                )}
                            </div>

                            {/* Right: Details */}
                            <div className="p-8 md:p-10 space-y-8">
                                <div>
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                                        {selectedProject.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.isSchoolProject && (
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-500/20">
                                                <GraduationCap size={14} /> Proyecto Escolar
                                            </span>
                                        )}
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="prose prose-invert prose-p:text-zinc-300 prose-p:font-light prose-p:leading-loose">
                                        <p>{selectedProject.desc}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6 mt-auto border-t border-zinc-800">
                                    {selectedProject.showRepo && selectedProject.repo && (
                                        <a
                                            href={selectedProject.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-zinc-950 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all border border-zinc-800"
                                        >
                                            <Github size={20} />
                                            GitHub
                                        </a>
                                    )}
                                    {selectedProject.showLink && selectedProject.link && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-accent/20"
                                        >
                                            <ExternalLink size={20} />
                                            Demo / Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Projects;
