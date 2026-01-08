import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = ({ personalInfo }) => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm bg-black/40 backdrop-blur-xl border-t border-white/5 relative z-10">
            <div className="flex justify-center gap-8 mb-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={24} /></a>
            </div>
            <p>Diseñado en el futuro por <span className="text-white font-bold">{personalInfo.name}</span></p>
        </footer>
    );
};

export default Footer;
