import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Languages, Award } from 'lucide-react'

const Timeline = () => {
    return (
        <section id="education">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>

                {/* Education */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <GraduationCap className="premium-gradient-text" size={28} />
                        <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Eğitim</h2>
                    </div>

                    <div style={{ borderLeft: '1px solid var(--glass-border)', paddingLeft: '1.5rem', marginLeft: '0.75rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="timeline-item"
                            style={{ position: 'relative', marginBottom: '1.5rem' }}
                        >
                            <div className="timeline-dot" style={{ position: 'absolute', left: '-2.05rem', top: '0.4rem', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '0.05em' }}>DEVAM EDİYOR</span>
                            <h3 style={{ fontSize: '1.1rem', marginTop: '0.15rem', lineHeight: 1.3 }}>Bilgisayar Programcılığı (Ön Lisans)</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Üniversite Eğitimi</p>
                        </motion.div>
                    </div>
                </div>

                {/* Languages & Extras */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <Languages className="premium-gradient-text" size={28} />
                        <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Diller</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1rem' }}>Türkçe</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Ana Dil</p>
                            </div>
                            <div className="lang-bar" style={{ width: '80px', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--accent-gradient)' }}></motion.div>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1rem' }}>İngilizce</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Gelişmekte (Aktif Öğrenme)</p>
                            </div>
                            <div className="lang-bar" style={{ width: '80px', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--accent-gradient)' }}></motion.div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Award className="premium-gradient-text" size={20} />
                            <h3 style={{ fontSize: '1.1rem' }}>Ek Bilgiler</h3>
                        </div>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', paddingLeft: '1.2rem', lineHeight: 1.5 }}>
                            <li style={{ marginBottom: '0.4rem' }}>Yeni teknolojilere hızlı adaptasyon.</li>
                            <li style={{ marginBottom: '0.4rem' }}>Sistem tasarımı ve yazılım mimarisi tutkusu.</li>
                            <li>Sürekli gelişim odaklı bireysel projeler.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Timeline
