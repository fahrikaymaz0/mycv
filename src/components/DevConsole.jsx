import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Cpu, MapPin, Code } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const DevConsole = () => {
    const { t } = useLanguage();
    const [stats, setStats] = useState({
        uptime: '00:00:00',
        memory: '0MB',
        cpu: '0%'
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const uptime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            const memory = `${Math.floor(Math.random() * 50) + 120}MB`;
            const cpu = `${Math.floor(Math.random() * 15) + 5}%`;
            setStats({ uptime, memory, cpu });
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <section style={{ padding: '0 20px 100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '2rem',
                    fontFamily: 'monospace',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <span>{t('console.title')}</span>
                        <span>[STABLE_BUILD]</span>
                    </div>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Monitor size={20} className="premium-gradient-text" />
                        <div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t('console.uptime')}</p>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--accent-primary)' }}>{stats.uptime}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <MapPin size={20} className="premium-gradient-text" />
                        <div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t('console.location')}</p>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>TURKEY</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Code size={20} className="premium-gradient-text" />
                        <div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t('console.ide')}</p>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>VS 2022 / VS Code</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Cpu size={20} className="premium-gradient-text" />
                        <div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t('console.focus')}</p>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>C# / AI / .NET</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '2.5rem', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)' }}></div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', fontSize: '0.75rem', opacity: 0.4 }}>
                    <span>NETWORK_LATENCY: 12ms</span>
                    <span>API_STATUS: ACTIVE</span>
                    <span>DATABASE: SQL_SERVER_CONNECTED</span>
                </div>
            </motion.div>
        </section>
    )
}

export default DevConsole
