import { ExternalLink } from 'lucide-react';
import { projects, iconMap } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './Projects.css';

export default function Projects() {
    const { ref, isVisible } = useScrollReveal();
    const inProgressProjects = projects.filter((project) => project.status === '프로젝트 진행 중');
    const completedProjects = projects.filter((project) => project.status !== '프로젝트 진행 중');

    const renderProjectList = (projectList, sectionTitle) => (
        <>
            <div className="projects-section-header">
                <h3>{sectionTitle}</h3>
                <span>{projectList.length}개</span>
            </div>

            <div className="projects-grid">
                {projectList.map((project, index) => {
                    const Icon = iconMap[project.iconName];
                    return (
                        <GlassCard key={`${sectionTitle}-${project.title}`} delay={index * 100}>
                            <div className="project-icon-wrap">
                                {Icon && <Icon size={24} color={project.iconColor} />}
                            </div>
                            <h3>{project.title}</h3>
                            {project.status && <p className="project-status">진행 상태: {project.status}</p>}
                            <p className="project-desc">{project.description}</p>
                            {project.highlights && (
                                <ul className="project-highlights">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} />
                                    GitHub
                                </a>
                                {project.projectPage && (
                                    <a href={project.projectPage} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                                        프로젝트 페이지
                                    </a>
                                )}
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </>
    );

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <div className={`projects-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="Portfolio" title="주요 프로젝트" />
                    {completedProjects.length > 0 && renderProjectList(completedProjects, '완료된 프로젝트')}
                    {inProgressProjects.length > 0 && renderProjectList(inProgressProjects, '진행 중인 프로젝트')}
                </div>
            </div>
        </section>
    );
}
