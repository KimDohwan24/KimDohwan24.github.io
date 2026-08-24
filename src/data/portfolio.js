import { Terminal, Monitor, LayoutTemplate, Server, Globe, Smartphone, ShoppingCart, Users, TrendingUp } from 'lucide-react';

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
            { name: 'Next.js', level: 80 },
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
            { name: 'FastAPI', level: 78 },
            { name: 'Python', level: 75 },
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
        status: '완료',
        description:
            '주문이 몰리는 시간에 발생하는 데이터베이스 병목 현상을 해결한 공동 배달 주문 플랫폼입니다. 모니터링 툴(Prometheus, Grafana)을 통해 원인을 분석하여 데이터베이스 연결(커넥션) 부족 문제를 발견했습니다. 이를 해결하기 위해 자주 조회되는 가게 목록 데이터를 Redis로 캐싱(임시 저장)하여 데이터베이스 부하를 줄였습니다. 부하 테스트 툴(nGrinder)로 검증한 결과 에러율을 31%에서 0%로 개선하여 안정적인 서비스를 구축했습니다.',
        tags: ['Spring Boot', 'Java', 'Redis', 'Kafka', 'MySQL', 'Docker', 'Prometheus', 'Grafana', 'ELK Stack'],
        iconName: 'ShoppingCart',
        iconColor: '#f97316',
        link: 'https://github.com/hojunyun-dev/Eat_Together',
        projectPage: 'https://www.notion.so/teamsparta/4-2542dc3ef51480f9b6ece1fc050a12b7',
        highlights: [
            '서비스 모니터링 툴을 활용해 데이터베이스 연결 병목 원인을 파악하고 문제 해결 경험',
            '사용자들이 자주 찾는 가게 목록에 Redis 캐시를 적용해 조회 성능을 높이고 에러율을 0%로 개선',
            '메시지 큐(Kafka)를 도입해 주문과 결제 시스템을 분리하여 특정 시스템의 장애가 전체로 번지지 않도록 설계',
            '단순 주문 기능 외에도 배달 취소나 예기치 못한 결제 오류 상황을 고려한 예외 처리 구현'
        ]
    },
    {
        title: 'HotDealAPI - 실시간 핫딜 이벤트 시스템',
        status: '완료',
        description:
            '선착순 이벤트처럼 사용자가 한 번에 몰릴 때 대량의 주문을 안정적으로 처리하기 위한 시스템입니다. 기능별로 서버나 모듈이 분리된 환경에서 결제 실패 시 주문도 함께 취소되도록 안전한 복구 로직(Saga 패턴)을 직접 구현했습니다. 데이터베이스에 수많은 데이터를 한 번에 저장할 때 생기는 속도 저하를 막기 위해, ORM(JPA)의 복잡한 연결을 줄이고 한 번에 묶어서 저장(Bulk Insert)하는 방식을 선택해 이벤트 등록 속도를 93% 개선했습니다.',
        tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'MySQL', 'Redisson', 'WebSocket', 'JWT', 'Docker'],
        iconName: 'Server',
        iconColor: '#3b82f6',
        link: 'https://github.com/LJY981008/HotDealAPI',
        highlights: [
            '기능별로 설계(DDD)를 나누고 통신 방식을 분리하여 하나의 기능 수정이 다른 기능에 영향을 주지 않도록 개선',
            '분리된 환경에서 에러 발생 시 데이터 불일치를 막기 위해 실패한 작업을 되돌리는 복구 로직 구현',
            '대량의 데이터를 저장할 때 JPA 대신 쿼리를 직접 다루는 방식을 선택해 성능 93% 향상',
            '사용자 모두에게 알림을 보낼 때 발생하는 지연 문제를 해결하기 위해 메시지 전송 구조 최적화',
            '선착순 할인 이벤트 시 여러 명이 동시에 구매를 요청할 때 발생하는 재고 수량 오류를 방지하기 위해 분산 락 적용'
        ]
    },
    {
        title: 'paw-go',
        status: '진행중',
        description:
            '반려동물 돌봄 서비스를 만들기 위한 팀 협업 프로젝트입니다. 프론트엔드와 백엔드 개발자가 동시에 원활하게 작업할 수 있도록 API 명세서(Swagger)를 먼저 정의하여 소통 오류를 줄였습니다. 또한, 데이터 전달 시 발생할 수 있는 오류를 사전에 막기 위해 타입 검사(TypeScript)와 유효성 검사(Validation)를 꼼꼼히 설정했으며, 체계적인 깃(Git) 브랜치 전략을 도입해 협업 프로세스를 안정적으로 이끌고 있습니다.',
        tags: ['TypeScript', 'React', 'NestJS', '협업 프로젝트'],
        iconName: 'Users',
        iconColor: '#a78bfa',
        link: 'https://github.com/paw-go',
        highlights: [
            'API 명세서를 미리 작성하고 꼼꼼한 데이터 검증(Validation)을 적용해 개발 과정에서 발생하는 통신 오류 최소화',
            '협업 시 코드 충돌을 줄이고 안정적인 관리를 위해 체계적인 브랜치 전략(Git Flow)과 코드 리뷰 도입',
            '돌봄 예약 서비스 특징을 고려하여 사용자에게 실시간으로 알림을 전달할 수 있는 효율적인 데이터 흐름 설계'
        ]
    },
    {
        title: 'StockAI - AI 뉴스 기반 주식 추천 서비스',
        status: '완료',
        description:
            '사용자의 투자 성향과 AI 뉴스 분석을 결합한 맞춤형 주식 추천 서비스입니다. 6개의 각기 다른 성향을 가진 AI 캐릭터가 실시간 뉴스를 분석하고 모의 투자를 진행하는 독특한 시스템입니다. 외부 증권사 API나 AI 서버 연동 시 응답이 지연되거나 멈추는 현상을 방지하기 위해 비동기 처리(CompletableFuture)를 도입했습니다. 또한 특정 기능에 장애가 발생해도 전체 서비스가 멈추지 않고, 마지막 정상 데이터를 보여주도록 안전장치(Circuit Breaker)를 구현해 서비스 안정성을 높였습니다.\n\n[테스트 계정]\n• 이메일: admin@stockai.com\n• 비밀번호: stockai123!',
        tags: ['Next.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Redis', 'PyTorch', 'HuggingFace', 'KIS API'],
        iconName: 'TrendingUp',
        iconColor: '#10b981',
        link: 'https://github.com/KimDohwan24/StockAI',
        images: [
            '/images/stockai/stockai_1.png',
            '/images/stockai/stockai_2.png',
            '/images/stockai/stockai_3.png',
            '/images/stockai/stockai_4.png',
            '/images/stockai/stockai_5.png',
            '/images/stockai/stockai_6.png',
            '/images/stockai/stockai_7.png',
        ],
        highlights: [
            '6가지 다른 투자 성향을 부여한 AI 캐릭터가 뉴스를 기반으로 스스로 모의 투자를 진행하는 시스템 구현',
            '외부 API를 여러 번 호출할 때 생기는 대기 시간을 줄이기 위해 병렬 처리(비동기)를 적용하여 빠른 응답성 확보',
            '외부 통신 객체를 재사용할 수 있도록 최적화하여 서버 자원 낭비와 연결 오류 방지',
            '프론트엔드와 백엔드 간의 불필요한 통신 횟수를 줄이기 위해 서버에서 데이터를 모아서 한 번에 전달하도록 개선 (초기 로딩 속도 50% 단축)',
            '외부 주식 API가 잠시 멈춰도 서비스가 함께 멈추지 않도록, 마지막으로 정상적으로 받아온 주가를 대신 보여주는 기능 구현'
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
    TrendingUp,
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
    {
        period: '2026.07 - 2026.08',
        title: '심층 데이터 분석 및 인공지능 교육',
        company: '휴먼 AI 교육 센터',
        description:
            '심층 데이터 분석을 바탕으로 빅데이터를 분석하는 방법을 학습하고, 인공지능의 기본 원리와 다양한 활용 방안을 익혔습니다.',
    },
];
