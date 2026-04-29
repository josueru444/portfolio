import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, X, Code, GraduationCap, ZoomIn, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import FocusTrap from 'focus-trap-react';

const Projects = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);

    const closeModal = () => {
        setSelectedProject(null);
        setExpandedImage(null);
    };

    // Sync modal state with URL on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('project');
        if (projectId) {
            const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId);
            if (project) {
                setSelectedProject(project);
            }
        }
    }, [projects]);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';

            // Sync URL
            const slug = selectedProject.title.toLowerCase().replace(/\s+/g, '-');
            window.history.pushState(null, '', `?project=${slug}`);

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            if (window.location.search.includes('project=')) {
                window.history.pushState(null, '', window.location.pathname);
            }
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
                        <p className="text-zinc-400 text-xl font-light max-w-2xl">
                            Selección de trabajos recientes y desarrollos destacados.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="group bg-zinc-900/40 border border-zinc-800/50 rounded-3xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-500 flex flex-col relative overflow-hidden cursor-pointer h-full shadow-lg hover:shadow-2xl hover:shadow-accent/5"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden border-b border-zinc-800/50">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                            <Code size={48} className="text-zinc-700 group-hover:text-accent transition-colors duration-500" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col space-y-5">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors tracking-tight leading-tight">{project.title}</h3>
                                        {project.isSchoolProject && (
                                            <div className="text-zinc-500 group-hover:text-accent transition-colors flex-shrink-0 mt-1" title="Proyecto Escolar">
                                                <GraduationCap size={20} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 font-light">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-zinc-950/50 text-zinc-400 uppercase tracking-wider rounded-full border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-[10px] font-bold px-3 py-1 text-zinc-500 flex items-center">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Button inside Card */}
                                    <div className="mt-auto pt-6 flex justify-between items-center border-t border-zinc-800/50">
                                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                                            Vista Rápida <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </span>
                                        {project.hasDetails && (
                                            <a
                                                href={`${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL}/project/${project.slug}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="px-4 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all z-10 relative"
                                            >
                                                Ver Detalles
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Full Details Modal using Portal */}
            {selectedProject && createPortal(
                <FocusTrap focusTrapOptions={{ initialFocus: false, allowOutsideClick: true }}>
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/95 animate-in fade-in duration-200"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        <div className="absolute inset-0" onClick={closeModal} aria-label="Cerrar detalles del proyecto"></div>
                        <div
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 shadow-2xl z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors z-50"
                                onClick={closeModal}
                                aria-label="Cerrar detalles del proyecto"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Left: Image */}
                                <div className="relative h-64 md:h-auto bg-zinc-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 p-8 group/modalimage overflow-hidden">
                                    {selectedProject.image ? (
                                        <>
                                            <img
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg cursor-pointer transition-transform duration-500 group-hover/modalimage:scale-[1.02]"
                                                onClick={() => setExpandedImage(selectedProject.image)}
                                            />
                                            <button 
                                                className="absolute inset-0 m-auto w-16 h-16 bg-black/50 hover:bg-accent text-white rounded-full flex items-center justify-center opacity-0 group-hover/modalimage:opacity-100 transition-all cursor-pointer transform scale-75 group-hover/modalimage:scale-100"
                                                onClick={() => setExpandedImage(selectedProject.image)}
                                                aria-label="Ampliar imagen"
                                            >
                                                <ZoomIn size={24} />
                                            </button>
                                        </>
                                    ) : (
                                        <Code size={64} className="text-zinc-700" aria-hidden="true" />
                                    )}
                                </div>

                                {/* Right: Details */}
                                <div className="p-8 md:p-10 space-y-8">
                                    <div>
                                        <h3 id="project-modal-title" className="text-4xl font-black text-white uppercase tracking-tight mb-4">
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

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-3 pt-6 mt-auto border-t border-zinc-800">
                                        {selectedProject.hasDetails && (
                                            <a
                                                href={`${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL}/project/${selectedProject.slug}`}
                                                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-full hover:bg-red-500 transition-all shadow-lg shadow-accent/20"
                                            >
                                                Ver Detalles Completos
                                            </a>
                                        )}
                                        {selectedProject.showLink && selectedProject.link && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full inline-flex justify-center items-center gap-2 px-6 py-3 font-bold rounded-full transition-all ${selectedProject.hasDetails
                                                        ? "bg-zinc-900/50 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                                                        : "bg-accent text-white hover:bg-red-500 shadow-lg shadow-accent/20"
                                                    }`}
                                            >
                                                <ExternalLink size={20} />
                                                Ver Proyecto (en producción)
                                            </a>
                                        )}
                                        {selectedProject.showRepo && selectedProject.repo && (
                                            <a
                                                href={selectedProject.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-transparent text-zinc-400 font-bold rounded-full hover:text-white hover:bg-zinc-900 transition-all border border-zinc-800"
                                            >
                                                <Github size={20} />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FocusTrap>,
                document.body
            )}

            {/* Lightbox Modal */}
            {expandedImage && createPortal(
                <div 
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out"
                    onClick={() => setExpandedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors z-[210]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpandedImage(null);
                        }}
                    >
                        <X size={24} />
                    </button>
                    <img 
                        src={expandedImage} 
                        alt="Vista ampliada" 
                        className="max-w-[95vw] max-h-[95vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </section>
    );
};

export default Projects;
