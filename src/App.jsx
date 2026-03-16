import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import BackgroundEffects from './components/BackgroundEffects'
import DevConsole from './components/DevConsole'
import MatrixRain from './components/MatrixRain'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import GitHubStats from './components/GitHubStats'
import { LanguageProvider } from './context/LanguageContext'

function AppContent() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="app-container">
            <AnimatePresence>
                {loading && <PageLoader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <CustomCursor />
            <MatrixRain />
            <BackgroundEffects />
            <ScrollProgress />

            <Navbar />
            <main>
                <Hero />
                <DevConsole />
                <Skills />
                <GitHubStats />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <footer style={{ padding: '40px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Fahri Kaymaz. All rights reserved.
            </footer>
        </div>
    )
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

export default App
