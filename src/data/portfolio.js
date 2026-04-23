import { Terminal, Monitor, LayoutTemplate, Server, Globe, Smartphone, ShoppingCart, Users } from 'lucide-react';

export const personalInfo = {
    name: 'DoHwan',
    role: 'Back End Developer',
    email: 'ehghks18@gmail.com',
    github: 'https://github.com/KimDohwan24',
    blog: 'https://kimdohwan24.github.io/TIL',
    heroTitle: `디지털 세상을 위한
경험을 설계합니다.`,
    heroDescription: `탄탄한 구조 위에 신뢰할 수 있는 서비스를 만드는 백엔드 개발자입니다.
Java와 Spring 기반의 개발 경험을 바탕으로 성능과 확장성을 꾸준히 고민하고 있습니다.`,
    aboutDescription: `빠르게 변화하는 기술 속에서 새로운 가능성을 발견하고 만들어가고 있습니다.
프론트엔드와 백엔드를 함께 이해하며 더 나은 흐름과 경험을 고민합니다.
기술로 자연스럽고 의미 있는 서비스를 만드는 개발자가 되고자 합니다.`,
};

export const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', level: 88 },
            { name: 'TypeScript', level: 78 },
            { name: 'JavaScript', level: 84 },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Java', level: 86 },
            { name: 'Spring', level: 82 },
            { name: 'Spring Boot', level: 84 },
            { name: 'NestJS', level: 76 },
            { name: 'Redis', level: 82 },
            { name: 'Swagger', level: 70 },
        ],
    },
    {
        category: 'DevOps & Tools',
        items: [
            { name: 'Docker', level: 80 },
            { name: 'Git', level: 88 },
            { name: 'GitHub', level: 86 },
            { name: 'AWS', level: 72 },
            { name: 'Prometheus', level: 74 },
            { name: 'Grafana', level: 72 },
        ],
    },
];

export const projects = [
    {
        title: '같이먹자 (Eat_Together)',
        status: '프로젝트 완료',
        description:
            '1인 가구의 배달비 부담 문제를 해결하는 지역 기반 공동 주문 플랫폼입니다. 유저 관리 시스템과 Prometheus/Grafana 기반의 모니터링 시스템 구축을 담당했습니다. 대규모 트래픽 상황에서 발생하는 DB 커넥션 풀 고갈 문제를 Redis 캐싱 도입을 통해 해결하여 에러율을 31%에서 0%로 개선한 경험이 있습니다.',
        tags: ['Spring Boot', 'Java', 'Redis', 'Kafka', 'MySQL', 'Docker', 'Prometheus', 'Grafana', 'ELK Stack'],
        iconName: 'ShoppingCart',
        iconColor: '#f97316',
        link: 'https://github.com/hojunyun-dev/Eat_Together',
        projectPage: 'https://www.notion.so/teamsparta/4-2542dc3ef51480f9b6ece1fc050a12b7',
        highlights: [
            'Prometheus & Grafana를 이용한 전방위적 인프라 모니터링 시스템 구축',
            'Redis 캐싱을 통한 맛집 검색 성능 최적화 및 DB 부하 절감 (에러율 0% 달성)',
            'Kafka를 활용한 이벤트 기반 메시징 아키텍처 설계 참여',
            'Redis LocalDateTime 직렬화 트러블슈팅 및 해결'
        ]
    },
    {
        title: 'LostArkSearch',
        status: '프로젝트 진행 중',
        description:
            '로스트아크 관련 정보를 빠르게 탐색할 수 있도록 구성한 검색 프로젝트입니다. 원하는 정보를 직관적으로 찾을 수 있는 흐름에 집중하며, 검색 중심 UI와 데이터 표시 구조를 직접 구현했습니다.',
        tags: ['React', 'Vite', 'JavaScript', 'CSS'],
        iconName: 'Globe',
        iconColor: '#38bdf8',
        link: 'https://github.com/KimDohwan24/LostArkSearch',
        highlights: [
            '검색 중심의 화면 흐름을 고려한 UI 구성',
            '사용자가 필요한 정보를 빠르게 찾을 수 있도록 데이터 탐색 경험 개선',
            '프론트엔드 구조를 직접 설계하며 화면 구성과 상호작용 구현'
        ]
    },
    {
        title: 'HotDealAPI - 실시간 핫딜 이벤트 시스템',
        status: '프로젝트 완료',
        description:
            '실시간 핫딜 이벤트 관리 및 주문 처리를 위한 백엔드 시스템입니다. 도메인 주도 설계(DDD)를 기반으로 하여 복잡한 비즈니스 로직을 명확하게 분리하였고, Redisson 분산 락을 활용하여 동시성 상황에서도 정확한 재고 관리를 구현했습니다. 또한 WebSocket을 이용해 실시간 알림 기능을 제공하며, Saga 패턴으로 도메인 간 데이터 일관성을 보장했습니다.',
        tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'MySQL', 'Redisson', 'WebSocket', 'JWT', 'Docker'],
        iconName: 'Server',
        iconColor: '#3b82f6',
        link: 'https://github.com/LJY981008/HotDealAPI',
        highlights: [
            '도메인 주도 설계(DDD)를 통한 비즈니스 로직 계층화 및 책임 분리',
            'Redisson 분산 락을 활용한 재고 차감 동시성 제어 및 대용량 트래픽 대비',
            'WebSocket 및 Spring Event 기반의 실시간 이벤트 알림 시스템 구축',
            'Saga 패턴(보상 트랜잭션)을 적용한 도메인 간 데이터 정합성 유지',
            '기존 단일 삽입 방식에서 벌크 인서트(Bulk Insert)로 개선하여 이벤트 등록 성능 93% 향상'
        ]
    },
    {
        title: 'paw-go',
        status: '프로젝트 진행 중',
        description:
            '반려동물 서비스를 위한 협업 프로젝트입니다. 팀 단위로 기능을 분담해 서비스를 함께 개발하고 있으며, 실제 운영을 고려한 구조 설계와 협업 흐름에 맞춘 개발 경험을 쌓고 있습니다.',
        tags: ['TypeScript', 'React', 'NestJS', '협업 프로젝트'],
        iconName: 'Users',
        iconColor: '#a78bfa',
        link: 'https://github.com/paw-go',
        highlights: [
            '조직 레포지토리 기반으로 프론트엔드와 백엔드를 분리해 협업 진행',
            '기능 구현뿐 아니라 브랜치 전략과 역할 분담을 포함한 팀 협업 경험 축적',
            '실서비스를 고려한 구조와 개발 프로세스를 함께 정리하며 프로젝트 진행'
        ]
    },
];

export const iconMap = {
    Monitor,
    Terminal,
    LayoutTemplate,
    Server,
    Globe,
    Smartphone,
    ShoppingCart,
    Users,
};

export const experiences = [
    {
        period: '2018 - 2024',
        title: '원광대학교 재학 및 졸업',
        company: '컴퓨터소프트웨어공학 전공',
        description:
            '컴퓨터공학의 기초부터 전공 심화 과정까지 이수하며 풀스택 개발자로서의 역량을 다졌습니다. 다수의 팀 프로젝트에서 백엔드 및 인프라 구성을 주도하며 실무 기술을 습득했습니다.',
    },
    {
        period: '2025.04 - 2025.10',
        title: '내일배움캠프 (스파르타 부트캠프) 수료',
        company: '스파르타코딩클럽',
        description:
            '강도 높은 실무 중심 커리큘럼을 통해 웹 서비스 기획부터 배포, 성능 최적화까지 프로젝트의 전 과정을 경험했습니다. 특히 실시간 공동 주문 플랫폼 프로젝트에서 백엔드 고도화를 담당하며 에러율 개선 및 안정적인 시스템 구축을 주도했습니다.',
    },
    {
        period: '2025.10 - 2025.11',
        title: '풀스택 개발 인턴 (Full Stack Intern)',
        company: '㈜ 에이아이웍스',
        description:
            'AI 연동 서비스의 풀스택 개발 및 유지보수를 담당했습니다. 효율적인 데이터 관리를 위한 파일 업로더 시스템을 직접 설계 및 개발하였으며, 프론트엔드 UI 개선부터 백엔드 API 안정화까지 서비스 전반의 유지보수를 수행하며 실무 대응 역량을 쌓았습니다.',
    },
];
