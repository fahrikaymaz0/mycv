import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2, pointerEvents: 'none', overflow: 'hidden' }}>
            {/* Noise Texture Layer */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                opacity: 0.05,
                mixBlendMode: 'overlay'
            }}></div>

            {/* Dynamic Glass Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    borderRadius: '50%'
                }}
            />

            <motion.div
                animate={{
                    x: [0, -80, 50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '15%',
                    width: '35vw',
                    height: '35vw',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%'
                }}
            />

            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, transparent 0%, var(--bg-dark) 90%)',
                }}
            />
        </div>
    );
};

export default BackgroundEffects;
