import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
        { href: personalInfo.blog || '#', label: 'Blog', isExternal: true },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="nav-logo gradient-text">
                    {personalInfo.name}
                </a>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a 
                            key={link.label} 
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="nav-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="메뉴 열기"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`nav-mobile ${isOpen ? 'nav-mobile--open' : ''}`}>
                {navLinks.map((link) => (
                    <a 
                        key={link.label} 
                        href={link.href} 
                        onClick={link.isExternal ? undefined : handleLinkClick}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
