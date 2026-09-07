import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
    return (
        <section className="section" id="skills" aria-labelledby="skills-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="skills-title" className="section-title">
                        기술 스택
                    </h2>
                    <p className="section-subtitle">
                        실제 프로젝트에서 문제를 해결하고 시스템을 구축하는 데 활용한 기술입니다.
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((group) => (
                        <article key={group.category} className="skill-card">
                            <div className="skill-card-header">
                                <h3 className="skill-category-title">{group.category}</h3>
                                {group.description && (
                                    <p className="skill-category-desc">{group.description}</p>
                                )}
                            </div>

                            <div className="skill-badges">
                                {group.items.map((skillName) => (
                                    <span key={skillName} className="skill-badge">
                                        {skillName}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
