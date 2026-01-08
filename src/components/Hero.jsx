import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ heroData, scrollTo, openCV }) => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            {/* Note: Global BackgroundEffects handles the background/grid now */}

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Main Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-4 py-1 mb-6 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase font-bold">{heroData.badge}</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                            JOSUÉ <br />
                            <span className="text-zinc-800">RUÍZ</span>
                            <span className="text-accent">.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mb-12 leading-relaxed">
                            {heroData.titlePrefix} <span className="text-white font-bold">{heroData.titleSuffix}</span>.
                            <br />
                            <span className="text-lg text-zinc-500 mt-2 block">{heroData.description}</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <button
                                onClick={() => scrollTo('projects')}
                                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-[0_0_0_4px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_8px_rgba(220,38,38,0.2)] text-lg"
                            >
                                {heroData.primaryBtn}
                            </button>
                            <button
                                onClick={openCV}
                                className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-900 hover:border-white transition-all text-lg"
                            >
                                {heroData.secondaryBtn}
                            </button>
                        </div>
                    </div>

                    {/* Decorative TECH Element (Replaced Japanese) */}
                    <div className="hidden md:flex flex-col items-center justify-center space-y-8 opacity-40">
                        <div className="w-px h-32 bg-gradient-to-b from-transparent to-zinc-500"></div>
                        <span className="writing-vertical-rl text-accent font-mono tracking-[0.4em] text-xs font-bold uppercase rotate-180 animate-pulse-slow drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                            SYSTEMS ENGINEER
                        </span>
                        <div className="w-px h-32 bg-gradient-to-b from-zinc-500 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="text-zinc-500" size={24} />
            </div>
        </section>
    );
};

export default Hero;
