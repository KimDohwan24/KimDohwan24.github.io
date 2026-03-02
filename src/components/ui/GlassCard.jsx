import './GlassCard.css';

export default function GlassCard({ children, className = '', style = {}, delay = 0 }) {
    return (
        <div
            className={`glass-card ${className}`}
            style={{ animationDelay: `${delay}ms`, ...style }}
        >
            {children}
        </div>
    );
}
