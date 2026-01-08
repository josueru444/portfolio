import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = ({ scrolled, activeSection, scrollTo, isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary border-b border-zinc-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    className="text-2xl font-bold font-jp tracking-wider text-white cursor-pointer flex items-center gap-2 hover:text-accent transition-colors"
                    onClick={() => scrollTo('home')}
                >
                    Josué Ruíz
                </div>

                <div className="hidden md:flex items-center space-x-2">
                    {['Sobre mí', 'Proyectos', 'Habilidades', 'Experiencia'].map((item, idx) => {
                        const id = ['about', 'projects', 'skills', 'experience'][idx];
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-white text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {item}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="ml-4 px-6 py-2 bg-accent text-white rounded-full font-bold text-sm tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-accent/20"
                    >
                        Contactar
                    </button>
                </div>

                <button className="md:hidden text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-zinc-800 p-0">
                    {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="block w-full text-left text-lg font-bold text-zinc-400 hover:text-white hover:bg-zinc-900 px-8 py-4 border-b border-zinc-900 transition-colors uppercase tracking-wider"
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
