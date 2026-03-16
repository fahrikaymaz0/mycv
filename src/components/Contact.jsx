import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Mail, MapPin, Linkedin, Instagram, Github, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/1.fahri.kaymaz.1@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setErrorMessage(t('contact.errorMsg') || "Error sending message.");
                setStatus('error');
            }
        } catch (err) {
            setErrorMessage(t('contact.connError') || "Connection error.");
            setStatus('error');
        }
    }

    return (
        <section id="contact">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        {t('contact.title')} <span className="premium-gradient-text">{t('contact.titleSpan')}</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '450px' }}>
                        {t('contact.desc')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}><Mail size={24} /></div>
                            <div>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.2rem' }}>EMAIL</p>
                                <p style={{ fontWeight: 600 }}>1.fahri.kaymaz.1@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '4rem' }}>
                        {[
                            { Icon: Github, href: "https://github.com/fahrikaymaz0" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/fahri-kaymaz-68b749376/" },
                            { Icon: Instagram, href: "https://www.instagram.com/fahrikymz/" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, background: 'var(--accent-primary)', color: 'white' }}
                                className="glass-card"
                                style={{ padding: '1rem', color: 'var(--text-primary)', display: 'flex' }}
                            >
                                <social.Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{ textAlign: 'center', padding: '2rem 0' }}
                            >
                                <CheckCircle size={64} style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('contact.successTitle')}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{t('contact.successDesc')}</p>
                                <button
                                    onClick={() => { setStatus('idle'); }}
                                    className="glass-card"
                                    style={{ padding: '0.75rem 2rem', color: 'white', background: 'var(--accent-gradient)', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                                >
                                    {t('contact.newMsg')}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder={t('contact.placeholderName')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder={t('contact.placeholderEmail')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.message')}</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder={t('contact.placeholderMessage')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none' }}
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>! {errorMessage}</p>
                                )}

                                <button
                                    className="glass-card"
                                    disabled={status === 'submitting'}
                                    style={{
                                        padding: '1.25rem',
                                        background: 'var(--accent-gradient)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.75rem',
                                        cursor: 'pointer',
                                        opacity: status === 'submitting' ? 0.7 : 1
                                    }}
                                >
                                    {status === 'submitting' ? t('contact.sending') : t('contact.send')} <Send size={18} />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
