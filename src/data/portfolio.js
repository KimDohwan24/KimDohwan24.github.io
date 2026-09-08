export const personalInfo = {
    name: '김도환',
    role: '백엔드 개발자',
    email: 'ehghks18@gmail.com',
    github: 'https://github.com/KimDohwan24',
    blog: 'https://kimdohwan24.github.io/TIL',
    heroTitle: `문제에 맞는 해결책을 찾고,
결과로 검증합니다.`,
    heroDescription: '서비스의 병목을 분석하고, 부하 테스트로 개선을 검증하는 백엔드 개발자 김도환입니다. 성능과 장애 상황을 함께 고려하며 안정적인 서비스를 만듭니다.',
};

export const skills = [
    {
        category: '백엔드',
        description: '비즈니스 로직, 데이터 처리와 동시성 제어',
        items: ['Java', 'Spring Boot', 'Spring', 'NestJS', 'Redis', 'Swagger', 'FastAPI', 'Python'],
    },
    {
        category: '인프라 및 개발 도구',
        description: '배포 환경 구성, 모니터링과 협업',
        items: ['Docker', 'Git', 'GitHub', 'AWS', 'Prometheus', 'Grafana'],
    },
    {
        category: '프론트엔드',
        description: '사용자 화면 구현과 API 연동',
        items: ['React', 'TypeScript', 'JavaScript', 'Next.js'],
    },
];

export const projects = [
    {
        title: '같이먹자',
        summary: '공동 배달 주문 플랫폼',
        description: '1인 가구와 기숙사 거주자들이 최소 주문 금액과 배달비 부담을 줄이기 위해 함께 모여 주문할 수 있는 실시간 공동 배달 주문 웹 서비스입니다.',
        features: [
            '공동 배달 파티 개설 및 참여자 실시간 모집',
            '참여자 간 실시간 장바구니 동기화 및 1/N 분할 결제 지원',
        ],
        status: '완료',
        metric: '부하 테스트 에러율 31% → 0%',
        problem: '주문이 몰리는 피크 시간대에 DB 커넥션 부족으로 요청 실패가 발생했습니다.',
        solution: '모니터링으로 병목을 파악하여 자주 조회되는 가게 목록을 Redis로 캐싱해 DB 부하를 줄였습니다. Kafka 메시지 큐로 주문과 결제를 분리해 결제 오류의 장애 전파를 차단했습니다.',
        tags: ['Java', 'Spring Boot', 'Redis', 'Kafka', 'MySQL', 'Docker', 'Prometheus', 'Grafana', 'ELK Stack'],
        link: 'https://github.com/hojunyun-dev/Eat_Together',
        projectPage: 'https://www.notion.so/teamsparta/4-2542dc3ef51480f9b6ece1fc050a12b7',
        highlights: [
            'Prometheus·Grafana로 원인을 분석하고 nGrinder 부하 테스트로 에러율 31% → 0% 개선을 검증했습니다.',
            'Kafka로 주문과 결제를 분리해 장애 전파를 줄이고, 배달 취소·결제 오류에 대한 예외 복구 로직을 구현했습니다.',
        ],
    },
    {
        title: 'HotDealAPI',
        summary: '실시간 선착순 핫딜 이벤트 시스템',
        description: '한정 수량의 특가 상품에 대규모 사용자가 일시에 몰리는 선착순 타임세일 이벤트를 안정적으로 운영하기 위한 고성능 백엔드 시스템입니다.',
        features: [
            '선착순 타임세일 이벤트 등록 및 실시간 재고 차감',
            'WebSocket 기반 사용자 실시간 오픈 알림 전송',
        ],
        status: '완료',
        metric: '이벤트 등록 속도 93% 개선',
        problem: '대량 데이터 등록 지연과 선착순 동시 구매 시 재고 수량 정합성 문제가 있었습니다.',
        solution: 'JPA의 복잡한 연관관계 오버헤드를 줄이고 Bulk Insert를 적용해 등록 성능을 93% 개선했습니다. Redisson 분산 락으로 동시 구매 요청을 제어하고 Saga 패턴으로 결제 실패 시 보상 트랜잭션을 구현했습니다.',
        tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'Redisson', 'MySQL', 'WebSocket', 'JWT', 'Docker'],
        link: 'https://github.com/LJY981008/HotDealAPI',
        highlights: [
            '대량 데이터 저장 시 직접 쿼리를 다루는 Bulk Insert를 적용해 이벤트 등록 속도를 93% 단축했습니다.',
            'Redisson 분산 락으로 초과 판매를 방지하고, Saga 패턴 기반 보상 트랜잭션으로 분산 환경의 데이터 정합성을 확보했습니다.',
        ],
    },
    {
        title: 'StockAI',
        summary: 'AI 뉴스 분석 기반 주식 추천 및 모의투자 서비스',
        description: '복잡한 금융 뉴스를 AI가 실시간 분석해 호재·악재를 판별하고, 6가지 투자 성향의 AI 에이전트가 스스로 모의투자를 진행하는 주식 추천 플랫폼입니다.',
        features: [
            '실시간 증권 뉴스 감성 분석(호재/중립/악재) 및 AI 종목 점수 산출',
            '6개 AI 투자 캐릭터의 자동 모의투자 시뮬레이션 및 백테스트 수익률 검증',
            '한국투자증권(KIS) Open API 연동 실시간 주가 차트 및 거래 모니터링',
        ],
        status: '완료',
        metric: '초기 로딩 속도 50% 단축',
        problem: '증권사 API와 AI 서버의 응답 지연이나 외부 연동 일시 장애가 전체 서비스에 영향을 주었습니다.',
        solution: '외부 호출을 비동기·병렬 처리로 전환하고 통신 객체를 재사용했습니다. 서버에서 데이터를 모아 전달하는 집약 API로 통신 횟수를 줄이고, 외부 API 장애 시 직전 정상 데이터를 서빙하는 Fallback 캐시 안전장치를 구현했습니다.',
        tags: ['Spring Boot', 'Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'PyTorch', 'HuggingFace', 'KIS API'],
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
            '외부 API 다중 호출 비동기 병렬화와 집약 API 구축으로 초기 화면 로딩 속도를 50% 단축했습니다.',
            '외부 주식 API 장애 발생 시에도 서비스 중단을 막기 위해 마지막 정상 데이터를 제공하는 Fallback 캐시 안전장치를 구현했습니다.',
        ],
    },
    {
        title: 'FIREGUARD',
        summary: 'CCTV 기반 화재 탐지·지능형 관제 서비스',
        period: '2026.08.03–2026.08.28',
        role: '6인 팀 · 팀장 · 프론트엔드 단독 구현',
        description: '도로 및 도심 CCTV 영상을 실시간 분석하여 화재·연기를 조기 감지하고, 관제사의 신속한 상황 판단과 소방서 출동을 돕는 통합 화재 관제 웹 플랫폼입니다.',
        features: [
            '국가교통정보센터(ITS) CCTV 실시간 HLS 영상 스트리밍',
            'Leaflet GIS 지도 기반 화재 발생 위치 및 인근 CCTV 실시간 시각화',
            '화재 감지 알림 팝업 및 관제사 60초 무응답 시 자동 모의 119 출동 접수',
        ],
        status: '완료',
        metric: null,
        problem: 'CCTV 기반 화재·연기 탐지 결과가 단순 감지에 그치지 않고, 관리자 확인과 후속 대응으로 이어져야 했습니다.',
        solution: '팀장으로서 서비스 흐름을 통합하고 프론트엔드 전체 화면을 단독 구현했습니다. 영상 테스트·감지 이벤트·관제자 판정·60초 무응답 모의 119 연동을 백엔드 API와 운영 화면으로 연결했습니다.',
        tags: ['React', 'Vite', 'FastAPI', 'Python', 'Leaflet', 'HLS.js', 'ITS OpenAPI'],
        link: 'https://github.com/KimDohwan24/Fire_Prevention_and_Detection',
        images: [
            '/images/fireguard/dashboard.png',
            '/images/fireguard/monitoring.png',
            '/images/fireguard/login.png',
            '/images/fireguard/admin-cctv.png',
            '/images/fireguard/detection-audit.png',
            '/images/fireguard/activity-119-test.png',
        ],
        note: '119 신고는 프로젝트 검증용 모의 흐름입니다. 화면의 수치는 샘플 데이터이며 성능 측정값이 아닙니다.',
        highlights: [
            '6인 팀의 팀장으로서 WBS·역할 분담·통합 일정을 조율하며 탐지부터 관제, 모의 신고까지의 전체 서비스 흐름 관리',
            'React·Vite 기반의 인증·권한·세션 관리, 운영 대시보드, GIS 관제 및 상세 모달 등 프론트엔드 전체 화면 단독 구현',
            'Leaflet GIS 맵, ITS CCTV OpenAPI, HLS 실시간 스트림을 결합하고 백엔드 영상 테스트·모의 119 신고 API 통합',
        ],
    },
    {
        title: 'paw-go',
        summary: '반려동물 돌봄 매칭 플랫폼',
        description: '반려동물 보호자와 전문 도우미를 연결하여 맞춤형 돌봄 예약과 일정을 관리할 수 있는 팀 협업 웹 서비스입니다.',
        features: [
            '돌봄 예약 신청 및 일정 상태 관리',
            '돌봄 진행 상황 및 실시간 사용자 알림 전송',
        ],
        status: '진행중',
        metric: null,
        problem: '프론트엔드와 백엔드가 동시에 개발할 때 명세 불일치와 데이터 오류를 줄여야 했습니다.',
        solution: 'Swagger로 API 명세를 먼저 정의하고, TypeScript와 유효성 검사로 데이터 전달 오류를 예방했습니다. Git Flow 브랜치 전략과 PR 코드 리뷰 문화를 도입했습니다.',
        tags: ['TypeScript', 'React', 'NestJS', 'Swagger'],
        link: 'https://github.com/paw-go',
        highlights: [
            'Swagger 기반 API 명세 선행 정의 및 DTO 유효성 검사(Validation)로 클라이언트-서버 통신 오류 최소화',
            'Git Flow와 코드 리뷰를 도입해 코드 충돌을 줄이고 안정적인 협업 과정을 정립했습니다.',
        ],
    },
];

export const experiences = [
    {
        period: '2018 - 2024',
        title: '원광대학교 졸업',
        company: '컴퓨터소프트웨어공학 전공',
        description: '컴퓨터공학 기초와 전공 심화 과정을 이수하고, 팀 프로젝트에서 백엔드 및 인프라 구성을 주도했습니다.',
    },
    {
        period: '2025.04 - 2025.10',
        title: '내일배움캠프 수료',
        company: '스파르타코딩클럽',
        description: '웹 서비스 기획부터 배포·성능 최적화까지 경험했습니다. 공동 주문 플랫폼의 백엔드 고도화와 에러율 개선을 담당했습니다.',
    },
    {
        period: '2025.10 - 2025.11',
        title: '풀스택 개발 인턴',
        company: '㈜ 에이아이웍스',
        description: 'AI 연동 서비스 개발·유지보수에 참여했습니다. 파일 업로더를 설계·개발하고 프론트엔드 UI 개선과 백엔드 API 안정화를 수행했습니다.',
    },
    {
        period: '2026.07 - 2026.08',
        title: '심층 데이터 분석 및 인공지능 교육',
        company: '휴먼 AI 교육 센터',
        description: '빅데이터 분석 방법과 인공지능의 기본 원리 및 활용 방안을 학습했습니다.',
    },
];
