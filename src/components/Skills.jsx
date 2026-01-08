import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="py-24 relative z-10 overflow-hidden">
             {/* Background decorations - Subtle and premium */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                            Tech Ecosystem
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Mi stack tecnológico está diseñado para escalabilidad, rendimiento y experiencias de usuario excepcionales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                        {React.cloneElement(skillGroup.icon, { size: 32 })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {skillGroup.name}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="group/item relative flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-black/20 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default"
                                        >
                                           <div className="w-6 h-6 flex items-center justify-center">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                                                    alt={tech.name}
                                                    className="w-5 h-5 object-contain filter drop-shadow opacity-90 group-hover/item:scale-110 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                           </div>
                                            <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">
                                                {tech.name}
                                            </span>
                                            
                                            {/* Subtle Glow */}
                                            <div 
                                                className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-20 transition-opacity duration-300 pointer-events-none"
                                                style={{ backgroundColor: `#${tech.color}` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
