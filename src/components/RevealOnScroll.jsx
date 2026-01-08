import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: "0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const style = {
        animationDelay: `${delay}s`,
        opacity: 0 // Start hidden
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={isVisible ? { animationDelay: `${delay}s` } : { opacity: 0 }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
