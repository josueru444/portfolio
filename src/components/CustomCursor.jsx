import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Move main cursor instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }

            // Update target for trailer
            if (trailerRef.current) {
                trailerRef.current.dataset.targetX = clientX;
                trailerRef.current.dataset.targetY = clientY;
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            if (e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')) {
                setIsHovering(true);
            }
        };

        const onMouseOut = (e) => {
            if (e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.body.addEventListener('mouseover', onMouseOver);
        document.body.addEventListener('mouseout', onMouseOut);

        // Animation loop for smooth trailer
        let animationFrameId;
        const animateTrailer = () => {
            if (trailerRef.current) {
                const targetX = parseFloat(trailerRef.current.dataset.targetX) || 0;
                const targetY = parseFloat(trailerRef.current.dataset.targetY) || 0;

                const currentX = parseFloat(trailerRef.current.dataset.currentX) || 0;
                const currentY = parseFloat(trailerRef.current.dataset.currentY) || 0;

                // Snappier ease for less lag
                const ease = 0.2;

                const newX = currentX + (targetX - currentX) * ease;
                const newY = currentY + (targetY - currentY) * ease;

                trailerRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
                trailerRef.current.dataset.currentX = newX;
                trailerRef.current.dataset.currentY = newY;
            }
            animationFrameId = requestAnimationFrame(animateTrailer);
        };
        animationFrameId = requestAnimationFrame(animateTrailer);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.body.removeEventListener('mouseover', onMouseOver);
            document.body.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: 'transform' }}
            />

            {/* Trailing Ring - Smaller and cleaner */}
            <div
                ref={trailerRef}
                className={`fixed top-0 left-0 w-6 h-6 border border-white/40 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-[2.0] bg-white/10 border-transparent' : 'scale-100'} ${isClicking ? 'scale-75' : ''}`}
                style={{ willChange: 'transform' }}
            />
        </>
    );
};

export default CustomCursor;
