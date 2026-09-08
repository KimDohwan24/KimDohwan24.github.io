import { useState } from 'react';
import { Github, ExternalLink, FileText, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/portfolio';
import ImageViewer from './ImageViewer';
import './Projects.css';

export default function Projects() {
    const [expandedImages, setExpandedImages] = useState({});
    const [viewerState, setViewerState] = useState({
        isOpen: false,
        projectTitle: '',
        images: [],
        initialIndex: 0,
        triggerElement: null,
    });

    const toggleImages = (index) => {
        setExpandedImages((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const openViewer = (projectTitle, images, initialIndex, triggerElement) => {
        setViewerState({
            isOpen: true,
            projectTitle,
            images,
            initialIndex,
            triggerElement,
        });
    };

    const closeViewer = () => {
        setViewerState((prev) => ({
            ...prev,
            isOpen: false,
        }));
    };

    return (
        <section className="section" id="projects" aria-labelledby="projects-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="projects-title" className="section-title">
                        주요 프로젝트
                    </h2>
                    <p className="section-subtitle">
                        문제 정의부터 성능 병목 해소, 정량적 성과 검증까지의 엔지니어링 기록입니다.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const hasImages = project.images && project.images.length > 0;
                        const isImagesOpen = Boolean(expandedImages[index]);
                        const galleryId = `project-gallery-${index}`;

                        return (
                            <article key={project.title} className="project-card">
                                {/* Card Top: Status, Summary, Title, Links */}
                                <div className="card-top">
                                    <div className="card-heading">
                                        <div className="card-meta">
                                            <span className="status-badge">{project.status}</span>
                                            {project.summary && (
                                                <span className="project-summary-text">{project.summary}</span>
                                            )}
                                        </div>
                                        <h3 className="project-title">{project.title}</h3>
                                        {(project.period || project.role) && (
                                            <div className="card-submeta">
                                                {project.period && <span className="meta-period">{project.period}</span>}
                                                {project.period && project.role && <span className="meta-divider">·</span>}
                                                {project.role && <span className="meta-role">{project.role}</span>}
                                            </div>
                                        )}
                                    </div>

                                    <div className="project-links">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary btn-sm"
                                                aria-label={`${project.title} GitHub 저장소 (새 창 열림)`}
                                            >
                                                <Github size={14} aria-hidden="true" />
                                                <span>GitHub</span>
                                                <ExternalLink size={12} aria-hidden="true" />
                                            </a>
                                        )}
                                        {project.projectPage && (
                                            <a
                                                href={project.projectPage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary btn-sm"
                                                aria-label={`${project.title} 정리 문서 (새 창 열림)`}
                                            >
                                                <FileText size={14} aria-hidden="true" />
                                                <span>문서</span>
                                                <ExternalLink size={12} aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Service Overview & Features */}
                                {(project.description || (project.features && project.features.length > 0)) && (
                                    <div className="project-block">
                                        <h4 className="block-title">서비스 소개 및 주요 기능</h4>
                                        {project.description && (
                                            <p className="project-desc">{project.description}</p>
                                        )}
                                        {project.features && project.features.length > 0 && (
                                            <ul className="project-feature-list">
                                                {project.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="feature-item">
                                                        {feat}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {/* Technical Problem Solving & Implementation */}
                                <div className="project-block">
                                    <h4 className="block-title">기술적 문제 해결 및 구현</h4>
                                    <div className="project-flow">
                                        <p className="flow-item">
                                            <strong className="flow-label">문제:</strong> {project.problem}
                                        </p>
                                        <p className="flow-item">
                                            <strong className="flow-label">해결:</strong> {project.solution}
                                        </p>
                                    </div>

                                    {/* Key Metric (Single Blue Point Accent - Clean text, no box) */}
                                    {project.metric && (
                                        <div className="metric-row">
                                            <span className="metric-label">핵심 성과</span>
                                            <span className="metric-value">{project.metric}</span>
                                        </div>
                                    )}

                                    {/* Highlights list */}
                                    {project.highlights && project.highlights.length > 0 && (
                                        <ul className="highlights-list">
                                            {project.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="highlight-item">
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Collapsible Screenshots (Target always in DOM for aria-controls) */}
                                {hasImages && (
                                    <div className="project-images-section">
                                        <button
                                            type="button"
                                            className="images-toggle-btn"
                                            onClick={() => toggleImages(index)}
                                            aria-expanded={isImagesOpen}
                                            aria-controls={galleryId}
                                        >
                                            <ImageIcon size={15} aria-hidden="true" />
                                            <span>
                                                {isImagesOpen ? '스크린샷 접기' : `실행 화면 (${project.images.length}장) 보기`}
                                            </span>
                                            {isImagesOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                        </button>

                                        <div
                                            id={galleryId}
                                            className="screenshots-gallery"
                                            hidden={!isImagesOpen}
                                        >
                                            {isImagesOpen &&
                                                project.images.map((imgSrc, imgIdx) => (
                                                    <button
                                                        key={imgIdx}
                                                        type="button"
                                                        className="screenshot-thumb-btn"
                                                        onClick={(e) =>
                                                            openViewer(
                                                                project.title,
                                                                project.images,
                                                                imgIdx,
                                                                e.currentTarget
                                                            )
                                                        }
                                                        aria-label={`${project.title} 스크린샷 ${imgIdx + 1} 확대 보기`}
                                                        title="클릭하여 화면 크게 보기"
                                                    >
                                                        <img
                                                            src={imgSrc}
                                                            alt={`${project.title} 스크린샷 ${imgIdx + 1}`}
                                                            loading="lazy"
                                                            className="screenshot-thumb"
                                                        />
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Project Note */}
                                {project.note && (
                                    <p className="project-note">※ {project.note}</p>
                                )}

                                {/* Tags */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="card-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag-pill">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* In-page Screen Viewer Modal */}
            {viewerState.isOpen && (
                <ImageViewer
                    key={`${viewerState.projectTitle}-${viewerState.initialIndex}`}
                    projectTitle={viewerState.projectTitle}
                    images={viewerState.images}
                    initialIndex={viewerState.initialIndex}
                    triggerElement={viewerState.triggerElement}
                    onClose={closeViewer}
                />
            )}
        </section>
    );
}
