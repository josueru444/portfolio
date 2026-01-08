import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, X, Code, GraduationCap } from 'lucide-react';

const Projects = ({ projects }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            // Disable scroll
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    setSelectedImage(null);
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                // Re-enable scroll
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedImage]);

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 flex items-end gap-4">
                    <span className="text-white">Proyectos</span>
                    <span className="text-purple-500 text-6xl leading-[0.8] mb-1">.</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col">
                            <div
                                className={`relative h-56 overflow-hidden rounded-t-2xl ${project.image ? 'cursor-pointer' : ''}`}
                                onClick={() => project.image && setSelectedImage(project.image)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                        <Code size={48} className="text-white/20 group-hover:text-cyan-500/50 transition-colors duration-300" />
                                    </div>
                                )}

                                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    {project.showRepo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.showLink && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2 gap-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    {project.isSchoolProject && (
                                        <div className="group/icon relative z-30">
                                            <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                                <GraduationCap size={20} />
                                            </div>
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50 shadow-xl">
                                                Proyecto Escolar
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal using Portal */}
            {selectedImage && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Project Fullscreen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </section>
    );
};

export default Projects;
