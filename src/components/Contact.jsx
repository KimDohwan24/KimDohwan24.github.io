import { Mail, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlassCard from './ui/GlassCard';
import './Contact.css';

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();
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
        <section className="section" id="contact" ref={ref}>
            <div className="container">
                <div className={`contact-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <GlassCard className="contact-card">
                        <div className="contact-icon">
                            <Send size={32} color="var(--accent-1)" />
                        </div>
                        <h2>함께 일할 준비가 되셨나요?</h2>
                        <p>
                            새로운 프로젝트 제안이나 궁금하신 점이 있다면 언제든 연락 주세요.
                            <br />
                            빠른 시간 내에 답변 드리겠습니다.
                        </p>
                        <button type="button" className="btn btn-primary" onClick={handleCopyEmail}>
                            <Mail size={20} />
                            이메일 복사
                        </button>
                        <p className={`contact-copy-feedback ${isCopied ? 'visible' : ''}`} aria-live="polite">
                            이메일이 복사되었습니다.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
