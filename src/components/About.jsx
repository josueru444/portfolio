import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About = ({ personalInfo }) => {
    return (
        <section id="about" className="py-32 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <RevealOnScroll>
                    {/* Bento Grid Styling: Solid, High Contrast, Soft Corners */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center md:text-left">

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-4 border-l-4 border-accent pl-6 inline-block md:block">
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                                    <span className="text-accent text-3xl align-top mr-2">01.</span>
                                    Sobre Mí
                                </h2>
                            </div>

                            <p className="text-xl text-zinc-300 leading-loose font-light tracking-wide text-justify">
                                {personalInfo.description}
                            </p>
                        </div>

                        {/* Decorative element: Big faded number */}
                        <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/5 pointer-events-none select-none hidden md:block">
                            01
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default About;
