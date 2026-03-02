import { Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} aria-label="이메일">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
