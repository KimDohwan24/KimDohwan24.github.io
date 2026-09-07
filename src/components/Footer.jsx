import { useState, useEffect } from 'react';
import { Github, Mail, BookOpen, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) return undefined;
        const timer = setTimeout(() => setIsCopied(false), 2200);
        return () => clearTimeout(timer);
    }, [isCopied]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setIsCopied(true);
        } catch {
            window.alert(`이메일: ${personalInfo.email}`);
        }
    };

    return (
        <footer className="site-footer" id="contact" aria-label="연락처 및 저작권 정보">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-contact-block">
                        <h2 className="footer-heading">연락처</h2>
                        <p className="footer-lead">
                            새로운 문제에 도전하고 팀과 함께 성장할 준비가 되어 있습니다.<br />
                            문의 사항이나 제안이 있으시다면 편하게 연락해 주세요.
                        </p>

                        <div className="footer-action-buttons">
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="btn btn-secondary footer-btn"
                                aria-label={`이메일 복사: ${personalInfo.email}`}
                                title="이메일 복사"
                            >
                                {isCopied ? <Check size={16} color="var(--accent)" /> : <Mail size={16} />}
                                <span>{isCopied ? '이메일이 복사되었습니다' : personalInfo.email}</span>
                            </button>

                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary footer-btn"
                                aria-label="GitHub 저장소 방문 (새 창 열림)"
                            >
                                <Github size={16} aria-hidden="true" />
                                <span>GitHub</span>
                                <ExternalLink size={13} aria-hidden="true" />
                            </a>

                            <a
                                href={personalInfo.blog}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary footer-btn"
                                aria-label="기술 블로그 방문 (새 창 열림)"
                            >
                                <BookOpen size={16} aria-hidden="true" />
                                <span>블로그</span>
                                <ExternalLink size={13} aria-hidden="true" />
                            </a>
                        </div>

                        <div className="sr-only" aria-live="polite">
                            {isCopied ? '이메일 주소가 클립보드에 복사되었습니다.' : ''}
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
