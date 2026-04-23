import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './Skills.css';

export default function Skills() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="container">
                <div className={`skills-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="Tech Stack" title="기술 스택" />

                    <div className="skills-grid">
                        {skills.map((group, gi) => (
                            <GlassCard key={group.category} delay={gi * 100}>
                                <h3 className="skill-category">{group.category}</h3>
                                <div className="skill-badges">
                                    {group.items.map((skill) => (
                                        <div key={skill.name} className="skill-badge">
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
