import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FolderOpen, X } from 'lucide-react';
import { projects, iconMap } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import './Projects.css';

export default function Projects() {
    const { ref, isVisible } = useScrollReveal();
    const sliderRef = useRef(null);
    const dragStateRef = useRef({
        isDragging: false,
        startX: 0,
        startScrollLeft: 0,
        moved: false,
        pointerId: null,
    });
    const sortedProjects = [...projects].sort((a, b) => {
        const aInProgress = a.status === '진행중';
        const bInProgress = b.status === '진행중';

        if (aInProgress === bInProgress) {
            return 0;
        }

        return aInProgress ? 1 : -1;
    });
    const [selectedProject, setSelectedProject] = useState(sortedProjects[0] ?? null);
    const [isDraggingSlider, setIsDraggingSlider] = useState(false);

    const scrollProjects = (direction) => {
        if (!sliderRef.current) {
            return;
        }

        const scrollAmount = sliderRef.current.clientWidth * 0.72 * direction;

        sliderRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    };

    const handleSelectProject = (project, event) => {
        if (dragStateRef.current.moved) {
            return;
        }

        setSelectedProject(project);

        event.currentTarget.closest('.project-tile')?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    };

    const handlePointerDown = (event) => {
        if (!sliderRef.current || (event.pointerType === 'mouse' && event.button !== 0)) {
            return;
        }

        dragStateRef.current = {
            isDragging: true,
            startX: event.clientX,
            startScrollLeft: sliderRef.current.scrollLeft,
            moved: false,
            pointerId: event.pointerId,
        };

        setIsDraggingSlider(true);
    };

    const handlePointerMove = (event) => {
        if (!sliderRef.current || !dragStateRef.current.isDragging) {
            return;
        }

        const deltaX = event.clientX - dragStateRef.current.startX;

        if (Math.abs(deltaX) > 10) {
            if (!dragStateRef.current.moved) {
                sliderRef.current.setPointerCapture?.(dragStateRef.current.pointerId);
            }
            dragStateRef.current.moved = true;
        }

        if (!dragStateRef.current.moved) {
            return;
        }

        sliderRef.current.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
    };

    const endDragging = () => {
        dragStateRef.current.isDragging = false;
        dragStateRef.current.pointerId = null;
        setIsDraggingSlider(false);
    };

    const handlePointerUp = (event) => {
        if (dragStateRef.current.pointerId !== event.pointerId) {
            return;
        }

        sliderRef.current?.releasePointerCapture?.(event.pointerId);
        endDragging();
    };

    const handlePointerCancel = (event) => {
        if (dragStateRef.current.pointerId !== event.pointerId) {
            return;
        }

        sliderRef.current?.releasePointerCapture?.(event.pointerId);
        endDragging();
    };

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <div className={`projects-wrapper ${isVisible ? 'reveal' : ''}`}>
                    <SectionHeader subtitle="Portfolio" title="주요 프로젝트" />

                    <div className="projects-section-header">
                        <h3>프로젝트 목록</h3>
                        <span>프로젝트가 추가되면 오른쪽으로 이어서 표시됩니다</span>
                    </div>

                    <div className="projects-slider-shell">
                        <button
                            type="button"
                            className="projects-slider-button projects-slider-button-left"
                            onClick={() => scrollProjects(-1)}
                            aria-label="이전 프로젝트 보기"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div
                            className={`projects-slider ${isDraggingSlider ? 'is-dragging' : ''}`}
                            ref={sliderRef}
                            role="list"
                            aria-label="프로젝트 목록"
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerCancel}
                        >
                            {sortedProjects.slice(0, 16).map((project, index) => {
                                const Icon = iconMap[project.iconName];
                                const isSelected = selectedProject?.title === project.title;

                            return (
                                <GlassCard
                                    key={project.title}
                                    className={`project-tile ${isSelected ? 'is-selected' : ''}`}
                                    delay={index * 80}
                                    >
                                        <button
                                            type="button"
                                            className="project-tile-button"
                                            onClick={(event) => handleSelectProject(project, event)}
                                            aria-pressed={isSelected}
                                        >
                                            <div className="project-tile-top">
                                            <div className="project-icon-wrap">
                                                    {Icon && <Icon size={24} color={project.iconColor} />}
                                                </div>
                                                {project.status && (
                                                    <span
                                                        className={`project-status ${project.status === '진행중' ? 'project-status-in-progress' : ''}`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="project-tile-body">
                                                <h3>{project.title}</h3>
                                                <p className="project-desc">{project.description}</p>
                                            </div>

                                            <div className="project-tile-footer">
                                                <span className="project-tile-action">클릭해서 자세히 보기</span>
                                            </div>
                                        </button>
                                    </GlassCard>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            className="projects-slider-button projects-slider-button-right"
                            onClick={() => scrollProjects(1)}
                            aria-label="다음 프로젝트 보기"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    {selectedProject && (
                        <GlassCard className="project-detail-card">
                            <div className="project-detail-toolbar">
                                <div>
                                    <p className="project-detail-label">선택한 프로젝트</p>
                                    <h3>{selectedProject.title}</h3>
                                </div>

                                <div className="project-links">
                                    <a href={selectedProject.link} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} />
                                        GitHub
                                    </a>
                                    {selectedProject.projectPage && (
                                        <a
                                            href={selectedProject.projectPage}
                                            className="btn btn-outline btn-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FolderOpen size={16} />
                                            프로젝트 페이지
                                        </a>
                                    )}
                                    <button type="button" className="btn btn-outline btn-sm" onClick={() => setSelectedProject(null)}>
                                        <X size={16} />
                                        닫기
                                    </button>
                                </div>
                            </div>

                            <p className="project-detail-description">{selectedProject.description}</p>

                            {selectedProject.highlights && (
                                <ul className="project-highlights">
                                    {selectedProject.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="project-tags">
                                {selectedProject.tags.map((tag) => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    )}
                </div>
            </div>
        </section>
    );
}
