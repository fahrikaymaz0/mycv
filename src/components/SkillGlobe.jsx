import React, { useEffect, useRef } from 'react';

const SkillGlobe = () => {
    const containerRef = useRef(null);

    const skills = [
        'C#', '.NET', 'SQL', 'React', 'Vite', 'Python',
        'AI', 'Socket', 'TCP/IP', 'PWA', 'ERP', 'UX/UI',
        'Framer Motion', 'Git', 'API', 'Docker', 'Azure'
    ];

    useEffect(() => {
        // Basic CSS-based 3D Globe approximation for performance
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll('.globe-item');
        let angle = 0;

        const animate = () => {
            angle += 0.005;
            items.forEach((item, i) => {
                const phi = Math.acos(-1 + (2 * i) / items.length);
                const theta = Math.sqrt(items.length * Math.PI) * phi + angle;

                const x = 120 * Math.cos(theta) * Math.sin(phi);
                const y = 120 * Math.sin(theta) * Math.sin(phi);
                const z = 120 * Math.cos(phi);

                const scale = (z + 200) / 300;
                const opacity = (z + 120) / 240;

                item.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                item.style.opacity = opacity;
                item.style.zIndex = Math.floor(z);
            });
            requestAnimationFrame(animate);
        };

        const animReq = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animReq);
    }, []);

    return (
        <div style={{ perspective: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '100%' }}>
            <div ref={containerRef} style={{ position: 'relative', width: '1px', height: '1px', transformStyle: 'preserve-3d' }}>
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="globe-item"
                        style={{
                            position: 'absolute',
                            whiteSpace: 'nowrap',
                            fontSize: '0.8rem',
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
