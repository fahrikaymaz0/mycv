import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target;
            setIsHovering(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('glass-card')
            );
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Spotlight Effect Layer */}
            <motion.div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9998,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle 200px at ${cursorX.get()}px ${cursorY.get()}px, transparent 0%, rgba(10, 10, 15, 0.2) 100%)`,
                }}
            />

            {/* Actual Cursor */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: -16,
                    top: -16,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    border: '2px solid var(--accent-primary)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: cursorX,
                    y: cursorY,
                    mixBlendMode: 'difference'
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                    borderColor: isHovering ? 'var(--accent-secondary)' : 'var(--accent-primary)'
                }}
            />
        </>
    );
};

export default CustomCursor;
