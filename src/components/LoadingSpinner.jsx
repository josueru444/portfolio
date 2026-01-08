import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary">
            <div className="relative">
                {/* Center Icon or Empty */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-black text-2xl animate-pulse tracking-widest">LOADING</span>
                </div>

                {/* Spinning Rings */}
                <div className="w-24 h-24 border-4 border-zinc-800 rounded-full"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-accent rounded-full animate-spin"></div>
            </div>

            <p className="mt-8 text-zinc-500 font-mono text-sm tracking-[0.5em] uppercase animate-pulse">
                System Initializing
            </p>
        </div>
    );
};

export default LoadingSpinner;
