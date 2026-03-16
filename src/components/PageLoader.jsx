import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "circIn" }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10000,
                backgroundColor: '#0a0a0f',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '2rem' }}
            >
                <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                    Fahri <span style={{ color: 'var(--accent-primary)' }}>Kaymaz</span>
                </h1>
            </motion.div>

            <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    style={{ width: `${percent}%`, height: '100%', background: 'var(--accent-primary)', position: 'absolute', left: 0, top: 0 }}
                />
            </div>

            <motion.span
                style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.5, fontFamily: 'monospace' }}
            >
                {percent}% INITIALIZING_SYSTEM
            </motion.span>
        </motion.div>
    );
};

export default PageLoader;
