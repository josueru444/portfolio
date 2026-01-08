import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

const Contact = ({ personalInfo }) => {
    return (
        <section id="contact" className="py-32 px-6 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative">
                <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 mb-8">
                    <Sparkles className="text-white animate-pulse" size={32} />
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    ¿Tienes una <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">idea?</span>
                </h2>

                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    Estoy listo para llevar tu próximo proyecto al siguiente nivel. Colaboremos y creemos algo extraordinario.
                </p>

                <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)] text-lg"
                >
                    <Mail size={22} />
                    Hablemos Ahora
                </a>
            </div>
        </section>
    );
};

export default Contact;
