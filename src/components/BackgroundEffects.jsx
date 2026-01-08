import React from 'react';
import { Asterisk, Circle, Plus, Triangle, Square } from 'lucide-react';

const BackgroundEffects = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full min-h-screen bg-primary/0">
            {/* 1. Subtle Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

            {/* 2. Geometric Shapes scattered - HIGHER CONTRAST & SCROLLABLE (Absolute) */}

            {/* Large Asterisk Top Left - Floating & Spinning */}
            <div className="absolute top-[5%] left-[5%] text-accent opacity-[0.08] animate-spin-slow">
                <Asterisk size={200} />
            </div>

            {/* Crosses - Floating */}
            <div className="absolute top-[15%] right-[10%] text-accent opacity-[0.1] animate-float">
                <Plus size={80} strokeWidth={4} />
            </div>
            <div className="absolute top-[45%] left-[15%] text-accent opacity-[0.08] animate-float-delayed">
                <Plus size={120} strokeWidth={2} />
            </div>
            <div className="absolute bottom-[10%] right-[20%] text-accent opacity-[0.08] animate-pulse-slow">
                <Plus size={60} strokeWidth={4} />
            </div>

            {/* Circles - Moving */}
            <div className="absolute top-[30%] left-[10%] border-4 border-accent opacity-[0.08] rounded-full w-40 h-40 animate-spin-reverse-slow">
                <div className="w-2 h-2 bg-accent rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute bottom-[20%] right-[5%] border-2 border-accent opacity-[0.1] rounded-full w-24 h-24 animate-float"></div>
            <div className="absolute top-[70%] left-[50%] border-2 border-accent opacity-[0.06] rounded-full w-64 h-64 animate-spin-slow"></div>

            {/* Filled Circle - Pulsing */}
            <div className="absolute top-[25%] right-[30%] bg-accent opacity-[0.05] rounded-full w-32 h-32 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-[40%] left-[5%] bg-accent opacity-[0.05] rounded-full w-48 h-48 blur-2xl animate-pulse-slow"></div>

            {/* 3. Code-like accents - Drifting */}
            <div className="absolute bottom-[15%] right-[20%] font-mono text-accent opacity-[0.1] text-6xl font-bold select-none rotate-12 animate-float">
                {`</>`}
            </div>
            <div className="absolute top-[10%] left-[40%] font-mono text-accent opacity-[0.08] text-4xl font-bold select-none -rotate-6 animate-float-delayed">
                {`{ }`}
            </div>
            <div className="absolute top-[60%] right-[10%] font-mono text-accent opacity-[0.08] text-5xl font-bold select-none animate-pulse-slow">
                {`//`}
            </div>


            {/* 4. Noise Texture Overlay for "Paper" feel */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 5. Vignette (Fixed to viewport to keep focus) */}
            <div className="fixed inset-0 bg-radial-gradient from-transparent to-primary/95 pointer-events-none"></div>
        </div>
    );
};

export default BackgroundEffects;
