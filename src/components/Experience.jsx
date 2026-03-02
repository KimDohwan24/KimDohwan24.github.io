import { experiences } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import './Experience.css';

export default function Experience() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="section" id="experience" ref={ref}>
            <div className="container">
                <div className={`exp-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="Career" title="경력 사항" />

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item" style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                    <span className="timeline-period">{exp.period}</span>
                                    <h3>{exp.title}</h3>
                                    <span className="timeline-company">{exp.company}</span>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
