import React from 'react'
import { motion } from 'framer-motion'
import { Database, Layout, Server, Cpu, Globe, Rocket } from 'lucide-react'
import SkillGlobe from './SkillGlobe.jsx'

const skillGroups = [
    {
        category: "Modern Web & PWA",
        icon: <Globe size={24} />,
        skills: ["NavoraApp PWA Mimari", "React & Vite", "Progressive Web Apps", "Service Workers"]
    },
    {
        category: "AI & Sağlık Teknolojileri",
        icon: <Cpu size={24} />,
        skills: ["AI Calorie Analysis", "Yapay Zeka Entegrasyonu", "Health Data Management", "Smart Planning"]
    },
    {
        category: "Programlama & .NET",
        icon: <Server size={18} />,
        skills: ["C#", ".NET Framework / Core", "Asenkron Programlama", "System Architecture"]
    },
    {
        category: "Veritabanı",
        icon: <Database size={18} />,
        skills: ["SQL Server", "Microsoft Access", "DB Design", "Data Transformation"]
    }
]

const Skills = () => {

    return (
        <section id="skills">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Teknik <span className="premium-gradient-text">Yetenekler</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Fikirleri gerçeğe dönüştüren teknoloji yığınım.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {skillGroups.map((group, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                                    {group.icon}
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{group.category}</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {group.skills.map(skill => (
                                        <li key={skill} style={{ fontSize: '0.9rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <SkillGlobe />
                </div>
            </div>
        </section>
    )
}

export default Skills
