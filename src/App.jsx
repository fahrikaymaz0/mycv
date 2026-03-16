import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import BackgroundEffects from './components/BackgroundEffects.jsx'
import DevConsole from './components/DevConsole.jsx'
import MatrixRain from './components/MatrixRain.jsx'
import PageLoader from './components/PageLoader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import GitHubStats from './components/GitHubStats.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

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
