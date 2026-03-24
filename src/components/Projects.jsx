import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Layers, MessageSquare, Zap, FormInput, Cpu, Rocket, Sword, ChevronDown, ChevronUp, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit();

const ProjectCard = ({ project, idx }) => {
    const { t } = useLanguage();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const isLive = project.link || project.homepage;
    const projectTitle = project.isFromGithub ? project.name : t(`projects.list.${project.id}.title`);
    const projectDesc = project.isFromGithub ? project.description : t(`projects.list.${project.id}.desc`);
    const projectLink = project.link || project.homepage;

    const CardContent = (
        <>
            <div style={{ transform: "translateZ(50px)" }}>
                {isLive && (
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        color: project.color || 'var(--accent-primary)',
                        background: `${project.color || '#3b82f6'}11`,
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                    }}>
                        {t('projects.live')}
                    </div>
                )}

                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${(project.color || '#3b82f6')}22, ${(project.color || '#3b82f6')}44)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.color || '#3b82f6',
                    marginBottom: '1.5rem',
                    border: `1px solid ${(project.color || '#3b82f6')}33`
                }}>
                    {project.icon || <Github size={24} />}
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{projectTitle}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>{projectDesc || "No description provided."}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {(project.tags || []).map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 600, color: project.color || '#3b82f6', background: `${project.color || '#3b82f6'}11`, padding: '0.2rem 0.6rem', borderRadius: '4px', border: `1px solid ${(project.color || '#3b82f6')}22` }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: project.color || '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                        {projectLink ? (
                            <>
                                {t('projects.inspect')} <ExternalLink size={14} />
                            </>
                        ) : (
                            <>
                                {t('projects.details')} <ExternalLink size={14} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

    const CardWrapper = ({ children }) => {
        if (projectLink) {
            return (
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                    {children}
                </a>
            );
        }
        return <>{children}</>;
    };

    return (
        <CardWrapper>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                className="glass-card"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: idx === 0 ? `1px solid ${(project.color || '#3b82f6')}44` : '1px solid var(--glass-border)',
                    cursor: projectLink ? 'pointer' : 'default'
                }}
            >
                {CardContent}
            </motion.div>
        </CardWrapper>
    );
};

const staticProjects = [
    {
        id: "tamahagane",
        icon: <Sword size={24} />,
        tags: ["Samurai Aesthetic", "Framer Motion", "High Fidelity"],
        color: "#ff4d4d",
        link: "https://fahrikaymaz0.github.io/tamahagane-forge/"
    },
    {
        id: "navora",
        icon: <Rocket size={24} />,
        tags: ["PWA", "AI Entegrasyonu", "Health-Tech"],
        color: "#f59e0b",
        link: "https://www.navoraapp.com/"
    },
    {
        id: "advisor",
        icon: <Zap size={24} />,
        tags: ["React", "Finance", "Web Design"],
        color: "#10b981",
        link: "https://fahrikaymaz0.github.io/executive-finance-advisor/"
    },
    {
        id: "sovereign",
        icon: <Layers size={24} />,
        tags: ["4K Design", "Luxury", "React"],
        color: "#ffffff",
        link: "https://fahrikaymaz0.github.io/THE-SOVEREIGN/"
    },
    {
        id: "erp",
        icon: <Layers size={24} />,
        tags: ["C#", ".NET", "SQL Server"],
        color: "#3b82f6"
    },
    {
        id: "ai_infra",
        icon: <Cpu size={24} />,
        tags: ["Python", "API", "C# Entegrasyon"],
        color: "#8b5cf6"
    },
    {
        id: "socket",
        icon: <MessageSquare size={24} />,
        tags: ["Socket", "TCP/IP", "C#"],
        color: "#06b6d4"
    },
    {
        id: "wizard",
        icon: <FormInput size={24} />,
        tags: ["HTML", "CSS", "UX/UI"],
        color: "#ec4899"
    }
]

const Projects = () => {
    const { t } = useLanguage();
    const [showAll, setShowAll] = useState(false);
    const [allProjects, setAllProjects] = useState(staticProjects);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await octokit.repos.listForUser({
                    username: 'fahrikaymaz0',
                    sort: 'updated',
                    per_page: 20
                });

                // Filter for repos with a homepage URL that are not already in staticProjects
                const dynamicProjects = data
                    .filter(repo => repo.homepage && !staticProjects.some(sp => sp.link === repo.homepage || repo.name.toLowerCase().includes(sp.id)))
                    .map(repo => ({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        tags: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : [repo.language || "N/A"],
                        color: "#3b82f6", // Default color for dynamic projects
                        homepage: repo.homepage,
                        isFromGithub: true
                    }));

                setAllProjects([...staticProjects, ...dynamicProjects]);
            } catch (err) {
                console.error("Error fetching dynamic projects:", err);
            }
        };

        fetchProjects();
    }, []);

    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

    return (
        <section id="projects">
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('projects.title')} <span className="premium-gradient-text">{t('projects.titleSpan')}</span></h2>
                <p style={{ color: 'var(--text-secondary)' }}>{t('projects.subtitle')}</p>
            </div>

            <motion.div 
                layout
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', perspective: "1000px" }}
            >
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((project, idx) => (
                        <motion.div
                            key={project.id || project.name}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                        >
                            <ProjectCard project={project} idx={idx} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {allProjects.length > 6 && (
                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAll(!showAll)}
                        className="glass-card"
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {showAll ? (
                            <>
                                {t('projects.showLess')} <ChevronUp size={20} />
                            </>
                        ) : (
                            <>
                                {t('projects.showMore')} <ChevronDown size={20} />
                            </>
                        )}
                    </motion.button>
                </div>
            )}
        </section>
    )
}

export default Projects
