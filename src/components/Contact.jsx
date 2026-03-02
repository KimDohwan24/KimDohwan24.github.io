import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlassCard from './ui/GlassCard';
import './Contact.css';

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();

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
                        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                            <Mail size={20} />
                            메일 보내기
                        </a>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
