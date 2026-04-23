import { Github, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isCopied]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setIsCopied(true);
        } catch (error) {
            window.alert('이메일 복사에 실패했습니다. 잠시 후 다시 시도해 주세요.');
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <button type="button" onClick={handleCopyEmail} aria-label="이메일 복사" title="이메일 복사">
                            <Mail size={20} />
                        </button>
                    </div>
                    <p className={`footer-copy-feedback ${isCopied ? 'visible' : ''}`} aria-live="polite">
                        이메일이 복사되었습니다.
                    </p>
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
