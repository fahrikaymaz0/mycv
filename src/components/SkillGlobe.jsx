import React, { useEffect, useRef, useState } from 'react';

const SkillGlobe = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const skills = [
        'C#', '.NET', 'SQL', 'React', 'Vite', 'Python',
        'AI', 'Socket', 'TCP/IP', 'PWA', 'ERP', 'UX/UI',
        'Framer Motion', 'Git', 'API', 'Docker', 'Azure'
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll('.globe-item');
        let angle = 0;
        const radius = isMobile ? 80 : 120; // Smaller radius on mobile

        const animate = () => {
            angle += 0.005;
            items.forEach((item, i) => {
                const phi = Math.acos(-1 + (2 * i) / items.length);
                const theta = Math.sqrt(items.length * Math.PI) * phi + angle;

                const x = radius * Math.cos(theta) * Math.sin(phi);
                const y = radius * Math.sin(theta) * Math.sin(phi);
                const z = radius * Math.cos(phi);

                const scale = (z + 200) / 300;
                const opacity = (z + 120) / 240;

                item.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                item.style.opacity = opacity;
                item.style.zIndex = Math.floor(z);
            });
            requestAnimationFrame(animate);
        };

        const animReq = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(animReq);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    return (
        <div style={{ perspective: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: isMobile ? '220px' : '300px', width: '100%', overflow: 'hidden' }}>
            <div ref={containerRef} style={{ position: 'relative', width: '1px', height: '1px', transformStyle: 'preserve-3d' }}>
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="globe-item"
                        style={{
                            position: 'absolute',
                            whiteSpace: 'nowrap',
                            fontSize: isMobile ? '0.7rem' : '0.8rem',
                            fontWeight: 700,
                            color: 'var(--accent-primary)',
                            textShadow: '0 0 10px rgba(59,130,246,0.5)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillGlobe;
