import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const THEME_STORAGE_KEY = 'portfolio-theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === 'light') {
      return false;
    }

    return true;
  });

  useEffect(() => {
    const nextTheme = isDarkMode ? 'dark' : 'light';

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }, [isDarkMode]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <button
        type="button"
        className="theme-fab"
        onClick={() => setIsDarkMode((current) => !current)}
        aria-label={isDarkMode ? '다크모드 비활성화' : '다크모드 활성화'}
        title={isDarkMode ? '다크모드 비활성화' : '다크모드 활성화'}
      >
        {isDarkMode ? '라이트 모드' : '다크 모드'}
      </button>
    </>
  );
}

export default App;
