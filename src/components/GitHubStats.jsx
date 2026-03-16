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
            <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Github /> Live <span className="premium-gradient-text">GitHub</span> Activity
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {loading ? (
                    [1, 2, 3].map(i => <div key={i} className="glass-card" style={{ height: '150px', animate: 'pulse' }}></div>)
                ) : (
                    repos.map(repo => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                            className="glass-card"
                            style={{ padding: '1.5rem', textDecoration: 'none', color: 'white', border: '1px solid var(--glass-border)' }}
                        >
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>{repo.name}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', height: '2.5rem', overflow: 'hidden' }}>
                                {repo.description || "No description provided."}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', opacity: 0.6 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Star size={14} /> {repo.stargazers_count}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><GitFork size={14} /> {repo.forks_count}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Activity size={14} /> {repo.language}</span>
                            </div>
                        </motion.a>
                    ))
                )}
            </div>
        </section>
    );
};

export default GitHubStats;
