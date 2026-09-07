import { useState, useEffect } from 'react';
import { ArrowDown, Github, BookOpen, Mail, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
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
            window.alert(`이메일 주소: ${personalInfo.email}`);
        }
    };

    const heroTitleLines = personalInfo.heroTitle.split('\n');

    return (
        <section className="hero-section" id="hero" aria-labelledby="hero-title">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-meta">
                        <span className="hero-role-badge">백엔드 개발자</span>
                    </div>

                    <h1 id="hero-title" className="hero-title">
                        {heroTitleLines.map((line, index) => (
                            <span key={`${line}-${index}`} className="hero-title-line">
                                {line}
                            </span>
                        ))}
                    </h1>

                    {personalInfo.heroDescription && (
                        <p className="hero-description">
                            {personalInfo.heroDescription}
                        </p>
                    )}

                    {/* Quick CTA and Link Buttons */}
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            <span>프로젝트 보기</span>
                            <ArrowDown size={16} aria-hidden="true" />
                        </a>

                        <button
                            type="button"
                            className="btn btn-secondary email-copy-btn"
                            onClick={handleCopyEmail}
                            aria-label={`이메일 주소 복사: ${personalInfo.email}`}
                            title="클릭하여 이메일 주소 복사"
                        >
                            {isCopied ? <Check size={16} color="var(--accent)" /> : <Mail size={16} />}
                            <span>{isCopied ? '이메일이 복사되었습니다' : personalInfo.email}</span>
                        </button>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            aria-label="GitHub 프로필 방문 (새 창 열림)"
                        >
                            <Github size={16} aria-hidden="true" />
                            <span>GitHub</span>
                            <ExternalLink size={13} aria-hidden="true" className="external-icon" />
                        </a>

                        <a
                            href={personalInfo.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            aria-label="TIL 기술 블로그 방문 (새 창 열림)"
                        >
                            <BookOpen size={16} aria-hidden="true" />
                            <span>블로그</span>
                            <ExternalLink size={13} aria-hidden="true" className="external-icon" />
                        </a>
                    </div>

                    <div className="sr-only" aria-live="polite">
                        {isCopied ? '이메일 주소가 클립보드에 복사되었습니다.' : ''}
                    </div>
                </div>
            </div>
        </section>
    );
}
