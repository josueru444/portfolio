import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ scrolled, activeSection, scrollTo, isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#030014]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                    onClick={() => scrollTo('home')}
                >
                    {'Josue Ruiz'}
                </div>

                <div className="hidden md:flex space-x-1">
                    {['Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia'].map((item, idx) => {
                        const id = ['about', 'skills', 'projects', 'experience'][idx];
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                <span className={`absolute inset-0 bg-white/10 rounded-full transform transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
                                <span className="relative z-10">{item}</span>
                            </button>
                        );
                    })}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:scale-105"
                    >
                        Contactar
                    </button>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4">
                    {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="block w-full text-left text-lg font-medium text-slate-300 hover:text-cyan-400 capitalize py-2 border-b border-white/5"
                        >
                            {item === 'home' ? 'Inicio' : item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
