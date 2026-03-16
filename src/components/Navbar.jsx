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
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 1000,
                padding: '0.75rem 2rem',
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
                style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.1em' }}
            >
                FAHRİ <span style={{ color: 'var(--accent-primary)' }}>K.</span>
            </motion.div>

            {/* Desktop Menu */}
            <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ y: -2 }}
                        style={{
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            opacity: 0.7,
                            transition: 'opacity 0.2s'
                        }}
                        className="nav-link"
                    >
                        {link.name}
                    </motion.a>
                ))}

                <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--glass-border)' }}></div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { toggleLanguage(); }}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Globe size={18} /> <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{lang.toUpperCase()}</span>
                    </motion.button>

                </div>
            </div>

            {/* Mobile Toggle */}
            <button
                className="mobile-toggle"
                onClick={() => { setIsOpen(!isOpen); }}
                style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '1rem',
                            padding: '2rem',
                            background: 'rgba(10, 10, 15, 0.95)',
                            borderRadius: '24px',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => { setIsOpen(false); }}
                                style={{ textDecoration: 'none', color: 'white', fontSize: '1.1rem' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                            <button onClick={() => { toggleLanguage(); }} style={{ background: 'none', border: 'none', color: 'white' }}><Globe /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
        }
        @media (max-width: 768px) {
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    )
}

export default Navbar
