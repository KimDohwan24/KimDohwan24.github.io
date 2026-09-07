import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageViewer.css';

export default function ImageViewer({
    projectTitle,
    images = [],
    initialIndex = 0,
    triggerElement = null,
    onClose,
}) {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [hasError, setHasError] = useState(false);

    const goPrev = useCallback(() => {
        if (images.length <= 1) return;
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setHasError(false);
    }, [images.length]);

    const goNext = useCallback(() => {
        if (images.length <= 1) return;
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setHasError(false);
    }, [images.length]);

    // Keyboard navigation: Left/Right arrows, ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                const controls = [...dialogRef.current.querySelectorAll('button:not(:disabled)')]
                    .filter((element) => element.getClientRects().length > 0);
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last?.focus({ preventScroll: true });
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first?.focus({ preventScroll: true });
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goPrev, goNext, onClose]);

    // Dialog modal open, scroll lock & focus restoration
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (!dialog.open) {
            dialog.showModal();
        }

        // Lock background scroll
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // Focus the prominent close/return button
        closeButtonRef.current?.focus({ preventScroll: true });

        return () => {
            document.body.style.overflow = originalOverflow;
            if (dialog.open) {
                dialog.close();
            }
            // Return focus to the thumbnail button that triggered the modal
            if (triggerElement && typeof triggerElement.focus === 'function') {
                triggerElement.focus({ preventScroll: true });
            }
        };
    }, [triggerElement]);

    // Backdrop click handler: close only when clicking overlay background, not inner content
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!images || images.length === 0) {
        return null;
    }

    const currentSrc = images[currentIndex];

    return (
        <dialog
            ref={dialogRef}
            className="image-viewer-dialog"
            onCancel={(e) => {
                e.preventDefault();
                onClose();
            }}
            aria-label={`${projectTitle} 스크린샷 뷰어`}
        >
            <div
                className="image-viewer-overlay"
                onClick={handleBackdropClick}
                role="presentation"
            >
                {/* Top Control Bar */}
                <header className="image-viewer-header" onClick={handleBackdropClick}>
                    <div className="image-viewer-info">
                        <span className="image-viewer-title">{projectTitle}</span>
                        {images.length > 1 && (
                            <span className="image-viewer-counter" aria-live="polite">
                                {currentIndex + 1} / {images.length}
                            </span>
                        )}
                    </div>

                    {/* Prominent Return/Close Button */}
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="image-viewer-return-btn"
                        onClick={onClose}
                        aria-label="포트폴리오로 돌아가기 (닫기)"
                        title="포트폴리오로 돌아가기 (ESC 또는 배경 클릭)"
                    >
                        <ArrowLeft size={18} aria-hidden="true" />
                        <span className="return-text">포트폴리오로 돌아가기</span>
                        <X size={18} aria-hidden="true" className="return-x-icon" />
                    </button>
                </header>

                {/* Main Viewing Stage */}
                <div
                    className="image-viewer-stage"
                    onClick={handleBackdropClick}
                    role="presentation"
                >
                    {/* Previous Button */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            className="image-viewer-nav-btn image-viewer-nav-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                goPrev();
                            }}
                            aria-label={`이전 이미지 (현재 ${currentIndex + 1}/${images.length})`}
                            title="이전 이미지 (좌측 방향키 ←)"
                        >
                            <ChevronLeft size={28} aria-hidden="true" />
                        </button>
                    )}

                    {/* Image Area (Clicking image does NOT close modal) */}
                    <div
                        className="image-viewer-viewport"
                        onClick={handleBackdropClick}
                        role="presentation"
                    >
                        {hasError ? (
                            <div
                                className="image-viewer-error-box"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <p className="image-viewer-error-title">이미지를 불러오지 못했습니다.</p>
                                <p className="image-viewer-error-path">{currentSrc}</p>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    onClick={onClose}
                                >
                                    닫기
                                </button>
                            </div>
                        ) : (
                            <img
                                key={currentSrc}
                                src={currentSrc}
                                alt={`${projectTitle} 스크린샷 (${currentIndex + 1}/${images.length})`}
                                className="image-viewer-img"
                                onClick={(e) => e.stopPropagation()}
                                onError={() => setHasError(true)}
                            />
                        )}
                    </div>

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            className="image-viewer-nav-btn image-viewer-nav-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                goNext();
                            }}
                            aria-label={`다음 이미지 (현재 ${currentIndex + 1}/${images.length})`}
                            title="다음 이미지 (우측 방향키 →)"
                        >
                            <ChevronRight size={28} aria-hidden="true" />
                        </button>
                    )}
                </div>

                {/* Bottom Helper Bar */}
                <footer className="image-viewer-footer" onClick={handleBackdropClick}>
                    <span className="image-viewer-hint">
                        좌우 방향키(←, →)로 이동할 수 있으며, ESC 키나 배경 클릭으로 닫을 수 있습니다.
                    </span>
                </footer>
            </div>
        </dialog>
    );
}
