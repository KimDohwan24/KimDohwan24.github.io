import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './About.css';

export default function About() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <div className={`about-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="About Me" title="안녕하세요!" />

                    <div className="about-grid">
                        {/* Profile Card */}
                        <GlassCard className="about-profile">
                            <div className="about-avatar">
                                <User size={48} color="var(--accent-1)" />
                            </div>
                            <h3>{personalInfo.name}</h3>
                            <span className="about-role">{personalInfo.role}</span>
                        </GlassCard>

                        {/* Description */}
                        <div className="about-desc">
                            <p>{personalInfo.aboutDescription}</p>

                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">년 경력</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">프로젝트</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">기술 스택</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
