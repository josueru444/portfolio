import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { heroData } from '../data/portfolioData';

const Hero = ({ scrollTo }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10 overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
                    <span className="text-cyan-400 font-mono text-sm tracking-wide">{heroData.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 block mb-2 sm:mb-4">
                        {heroData.titlePrefix}
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 animate-gradient-x glow-text filter drop-shadow-lg">
                        {heroData.titleSuffix}
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    {heroData.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button 
                        onClick={() => scrollTo('projects')} 
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
                    >
                        <span className="relative z-10">{heroData.primaryBtn}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                    
                    <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 group">
                        <Download size={20} className="group-hover:translate-y-1 transition-transform" /> 
                        {heroData.secondaryBtn}
                    </button>
                </div>

                <div className="mt-20 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollTo('about')}>
                    <ChevronDown className="mx-auto text-cyan-400" size={32} />
                </div>
            </div>
            
            <style jsx>{`
                .glow-text {
                    text-shadow: 0 0 40px rgba(192, 38, 211, 0.4);
                }
            `}</style>
        </section>
    );
};

export default Hero;
