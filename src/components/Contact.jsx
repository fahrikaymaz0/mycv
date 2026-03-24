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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                        {t('contact.title')} <span className="premium-gradient-text">{t('contact.titleSpan')}</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '450px' }}>
                        {t('contact.desc')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="glass-card" style={{ padding: '0.6rem', color: 'var(--accent-primary)' }}><Mail size={20} /></div>
                            <div>
                                <p style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.1rem' }}>EMAIL</p>
                                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>1.fahri.kaymaz.1@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '3rem' }}>
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
                                style={{ padding: '0.8rem', color: 'var(--text-primary)', display: 'flex' }}
                            >
                                <social.Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{ textAlign: 'center', padding: '1.5rem 0' }}
                            >
                                <CheckCircle size={48} style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{t('contact.successTitle')}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{t('contact.successDesc')}</p>
                                <button
                                    onClick={() => { setStatus('idle'); }}
                                    className="glass-card"
                                    style={{ padding: '0.7rem 1.75rem', color: 'white', background: 'var(--accent-gradient)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
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
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder={t('contact.placeholderName')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.8rem', borderRadius: '10px', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder={t('contact.placeholderEmail')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.8rem', borderRadius: '10px', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{t('contact.message')}</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder={t('contact.placeholderMessage')}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '0.8rem', borderRadius: '10px', color: 'white', outline: 'none', resize: 'none', fontSize: '0.9rem' }}
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <p style={{ color: '#ef4444', fontSize: '0.8rem' }}>! {errorMessage}</p>
                                )}

                                <button
                                    className="glass-card"
                                    disabled={status === 'submitting'}
                                    style={{
                                        padding: '1rem',
                                        background: 'var(--accent-gradient)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '10px',
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.6rem',
                                        cursor: 'pointer',
                                        opacity: status === 'submitting' ? 0.7 : 1
                                    }}
                                >
                                    {status === 'submitting' ? t('contact.sending') : t('contact.send')} <Send size={16} />
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
