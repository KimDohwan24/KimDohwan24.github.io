import { Github } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero-content">
                <span className="hero-subtitle animate-slide-up">{personalInfo.role}</span>
                <h1 className="animate-slide-up delay-100">
                    디지털 세상을 위한 <br />
                    <span className="gradient-text">경험을 설계합니다.</span>
                </h1>
                <p className="animate-slide-up delay-200">{personalInfo.heroDescription}</p>
                <div className="hero-buttons animate-slide-up delay-300">
                    <a href="#projects" className="btn btn-primary">
                        프로젝트 보기
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                </div>
            </div>

            {/* Background Orbs */}
            <div className="hero-orb hero-orb--1" aria-hidden="true" />
            <div className="hero-orb hero-orb--2" aria-hidden="true" />
        </section>
    );
}
