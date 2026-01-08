import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = ({ personalInfo }) => {
    return (
        <footer className="py-12 text-center text-sm border-t border-zinc-800 relative z-10">
            <div className="flex justify-center gap-8 mb-8">
                <a href="https://github.com/josueru444" className="text-zinc-500 hover:text-white transition-colors p-2 border border-zinc-800 hover:border-white hover:bg-zinc-900 rounded-none"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/josue-ruiz-b01945196/" className="text-zinc-500 hover:text-white transition-colors p-2 border border-zinc-800 hover:border-white hover:bg-zinc-900 rounded-none"><Linkedin size={20} /></a>
            </div>
            <p className="text-zinc-600 uppercase tracking-widest text-xs">Diseñado por <span className="text-white font-bold">{personalInfo.name}</span></p>
        </footer>
    );
};

export default Footer;
