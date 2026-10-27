# 김도환 · 백엔드 개발자 포트폴리오

> **사이트:** https://kimdohwan24.github.io/

백엔드 개발자 김도환의 포트폴리오 사이트입니다.
프로젝트마다 어떤 문제가 있었고, 어떻게 해결했고, 결과를 어떻게 확인했는지를 중심으로 정리했습니다.

## 주요 프로젝트

| 프로젝트 | 내용 | 주요 기술 |
| --- | --- | --- |
| [같이먹자](https://github.com/hojunyun-dev/Eat_Together) | 공동 배달 주문 플랫폼 · 피크 시간대 요청 실패를 캐싱과 주문/결제 분리로 개선 | Spring Boot, Redis, Kafka, MySQL |
| [HotDealAPI](https://github.com/LJY981008/HotDealAPI) | 선착순 핫딜 이벤트 시스템 · 동시 구매 시 재고 정합성 확보 | Spring Boot, Redisson, MySQL, WebSocket |
| [StockAI](https://github.com/KimDohwan24/StockAI) | AI 뉴스 분석 기반 주식 추천·모의투자 · 외부 API 지연과 장애 대응 | Spring Boot, FastAPI, PostgreSQL, Redis |
| [FIREGUARD](https://github.com/KimDohwan24/Fire_Prevention_and_Detection) | CCTV 기반 화재 탐지·관제 서비스 | React, FastAPI, Leaflet |

각 프로젝트의 상세 내용과 화면은 [사이트](https://kimdohwan24.github.io/)에서 볼 수 있습니다.

## 사이트 구성

- React + Vite로 만든 정적 사이트이며, `main` 브랜치에 push하면 GitHub Actions로 GitHub Pages에 배포됩니다.
- 라이트/다크 테마, 모바일 대응, 키보드 탐색, 프로젝트 스크린샷 뷰어를 지원합니다.
- 소개·프로젝트·경력·기술 스택 내용은 `src/data/portfolio.js` 한 곳에서 관리합니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 연락처

- Email: ehghks18@gmail.com
- GitHub: https://github.com/KimDohwan24
