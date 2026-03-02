import './SectionHeader.css';

export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="section-header">
            {subtitle && <span className="section-header__subtitle">{subtitle}</span>}
            <h2>{title}</h2>
        </div>
    );
}
