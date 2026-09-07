import { experiences } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
    return (
        <section className="section" id="experience" aria-labelledby="experience-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="experience-title" className="section-title">
                        경력 및 교육
                    </h2>
                    <p className="section-subtitle">
                        실무 경험과 전공 교육 및 수료 이력입니다.
                    </p>
                </div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <article key={index} className="experience-item">
                            <div className="exp-meta">
                                <span className="exp-period">{exp.period}</span>
                            </div>

                            <div className="exp-content">
                                <h3 className="exp-title">{exp.title}</h3>
                                <div className="exp-company">{exp.company}</div>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
