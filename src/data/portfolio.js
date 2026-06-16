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
            '피크타임 주문 집중 시 발생하는 데이터베이스 부하와 API 성능 저하 문제를 해결한 공동 배달 주문 플랫폼입니다. Prometheus와 Grafana로 모니터링 환경을 구축해 HikariCP 커넥션 풀 고갈이 병목 원인임을 진단했고, 중복 조회가 빈번한 가게 목록에 Redis 캐시 레이어를 적용했습니다. nGrinder 부하 테스트를 통해 에러율을 31%에서 0%로 낮추며 시스템 안정성을 검증했습니다.',
        tags: ['Spring Boot', 'Java', 'Redis', 'Kafka', 'MySQL', 'Docker', 'Prometheus', 'Grafana', 'ELK Stack'],
        iconName: 'ShoppingCart',
        iconColor: '#f97316',
        link: 'https://github.com/hojunyun-dev/Eat_Together',
        projectPage: 'https://www.notion.so/teamsparta/4-2542dc3ef51480f9b6ece1fc050a12b7',
        highlights: [
            'Prometheus & Grafana 메트릭 시각화를 통한 HikariCP 커넥션 병목 현상 규명',
            '동일한 데이터의 반복 조회(가게 목록)에 Redis 캐싱을 도입하여 DB 부하 해소 및 에러율 0% 달성',
            'Kafka를 활용해 도메인을 분리하고 결제/주문 수락 과정의 비동기 메시징 아키텍처 구현',
            '배달 취소 및 정산 예외 상황에 대비한 비즈니스 정책 기반 예외 흐름 설계'
        ]
    },
    {
        title: 'LostArkSearch',
        status: '진행중',
        description:
            '로스트아크 Open API를 연동하여 캐릭터 스펙 및 아크 패시브 정보를 탐색하는 서비스입니다. 캐릭터 상세 정보의 방대한 JSON 데이터 렌더링 부하를 줄이기 위해 API 응답 포맷을 경량화하고 UI 탭별 lazy-loading 구조를 설계했습니다. 또한 외부 Open API의 엄격한 초당 호출 제한(Rate Limit)을 회피하고자 다층 캐싱 전략(Redis + Caffeine 로컬 캐시)을 구축하여 검색 속도를 단축했습니다.',
        tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Spring Boot'],
        iconName: 'Globe',
        iconColor: '#38bdf8',
        link: 'https://github.com/KimDohwan24/LostArkSearch',
        highlights: [
            '외부 API 호출 제한 극복을 위한 글로벌 캐시(Redis) 및 정적 데이터용 로컬 캐시(Caffeine) 이중 설계',
            '대용량 캐릭터 세부 스펙 JSON 데이터를 클라이언트 렌더링에 적합하도록 계층화된 DTO로 리팩토링',
            'Vite와 Vanilla CSS를 활용해 모바일 기기에서도 매끄러운 동작을 보장하는 반응형 UI 인터랙션 설계'
        ]
    },
    {
        title: 'HotDealAPI - 실시간 핫딜 이벤트 시스템',
        status: '완료',
        description:
            '선착순 할인 이벤트 시 발생하는 극심한 트래픽 폭주 하에서도 대용량 주문을 안정적으로 처리하는 백엔드 시스템입니다. 도메인 간의 강한 의존성을 해소하기 위해 DDD 아키텍처를 도입했으며, 분산 트랜잭션의 데이터 정합성을 지키기 위해 Saga 패턴 기반의 보상 트랜잭션을 설계했습니다. 또한 JPA의 쓰기 지연 오버헤드를 줄하고자 연관관계를 과감히 제거하고, JdbcTemplate Bulk Insert로 튜닝해 대량 이벤트 등록 속도를 93% 개선했습니다.',
        tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'MySQL', 'Redisson', 'WebSocket', 'JWT', 'Docker'],
        iconName: 'Server',
        iconColor: '#3b82f6',
        link: 'https://github.com/LJY981008/HotDealAPI',
        highlights: [
            '도메인 주도 설계(DDD) 및 단방향 API 통신 적용으로 도메인 간 변경 전파와 결합도 차단',
            'Saga 패턴(보상 트랜잭션)을 직접 구현하여 회원 가입(Auth-User 도메인 분리) 시 예외 발생에 따른 롤백 자동화',
            'JPA OneToMany 연관관계를 제거하고 JdbcTemplate.batchUpdate를 사용해 대량 데이터 삽입 성능 93% 단축',
            '기존 웹소켓의 일대다 순차 전송 병목을 전체 알림 브로드캐스트 및 클라이언트 필터링 구조로 전환하여 전송 지연 해결',
            'Redisson 분산 락을 적용하여 핫딜 선착순 재고 차감 시 동시성 경쟁 이슈 및 Race Condition 제어'
        ]
    },
    {
        title: 'paw-go',
        status: '진행중',
        description:
            '반려동물 토탈 케어 서비스를 위한 팀 협업 프로젝트입니다. 프론트엔드와 백엔드 간의 병렬적 개발을 위해 Swagger를 통한 스키마 우선 설계(Schema-First Design) 방식을 도입해 소통 비용을 낮췄습니다. 런타임 통신 예외를 조기에 탐지하고 방어하기 위해 NestJS의 DTO Class Validation과 TypeScript 정적 타입을 일치시켰고, Git Flow 브랜치 전략을 통해 일관성 있는 협업 프로세스를 리드하고 있습니다.',
        tags: ['TypeScript', 'React', 'NestJS', '협업 프로젝트'],
        iconName: 'Users',
        iconColor: '#a78bfa',
        link: 'https://github.com/paw-go',
        highlights: [
            'API 명세 사전 설계 및 NestJS DTO Validation 적용으로 프론트-백엔드 런타임 오류 조기 차단',
            'Git Flow 브랜치 전략 기반의 PR 규칙 수립 및 코드 리뷰 프로세스를 도입하여 변경 이력 관리 및 충돌 최소화',
            '반려동물 돌봄 예약 도메인의 특성에 맞춰, 실시간 알림 전송을 위한 데이터 흐름 구성 및 분산 아키텍처 고민'
        ]
    },
    {
        title: 'StockAI - AI 뉴스 기반 주식 추천 서비스',
        status: '완료',
        description:
            'AI 감성 분석 정보와 사용자의 투자 성향을 결합한 실시간 맞춤형 주식 추천 서비스입니다. 서로 다른 투자 성향을 가진 6개의 AI 캐릭터들이 매일 스스로 실시간 뉴스를 분석하고 모의 투자를 수행하며 경쟁하는 시스템이 구축되어 있습니다. 특히 대용량 AI 연산과 외부 증권사 API 연동 시 발생하는 잦은 네트워크 IO 병목과 연쇄 장애(Cascading Failure)를 차단하기 위해 비동기 논블로킹(CompletableFuture) 및 Circuit Breaker 우회 제공(Stale Data) 구조를 구현하여 고가용성을 확보했습니다.\n\n[테스트 계정]\n• 이메일: admin@stockai.com\n• 비밀번호: stockai123!',
        tags: ['Next.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Redis', 'PyTorch', 'HuggingFace', 'KIS API'],
        iconName: 'TrendingUp',
        iconColor: '#10b981',
        link: 'https://github.com/KimDohwan24/StockAI',
        demoLink: 'https://majestic-latrine-aspirin.ngrok-free.dev',
        highlights: [
            '서로 다른 투자 성향을 가진 6개의 AI 캐릭터들의 실시간 모의 투자 경쟁 시스템 구축',
            'CompletableFuture.allOf() 병렬 처리를 통해 외부 KIS API 연동 시 호출 스레드 Non-blocking 즉시 반환 구현',
            'WebClient 인스턴스의 무분별한 생성으로 인한 커넥션 풀 고갈 방지를 위해 싱글톤 구성 및 Reactor Netty 커넥션 튜닝',
            'Next.js와 Spring Boot 간의 API Waterfall 구조를 서버 단의 데이터 통합 API 제공으로 리팩토링하여 네트워크 왕복 단축 (TTFB 50% 단축)',
            'Resilience4j Circuit Breaker 연동 및 장애 시 마지막 정상 가격 데이터를 제공하는 Stale-Data Graceful Degradation 패턴 구현'
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
];
