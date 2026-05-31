# webpage_NexusAI 감사 보고서 (2026-05-31)

## 개요

본 보고서는 `/home/ubuntu-02/ai_project/webpage_NexusAI` 경로의 정적 웹 프로젝트에 대한 읽기 전용·증거 기반 감사 결과를 기술한다.

- 프로젝트 성격: 단일 페이지 정적 소개 웹사이트 (NEXUS AI 멀티 에이전트 플랫폼 소개).
- 구성 파일 (`.git` 제외 총 5개): `index.html`(48,995B), `script.js`(26,959B), `style.css`(28,254B), `README.md`(12,341B), `.github/workflows/deploy.yml`.
- 스택: 순수 HTML/CSS/JavaScript. 빌드 도구 없음(`package.json` 부재 확인). 외부 CDN 의존성은 Three.js r128, GSAP 3.12.5 + ScrollTrigger, Google Fonts(Outfit/Inter).
- 배포: GitHub Pages (`actions/deploy-pages@v4`, `main` 브랜치 push 시 트리거).
- 기능: Three.js 파티클 배경, GSAP 스크롤 애니메이션, ko/en i18n 토글, 카운터 애니메이션, 스무스 스크롤, 모바일 내비게이션.

## 실행·테스트 결과

- `node --check script.js`: 구문 오류 없음 (확인).
- `package.json` 부재로 build/tsc/lint 대상 없음 (확인). 정적 프로젝트이므로 구조·참조 무결성 검사로 대체하였다.
- 로컬 자산 참조: `index.html`이 참조하는 비외부 자산은 `style.css`, `script.js` 두 개이며 모두 실제 존재한다 (확인).
- 내비게이션 앵커: HTML 내 `href="#..."` 앵커 8종(`#hero #architecture #frameworks #tools #features #techstack #status #stats`)이 모두 대응 섹션 `id`로 해소된다 (확인). 깨진 앵커 없음.
- i18n 키 정합성: HTML `data-i18n` 고유 키 143개가 ko/en 사전 양쪽에 모두 존재하며, 사전에 미사용 잉여 키도 없다 (확인).
- 태그/괄호 균형: `<section>` 10/10, `<div>` 293/293, CSS 중괄호 206/206으로 균형 (확인).
- CSS 변수: HTML 인라인에서 사용된 `var(--clr-*)` 5종이 모두 `style.css`에 정의됨 (확인). `--clr-red`는 정의되어 있으나 인라인 미사용(문제 아님).

## 발견된 문제점 (확인 vs 추정, 심각도)

브랜드 스크럽 무결성 및 구조 검사 결과, 수정이 필요한 결함은 발견되지 않았다.

- 브랜드 잔존물: `wdlab` / `WDLAB@2023-2026` / `wdlab` / `WDLAB@2023-2026` / `wdlab` / `wdlab` 에 대한 대소문자 무시 검색 결과 잔존물 없음 (확인). `A3DE`/`A3-ADE` 보존 대상도 애초에 존재하지 않음.
- 참고: `style.css:3`의 "Style Reference: AEGIS Webpage" 및 `README.md:239`의 Web-AEGIS 링크는 별도 자매 프로젝트(디자인 참조)에 대한 정상 인용이며 WDLAB@2023-2026/WDLAB@2023-2026 스크럽 범위가 아니다 (확인, 문제 아님, 심각도 없음).
- 외부 CDN 의존(Three.js/GSAP/Google Fonts): 네트워크 차단 환경에서도 `script.js`의 `initParticles`는 try/catch로 CSS 그라디언트 폴백을, `initAnimations`는 `typeof gsap`/`ScrollTrigger` 가드를 두어 graceful degradation 처리됨 (확인). 결함 아님. 다만 CDN 가용성/버전 고정에 외부 의존하는 점은 일반적 위험 요소로 기록한다 (추정, 심각도 낮음).
- README 상단 제목 "Web-NexusAI"와 저장소명 "Webpage-NexusAI" 표기가 혼재 (확인, 심각도 매우 낮음, 단순 표기 비일관, 기능 영향 없음).

## 조치한 내용

- 별도 수정 조치 없음. 저위험 자동 수정 대상(브랜드 잔존물, 깨진 참조/링크, 깨진 텍스트)이 검사 결과 발견되지 않았기 때문이다.
- `.git` 및 디렉터리명은 지시에 따라 일절 변경하지 않았다.

## 미해결·위험 항목

- 외부 CDN/폰트 의존성은 런타임 가용성·버전 변동에 노출된다. 필요 시 SRI 무결성 해시 추가 또는 자산 로컬 번들링을 권장한다 (권고만, 비파괴적이나 기능 변경 수반이므로 미적용).
- README 제목/저장소명 표기 비일관은 문서 수준 사항으로, 수정 시 사용자 확인이 바람직하여 권고로만 남긴다.
- 브라우저 실제 렌더링·콘솔 런타임 오류는 본 감사에서 헤드리스 브라우저로 직접 관찰하지 않았다(정적 검사·`node --check` 범위). 시각/런타임 검증은 별도 브라우저 확인 권장 (추정).

## 종합 판단

본 프로젝트는 자기완결적 정적 사이트로, 구문·참조·i18n·구조 무결성이 모두 양호하다. 브랜드 스크럽 잔존물은 발견되지 않았으며 깨진 로컬 자산/앵커도 없다. 수정이 필요한 결함이 확인되지 않아 코드 변경은 수행하지 않았다. 외부 CDN 의존 및 사소한 README 표기 비일관은 권고 수준 항목으로만 남긴다.
