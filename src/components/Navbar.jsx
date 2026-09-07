import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Navbar.css';

export default function Navbar({ theme, onToggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Screen resize: close mobile menu when screen exceeds mobile breakpoint (768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu on ESC key and return focus to toggle button
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                toggleButtonRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const isLight = theme === 'light';

    return (
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
            <a href="#main-content" className="skip-link">
                본문 바로가기
            </a>

            <div className="container nav-container">
                <a href="#hero" className="nav-brand" onClick={handleLinkClick}>
                    <span className="brand-name">{personalInfo.name}</span>
                    <span className="brand-role">백엔드</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="nav-desktop" aria-label="주요 내비게이션">
                    <ul className="nav-list">
                        <li>
                            <a href="#projects" className="nav-link">
                                프로젝트
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="nav-link">
                                경력
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link">
                                기술 스택
                            </a>
                        </li>
                        <li>
                            <a
                                href={personalInfo.blog}
                                className="nav-link nav-link--external"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="블로그 (새 창에서 열림)"
                            >
                                <span>블로그</span>
                                <ExternalLink size={13} aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href={personalInfo.github}
                                className="nav-link nav-link--external"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub 저장소 (새 창에서 열림)"
                            >
                                <span>GitHub</span>
                                <ExternalLink size={13} aria-hidden="true" />
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle Button (Desktop) */}
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={onToggleTheme}
                        aria-label={isLight ? '다크 모드로 전환' : '라이트 모드로 전환'}
                        title={isLight ? '다크 모드로 전환' : '라이트 모드로 전환'}
                    >
                        {isLight ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
                        <span className="sr-only">{isLight ? '다크 모드로 전환' : '라이트 모드로 전환'}</span>
                    </button>
                </nav>

                {/* Mobile Right Controls (Theme + Hamburger) */}
                <div className="nav-mobile-controls">
                    <button
                        type="button"
                        className="theme-toggle-btn theme-toggle-btn--mobile"
                        onClick={onToggleTheme}
                        aria-label={isLight ? '다크 모드로 전환' : '라이트 모드로 전환'}
                        title={isLight ? '다크 모드로 전환' : '라이트 모드로 전환'}
                    >
                        {isLight ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
                    </button>

                    <button
                        ref={toggleButtonRef}
                        type="button"
                        className="nav-toggle"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
                    >
                        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <nav
                id="mobile-nav"
                className={`nav-mobile ${isOpen ? 'nav-mobile--open' : ''}`}
                aria-label="모바일 내비게이션"
                hidden={!isOpen}
            >
                <div className="container nav-mobile-container">
                    <ul className="nav-mobile-list">
                        <li>
                            <a href="#projects" className="nav-mobile-link" onClick={handleLinkClick}>
                                프로젝트
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="nav-mobile-link" onClick={handleLinkClick}>
                                경력
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-mobile-link" onClick={handleLinkClick}>
                                기술 스택
                            </a>
                        </li>
                        <li>
                            <a
                                href={personalInfo.blog}
                                className="nav-mobile-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                aria-label="블로그 (새 창에서 열림)"
                            >
                                <span>블로그</span>
                                <ExternalLink size={14} aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href={personalInfo.github}
                                className="nav-mobile-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                aria-label="GitHub 저장소 (새 창에서 열림)"
                            >
                                <span>GitHub</span>
                                <ExternalLink size={14} aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
