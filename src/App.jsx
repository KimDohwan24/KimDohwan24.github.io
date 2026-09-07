import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const THEME_STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
    try {
        const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
        }
    } catch {
        // Storage access blocked or restricted (e.g. private browsing)
    }
    // Default: Light Theme
    return 'light';
}

function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch {
            // Storage write restricted or quota exceeded
        }
    }, [theme]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="site-layout">
            <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
            <main id="main-content" tabIndex={-1}>
                <Hero />
                <Projects />
                <Experience />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}

export default App;
