import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Code2, Terminal, Cpu, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const MagneticLink = ({ children, href, className, style }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const tx = useSpring(x, springConfig);
    const ty = useSpring(y, springConfig);

    const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(clientX - centerX);
        y.set(clientY - centerY);
    }

    const onMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            ref={ref}
            href={href}
            className={className}
            style={{ ...style, x: tx, y: ty, position: 'relative' }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.a>
    )
}

const TextScramble = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let frame = 0;
        const interval = setInterval(() => {
            setDisplayText(prev => {
                return text.split('').map((char, i) => {
                    if (i < frame / 3) return char;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
            });
            frame++;
            if (frame > text.length * 3) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="hero-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', zIndex: 1, width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '1.5rem', opacity: 0.8 }}
                    >
                        {t('hero.subtitle')}
                    </motion.span>

                    <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 6rem)', lineHeight: 0.9, marginBottom: '1.5rem', fontWeight: 800 }}>
                        {t('hero.title1')} <span className="premium-gradient-text"><TextScramble text={t('hero.title2')} /></span><br />
                        {t('hero.title3')}
                    </h1>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        {t('hero.desc')}
                    </p>
                </motion.div>

                <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                    <MagneticLink
                        href="#projects"
                        className="glass-card"
                        style={{ padding: '0.8rem 2rem', textDecoration: 'none', color: 'white', fontWeight: 700, background: 'var(--accent-gradient)', fontSize: '0.95rem', border: 'none' }}
                    >
                        {t('hero.explore')} <ChevronRight size={18} style={{ verticalAlign: 'middle', marginLeft: '0.5rem' }} />
                    </MagneticLink>

                    <MagneticLink
                        href="#contact"
                        className="glass-card"
                        style={{ padding: '0.8rem 2rem', textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: '0.95rem' }}
                    >
                        {t('hero.contact')}
                    </MagneticLink>
                </div>

                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.4, flexWrap: 'wrap' }}>
                    {[{ Icon: Code2, label: ".NET Core" }, { Icon: Terminal, label: "Advanced SQL" }, { Icon: Cpu, label: "AI & PWA" }].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <item.Icon size={16} /> <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
