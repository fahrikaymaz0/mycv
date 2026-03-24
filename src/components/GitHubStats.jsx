import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Activity } from 'lucide-react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const GitHubStats = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await octokit.repos.listForUser({
                    username: 'fahrikaymaz0',
                    sort: 'updated',
                    per_page: 6
                });
                setRepos(data);
            } catch (err) {
                console.error("GitHub fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <section>
            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Github size={24} /> Live <span className="premium-gradient-text">GitHub</span> Activity
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {loading ? (
                    [1, 2, 3].map(i => <div key={i} className="glass-card" style={{ height: '120px', animate: 'pulse' }}></div>)
                ) : (
                    repos.map(repo => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                            className="glass-card"
                            style={{ padding: '1rem', textDecoration: 'none', color: 'white', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}
                        >
                            <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{repo.name}</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', height: '2.4rem', overflow: 'hidden', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                {repo.description || "No description provided."}
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.7rem', opacity: 0.6, marginTop: 'auto' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Star size={12} /> {repo.stargazers_count}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><GitFork size={12} /> {repo.forks_count}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Activity size={12} /> {repo.language || 'N/A'}</span>
                            </div>
                        </motion.a>
                    ))
                )}
            </div>
        </section>
    );
};

export default GitHubStats;
