---
trigger: always_on
---

## 1. 개발 환경 (Environment)
- 다음 두 파일을 **동기화 하세요** [.agents/rules/agent.md] [AGENTS.md]
- **패키지 매니저:** `pnpm`을 사용하십시오. (`npm`이나 `yarn` 사용 금지)

## 2. Git 및 버전 관리 (Version Control)
- **사용자 정보:** 시스템 전역(`git config --global`)에 설정된 Username과 Email을 그대로 사용하십시오.

### 2.1 브랜치 및 푸시 규칙 (Branching & Push Rules)
- **1인 개발 간소화 전략 (Solo Dev Flow):**
  - 모든 기능 개발, 버그 수정, 스타일 개선 작업은 **`main` 브랜치에서 직접 작업 및 커밋**합니다.
  - **푸시(Push) 제한:** 사용자가 명시적으로 `push`를 진행하라고 지시하기 전까지는 **절대로 임의로 원격 저장소에 Push하지 마십시오.** (로컬 커밋까지만 수행)
  - 사용자가 푸시를 요청하면 `main` 브랜치를 원격 저장소(`origin/main`)에 Push하여 GitHub Pages 자동 배포를 트리거합니다.

### 2.2 커밋 메시지 (Commit Messages)
- **언어:** 커밋 메시지는 **한국어**로 작성하십시오.
- **형식:** [Conventional Commits](https://www.conventionalcommits.org/) 형식을 따르십시오.
  - `feat: 새로운 기능 추가`
  - `fix: 버그 수정`
  - `chore: 빌드 업무 수정, 패키지 매니저 설정 등`
  - `refactor: 코드 리팩토링`
  - `docs: 문서 수정`

## 3. UI/UX 가이드라인
- **언어:** 모든 사용자 인터페이스(UI) 텍스트와 사용자 경험(UX) 문구는 **한국어**로 작성하십시오.
