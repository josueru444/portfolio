import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = ({ personalInfo }) => {
    return (
        <section id="contact" className="py-32 px-6 relative z-10 border-t border-zinc-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <RevealOnScroll>
                    {/* Simple Header */}
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        ¿Tienes una <span className="text-zinc-600">idea?</span>
                    </h2>

                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Estoy listo para colaborar. Escríbeme y hagamos algo increíble.
                    </p>

                    {/* Button: White default, Red hover */}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-accent/25"
                    >
                        <Mail size={20} />
                        Contáctame
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Contact;
