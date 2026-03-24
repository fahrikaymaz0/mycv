import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Volume2, VolumeX } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { lang, t, toggleLanguage } = useLanguage()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: t('nav.home'), href: "#home" },
        { name: t('nav.skills'), href: "#skills" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.timeline'), href: "#timeline" },
        { name: t('nav.contact'), href: "#contact" },
    ]

    return (
        <nav
            className={`glass-card ${scrolled ? 'nav-scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '94%',
                maxWidth: '1200px',
                zIndex: 1000,
                padding: '0.6rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '100px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
                backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'rgba(255, 255, 255, 0.03)',
                border: scrolled ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid var(--glass-border)'
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.05em' }}
            >
                FAHRİ <span style={{ color: 'var(--accent-primary)' }}>K.</span>
            </motion.div>

            {/* Desktop Menu */}
            <div style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ y: -2 }}
                        style={{
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            opacity: 0.7,
                            transition: 'opacity 0.2s'
                        }}
                        className="nav-link"
                    >
                        {link.name}
                    </motion.a>
                ))}

                <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--glass-border)' }}></div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { toggleLanguage(); }}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                        <Globe size={16} /> <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{lang.toUpperCase()}</span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Toggle */}
            <button
                className="mobile-toggle"
                onClick={() => { setIsOpen(!isOpen); }}
                style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        style={{
                            position: 'absolute',
                            top: '110%',
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'rgba(10, 10, 15, 0.98)',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            alignItems: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => { setIsOpen(false); }}
                                style={{ textDecoration: 'none', color: 'white', fontSize: '1rem', fontWeight: 600 }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)' }}></div>
                        <button 
                            onClick={() => { toggleLanguage(); setIsOpen(false); }} 
                            style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700 }}
                        >
                            <Globe size={18} /> {lang === 'tr' ? 'ENGLISH' : 'TÜRKÇE'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 901px) {
                    .desktop-menu { display: flex !important; }
                }
                @media (max-width: 900px) {
                    .mobile-toggle { display: block !important; }
                }
                .nav-scrolled {
                    top: 0.75rem !important;
                    width: 96% !important;
                }
            `}</style>
        </nav>
    )
}

export default Navbar
