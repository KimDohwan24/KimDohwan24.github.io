import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const fabRef = useRef(null);
  const isInitialMount = useRef(true);

  // 패널 오픈 시 닫기 버튼으로 포커스, 패널 종료 시 FAB로 포커스 복귀
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (isOpen) {
      closeBtnRef.current?.focus();
    } else {
      fabRef.current?.focus();
    }
  }, [isOpen]);

  // Escape 키로 대화 패널 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="chat-widget-root">
      {/* 챗봇 대화 패널 */}
      {isOpen && (
        <section
          id="chatbot-dialog"
          className="chat-panel"
          role="dialog"
          aria-modal="false"
          aria-label="포트폴리오 챗봇 대화창"
        >
          {/* 패널 헤더 */}
          <div className="chat-panel-header">
            <div className="chat-panel-title-wrap">
              <div className="chat-panel-avatar">
                <Bot size={18} />
              </div>
              <div className="chat-panel-title-info">
                <h3 className="chat-panel-title">AI 어시스턴트</h3>
                <span className="chat-panel-status">
                  <span className="status-indicator" />
                  연동 준비 중
                </span>
              </div>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              className="chat-panel-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="챗봇 대화창 닫기"
            >
              <X size={18} />
            </button>
          </div>

          {/* 패널 본문 (Empty State) */}
          <div className="chat-panel-body">
            <div className="chat-empty-state">
              <div className="chat-empty-icon-box">
                <Sparkles size={24} className="chat-sparkle-icon" />
              </div>
              <h4 className="chat-empty-title">무엇이든 물어보세요!</h4>
              <p className="chat-empty-desc">
                백엔드 프로젝트 아키텍처, 성능 개선 및 안정성 검증 경험에 대해 질문을 준비 중입니다.
              </p>
              <div className="chat-suggestion-chips">
                <span className="suggestion-chip">💡 주요 백엔드 프로젝트 소개</span>
                <span className="suggestion-chip">💡 시스템 아키텍처 및 기술 스택</span>
                <span className="suggestion-chip">💡 문제 해결 및 성능 최적화 경험</span>
              </div>
            </div>
          </div>

          {/* 패널 푸터 (입력창 UI - API 미연동 상태 유지) */}
          <div className="chat-panel-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="질문을 입력하세요... (연동 준비 중)"
              aria-label="메시지 입력 창"
              disabled
            />
            <button
              type="button"
              className="chat-send-btn"
              aria-label="메시지 전송"
              disabled
            >
              <Send size={15} />
            </button>
          </div>
        </section>
      )}

      {/* 챗봇 플로팅 버튼 (FAB) */}
      <button
        ref={fabRef}
        type="button"
        className={`chat-fab ${isOpen ? 'chat-fab--open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="chatbot-dialog"
        aria-haspopup="dialog"
        aria-label={isOpen ? '챗봇 대화창 닫기' : '챗봇 열기'}
        title={isOpen ? '챗봇 대화창 닫기' : '챗봇 열기'}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
