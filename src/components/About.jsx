import { User } from 'lucide-react';
import { personalInfo, projects, skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './About.css';

export default function About() {
    const { ref, isVisible } = useScrollReveal();
    const totalSkills = skills.reduce((total, category) => total + category.items.length, 0);

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <div className={`about-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="About Me" title="변화 속에서 더 나은 경험을 만듭니다!" />

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
                                    <span className="stat-number">{projects.length}</span>
                                    <span className="stat-label">프로젝트</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">{totalSkills}</span>
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
