import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Languages, Award } from 'lucide-react'

const Timeline = () => {
    return (
        <section id="education">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Education */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <GraduationCap className="premium-gradient-text" size={32} />
                        <h2 style={{ fontSize: '2rem' }}>Eğitim</h2>
                    </div>

                    <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', marginBottom: '2rem' }}
                        >
                            <div style={{ position: 'absolute', left: '-2.65rem', top: '0.5rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>DEVAM EDİYOR</span>
                            <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>Bilgisayar Programcılığı (Ön Lisans)</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Üniversite Eğitimi</p>
                        </motion.div>
                    </div>
                </div>

                {/* Languages & Extras */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <Languages className="premium-gradient-text" size={32} />
                        <h2 style={{ fontSize: '2rem' }}>Diller</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem' }}>Türkçe</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Ana Dil</p>
                            </div>
                            <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--accent-gradient)' }}></motion.div>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem' }}>İngilizce</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Gelişmekte (Aktif Öğrenme)</p>
                            </div>
                            <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--accent-gradient)' }}></motion.div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award className="premium-gradient-text" size={24} />
                            <h3 style={{ fontSize: '1.25rem' }}>Ek Bilgiler</h3>
                        </div>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Yeni teknolojilere hızlı adaptasyon.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Sistem tasarımı ve yazılım mimarisi tutkusu.</li>
                            <li>Sürekli gelişim odaklı bireysel projeler.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Timeline
