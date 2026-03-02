import { ExternalLink } from 'lucide-react';
import { projects, iconMap } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './Projects.css';

export default function Projects() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <div className={`projects-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="Portfolio" title="주요 프로젝트" />

                    <div className="projects-grid">
                        {projects.map((project, index) => {
                            const Icon = iconMap[project.iconName];
                            return (
                                <GlassCard key={index} delay={index * 100}>
                                    <div className="project-icon-wrap">
                                        {Icon && <Icon size={24} color={project.iconColor} />}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="btn btn-secondary btn-sm">
                                        <ExternalLink size={16} />
                                        상세 보기
                                    </a>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
