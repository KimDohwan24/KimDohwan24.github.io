import { Terminal, Monitor, LayoutTemplate, Server, Globe, Smartphone } from 'lucide-react';

export const personalInfo = {
    name: '김도환',
    role: 'Full Stack Developer',
    email: 'hello@example.com',
    github: 'https://github.com',
    tagline: '디지털 세상을 위한 경험을 설계합니다.',
    heroDescription:
        '사용자 중심의 사고와 모던 웹 기술(Node.js, React)을 결합하여, 아름답고 성능이 뛰어난 웹 어플리케이션을 개발합니다. 끊임없이 발전하는 기술 생태계 속에서 가치 있는 프로덕트를 만듭니다.',
    aboutDescription:
        '안녕하세요! 3년차 풀스택 개발자입니다. 백엔드 아키텍처 설계부터 프론트엔드 UI 구현까지, 사용자에게 최고의 경험을 전달하기 위해 끊임없이 고민합니다. 클린 코드와 테스트 주도 개발을 지향하며, 개방적인 커뮤니케이션을 통해 팀과 함께 성장하는 것을 좋아합니다.',
};

export const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'HTML/CSS', level: 95 },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', level: 90 },
            { name: 'Express', level: 85 },
            { name: 'NestJS', level: 75 },
            { name: 'PostgreSQL', level: 80 },
        ],
    },
    {
        category: 'DevOps & Tools',
        items: [
            { name: 'Docker', level: 75 },
            { name: 'AWS', level: 70 },
            { name: 'Git', level: 90 },
            { name: 'CI/CD', level: 75 },
        ],
    },
];

export const projects = [
    {
        title: 'E-commerce Platform',
        description:
            'Next.js와 TypeScript 기반의 고성능 쇼핑몰 플랫폼. 결제 시스템 연동 및 사용자 대시보드 구현.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
        iconName: 'Monitor',
        iconColor: '#8b5cf6',
        link: '#',
    },
    {
        title: 'AI Dashboard API',
        description:
            '실시간 데이터 시각화 및 AI 분석 결과를 제공하는 RESTful API 서비스.',
        tags: ['Node.js', 'Express', 'Python', 'Redis'],
        iconName: 'Terminal',
        iconColor: '#ec4899',
        link: '#',
    },
    {
        title: 'Design System Library',
        description:
            '사내 다수 프로젝트에서 공통으로 사용되는 웹 UI 컴포넌트 모음.',
        tags: ['React', 'Storybook', 'Framer Motion'],
        iconName: 'LayoutTemplate',
        iconColor: '#6366f1',
        link: '#',
    },
    {
        title: 'Cloud Native Blog',
        description:
            'Markdown 기반 정적 블로그 시스템. SSG로 빌드되어 CDN에 배포.',
        tags: ['Gatsby', 'GraphQL', 'MDX', 'Netlify'],
        iconName: 'Globe',
        iconColor: '#22d3ee',
        link: '#',
    },
    {
        title: 'Task Management App',
        description:
            '팀 협업을 위한 칸반 보드 기반 프로젝트 관리 앱. 실시간 알림 지원.',
        tags: ['React', 'Socket.io', 'MongoDB', 'Docker'],
        iconName: 'Server',
        iconColor: '#f59e0b',
        link: '#',
    },
    {
        title: 'Health Tracker Mobile',
        description:
            '건강 데이터 추적 및 시각화를 위한 크로스플랫폼 모바일 앱.',
        tags: ['React Native', 'Firebase', 'Chart.js'],
        iconName: 'Smartphone',
        iconColor: '#10b981',
        link: '#',
    },
];

export const iconMap = {
    Monitor,
    Terminal,
    LayoutTemplate,
    Server,
    Globe,
    Smartphone,
};

export const experiences = [
    {
        period: '2024 - 현재',
        title: 'Senior Frontend Developer',
        company: 'TechVision Labs',
        description:
            '대규모 SaaS 플랫폼의 프론트엔드 아키텍처 설계 및 개발 리드. 디자인 시스템 구축 및 성능 최적화 주도.',
    },
    {
        period: '2022 - 2024',
        title: 'Full Stack Developer',
        company: 'StartupFlow Inc.',
        description:
            'Node.js/React 기반의 B2B 플랫폼 구축. RESTful API 설계 및 프론트엔드 구현. CI/CD 파이프라인 개선.',
    },
    {
        period: '2021 - 2022',
        title: 'Junior Developer',
        company: 'CodeBridge',
        description:
            '웹 어플리케이션 유지보수 및 신규 기능 개발. React 마이그레이션 프로젝트 참여.',
    },
];
