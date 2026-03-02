---
trigger: always_on
---

---
trigger: always_on
---

## 1. 개발 환경 (Environment)
- 다음 두 파일을 **동기화 하세요** [.agents/rules/agent.md] [AGENTS.md]
- **패키지 매니저:** `pnpm`을 사용하십시오. (`npm`이나 `yarn` 사용 금지)

## 2. Git 및 버전 관리 (Version Control)
- **사용자 정보:** 시스템 전역(`git config --global`)에 설정된 Username과 Email을 그대로 사용하십시오.

### 2.1 브랜치 전략 (Branching Strategy)
- **Github Flow 준수:**
  - 절대로 `main` 브랜치에 직접 커밋(Commit)하지 마십시오.
  - 작업 유형에 따라 적절한 접두사를 가진 새 브랜치를 생성하여 작업하십시오.
    - 예: `feat/login-page`, `fix/navbar-bug`, `chore/setup-docker`
  - **병합(Merge) 규칙:** 브랜치 병합 시 반드시 **Squash Merge**를 사용하십시오. 작업 브랜치의 커밋을 하나로 합쳐서 병합 이력을 단순하게 유지합니다.
    - 명령어 예시: `git checkout main && git merge --squash feature-branch && git commit`

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