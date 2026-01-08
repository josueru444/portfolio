import React from 'react';

const About = ({ personalInfo }) => {
    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
                    {/* Glow effect inside card */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-600/30 transition-all"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="text-fuchsia-500">01.</span> Sobre Mí
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {personalInfo.description}
                            </p>

                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl transform rotate-3 blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <img
                                src="https://placehold.co/400x400/0f172a/8b5cf6?text=Profile"
                                alt="Profile"
                                className="relative rounded-2xl w-full border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
