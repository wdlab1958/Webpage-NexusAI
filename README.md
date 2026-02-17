# Web-NexusAI

NEXUS AI(Multi-Agent Orchestration Platform) 프로젝트를 소개하는 한국어/영어 이중 언어 웹 페이지입니다.

![Version](https://img.shields.io/badge/version-2.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen)
![Languages](https://img.shields.io/badge/i18n-KR%20%7C%20EN-orange)

**Live Demo**: [https://wdlab1958.github.io/Webpage-NexusAI/](https://wdlab1958.github.io/Webpage-NexusAI/)

---

## Overview

NEXUS AI는 **10개의 Agentic AI 프레임워크**(CrewAI, LangGraph, AutoGen, Google ADK, OpenAI Agents, Claude Agent, DSPy, MetaGPT, CAMEL-AI, LlamaIndex)를 통합한 프로덕션급 멀티 에이전트 오케스트레이션 시스템입니다. 하이브리드 LLM 라우팅, 3계층 메모리 시스템, 110+ AI 도구, 엔터프라이즈급 인프라를 제공합니다.

이 웹 페이지는 NEXUS AI 플랫폼의 6계층 아키텍처, 10개 프레임워크, 핵심 기능, 기술 스택, 구현 상태를 상세하게 소개합니다.

---

## Features

- **Bilingual (KR/EN)**: 네비게이션 바의 KR/EN 토글 버튼으로 전체 페이지 언어 즉시 전환 (400+ 번역 키)
- **Dark Glassmorphism Theme**: 반투명 글래스 카드, 백드롭 블러, 글로우 이펙트 기반 다크 UI
- **Three.js Particle Background**: 시안-퍼플 그라데이션 1,200개 인터랙티브 3D 파티클 배경
- **GSAP Scroll Animations**: ScrollTrigger 기반 스크롤 연동 페이드인, 스태거 효과
- **Counter Animation**: IntersectionObserver 기반 숫자 카운터 애니메이션
- **Responsive Design**: 모바일(480px) / 태블릿(768px) / 데스크탑(1024px+) 완전 대응
- **Smooth Navigation**: 앵커 기반 스무스 스크롤 + 모바일 햄버거 메뉴

---

## Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | 프로젝트 소개, 6개 핵심 통계 카운터, 미니 6계층 아키텍처 시각화 |
| 2 | **Architecture** | 6계층(L6~L1) 시스템 아키텍처 다이어그램 (프론트엔드→인프라) |
| 3 | **Frameworks** | 10개 Agentic AI 프레임워크 카드 + Adapter Registry/Smart Fallback/Frontend Integration |
| 4 | **AI Tools** | 5개 카테고리 110+ 도구 (문서 25, 코드 12, 웹 17, 데이터 20, 미디어 36) + 보안 배지 |
| 5 | **Features** | 12개 핵심 기능 (LLM 라우팅, 메모리, 보안, 음성, 멀티모달, 플러그인, 분석, 화이트라벨 등) |
| 6 | **Advanced Modules** | Moltbot 대화 관리 + Enhanced Cowork 실행 + MCP 통합 (5개 프로바이더) |
| 7 | **Tech Stack** | 4개 카테고리별 기술 스택 (Frontend, Backend, AI/ML, Infrastructure) |
| 8 | **Implementation Status** | Phase 0~6 구현 진행률 바 (100% 완료) + 파일/LOC 메트릭 |
| 9 | **Statistics** | 8개 프로젝트 핵심 지표 (카운터 애니메이션) + 서버 구성 정보 |
| 10 | **Version History** | v1.4.0 ~ v2.1.0 타임라인 (5개 릴리스) |
| 11 | **Footer** | 브랜드, 빠른 링크, 기술 스택, 저작권 |

---

## NEXUS AI Project Statistics

| Metric | Value |
|--------|-------|
| Total Lines of Code | ~56,000+ |
| Production Files | 305+ |
| API Routers | 32 (204 endpoints) |
| Dashboard Pages | 40 (i18n en/ko) |
| Framework Adapters | 10 |
| AI Tools | 110+ (5 categories) |
| Backend Services | 30 |
| Database Models | 21 |
| i18n Keys | 1,594 per locale |
| K8s Manifests | 17 |

---

## NEXUS AI 6-Layer Architecture

```
┌─────────────────────────────────────────────────┐
│  L6  Frontend       │ Next.js 14, React Three Fiber, Zustand, TanStack Query │
├─────────────────────────────────────────────────┤
│  L5  API Gateway    │ FastAPI, 32 Routers, JWT Auth, OAuth2, SSE Streaming    │
├─────────────────────────────────────────────────┤
│  L4  Agent Engine   │ 10 Framework Adapters, LLM Router, Cowork, Moltbot     │
├─────────────────────────────────────────────────┤
│  L3  AI Tools       │ Document(25), Code(12), Web(17), Data(20), Media(36)   │
├─────────────────────────────────────────────────┤
│  L2  Memory System  │ Redis Short-term, PostgreSQL Long-term, pgvector       │
├─────────────────────────────────────────────────┤
│  L1  Infrastructure │ Docker, Kubernetes, CI/CD, Prometheus, Grafana, Loki   │
└─────────────────────────────────────────────────┘
```

---

## 10 Agentic AI Frameworks

| # | Framework | Description |
|---|-----------|-------------|
| 1 | **CrewAI** | 역할 기반 멀티 에이전트 크루, Sequential/Hierarchical 실행 |
| 2 | **LangGraph** | StateGraph 기반 에이전트, Anthropic/OpenAI 메시지 패싱 |
| 3 | **AutoGen** | RoundRobinGroupChat, 종료 조건 기반 멀티 에이전트 (Microsoft) |
| 4 | **Google ADK** | Gemini 2.0 Flash, 비동기 이벤트 스트리밍 |
| 5 | **OpenAI Agents** | Agent + Runner 패턴, 가드레일 기반 실행 |
| 6 | **Claude Agent** | Anthropic tool_use 에이전틱 루프 (최대 5 이터레이션) |
| 7 | **DSPy** | ChainOfThought 모듈, 자동 프롬프트 최적화 (Stanford) |
| 8 | **MetaGPT** | Role/Action SOP 패턴, 소프트웨어 개발 자동화 |
| 9 | **CAMEL-AI** | ChatAgent + ModelFactory, 역할극 협업 시스템 |
| 10 | **LlamaIndex** | AgentWorkflow + FunctionAgent, 듀얼 LLM 백엔드 |

---

## Tech Stack (Web Page)

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | - | 시맨틱 마크업 구조 |
| CSS3 | - | 글래스모피즘 다크 테마, 반응형 그리드 |
| JavaScript | ES6+ | i18n 시스템, 이벤트 처리, 카운터 |
| Three.js | r128 | 3D 파티클 배경 (WebGL) |
| GSAP | 3.12.5 | 스크롤 애니메이션, 트랜지션 |
| ScrollTrigger | 3.12.5 | 스크롤 연동 트리거 |
| Google Fonts | - | Outfit (제목), Inter (본문) |

---

## File Structure

```
webpage_NexusAI/
├── index.html                   # 메인 HTML (11개 섹션, 이중 언어 i18n)  828 lines
├── style.css                    # 글래스모피즘 다크 테마 스타일          1,441 lines
├── script.js                    # Three.js, GSAP, i18n, 카운터          616 lines
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages 자동 배포 워크플로
└── README.md                    # 프로젝트 문서 (이 파일)
```

**Total**: 2,885 lines (HTML + CSS + JS)

---

## Quick Start

### Local Development

```bash
# 저장소 클론
git clone https://github.com/wdlab1958/Webpage-NexusAI.git
cd Webpage-NexusAI

# 로컬 서버 실행 (Python)
python3 -m http.server 5500

# 브라우저에서 열기
# http://localhost:5500
```

### GitHub Pages (자동 배포)

`main` 브랜치에 푸시하면 GitHub Actions 워크플로가 자동으로 GitHub Pages에 배포합니다.

- **배포 URL**: [https://wdlab1958.github.io/Webpage-NexusAI/](https://wdlab1958.github.io/Webpage-NexusAI/)

---

## Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Primary (Cyan) | `#00b4d8` | `--clr-cyan` | 주 색상, 버튼, 링크, 프론트엔드/인프라 레이어 |
| Accent (Purple) | `#8b5cf6` | `--clr-purple` | 보조 색상, 에이전트 엔진, 오케스트레이션 |
| Companion (Pink) | `#f472b6` | `--clr-pink` | AI 도구, API 백엔드, 미디어 처리 |
| Success (Green) | `#10b981` | `--clr-green` | API 게이트웨이, 보안, 성공 상태 |
| Warning (Amber) | `#f59e0b` | `--clr-amber` | 메모리 시스템, 데이터 분석, 인프라 |
| Background | `#050608` | `--bg-dark` | 메인 페이지 배경 |
| Glass BG | `rgba(255,255,255,0.03)` | `--bg-glass` | 카드 배경 |
| Glass Border | `rgba(255,255,255,0.08)` | `--border-glass` | 카드 테두리 |
| Text Main | `#e8eaed` | `--text-main` | 주 텍스트 |
| Text Muted | `#9aa0a6` | `--text-muted` | 보조 텍스트 |

---

## Design Patterns

### Glassmorphism
- 모든 카드에 `backdrop-filter: blur(10-20px)` 적용
- 저 투명도 배경 (`rgba(255,255,255,0.03)`)
- 미세 테두리 (`rgba(255,255,255,0.08)`)
- 호버 시 `translateY(-5px)` + 박스 섀도우 강화

### Animations
| Animation | Type | Duration | Usage |
|-----------|------|----------|-------|
| Float | CSS keyframes | 6s infinite | 히어로 미니 아키텍처 |
| Bounce | CSS keyframes | 2s infinite | 스크롤 인디케이터 |
| Fade-in | GSAP ScrollTrigger | 0.6-0.7s | 모든 섹션 요소 |
| Stagger | GSAP | 0.06-0.1s delay | 그리드 카드 순차 등장 |
| Counter | IntersectionObserver | ~1.2s (40 steps) | 숫자 통계 애니메이션 |
| Hero entrance | GSAP timeline | 0.3-1.1s delay | 히어로 요소 순차 등장 |

### Responsive Breakpoints
| Breakpoint | Layout Changes |
|------------|----------------|
| > 1200px | 프레임워크 5열, 도구 5열, 기능 4열 |
| 1024-1200px | 프레임워크 3열, 도구 3열, 기능 3열 |
| 768-1024px | 프레임워크 2열, 도구 2열, 히어로 비주얼 숨김 |
| < 768px | 모든 그리드 1열, 모바일 네비게이션 |
| < 480px | 히어로 제목 축소, 섹션 패딩 감소 |

---

## i18n Translation System

웹 페이지는 한국어(KR)와 영어(EN) 이중 언어를 지원합니다.

- **번역 키**: 400+ (`data-i18n` 속성 기반)
- **전환 방식**: 네비게이션 바 KR/EN 토글 버튼
- **실시간 전환**: 페이지 리로드 없이 즉시 언어 변경
- **기본 언어**: 한국어 (KR)

### 번역 카테고리

| Category | Keys | Description |
|----------|------|-------------|
| Navigation | 7 | 네비게이션 메뉴 항목 |
| Hero | 12 | 히어로 섹션 제목/설명/통계 |
| Architecture | 8 | 아키텍처 레이어 이름 |
| Frameworks | 16 | 프레임워크 설명 + 기능 |
| Tools | 20 | 도구 카테고리/항목/보안 배지 |
| Features | 26 | 핵심 기능 제목/설명 |
| Advanced | 12 | 고급 모듈 설명 |
| Status | 9 | 구현 단계 이름 |
| Statistics | 10 | 통계 항목 라벨 |
| Versions | 7 | 버전 히스토리 설명 |
| Footer | 4 | 푸터 항목 |

---

## Related Projects

| Project | Description | Repository |
|---------|-------------|------------|
| **NEXUS AI** | 멀티 에이전트 오케스트레이션 플랫폼 (메인 프로젝트) | [NexusAI](https://github.com/wdlab1958/NexusAI) |
| **Web-AEGIS** | AEGIS 플랫폼 소개 웹 페이지 (디자인 참조) | [Webpage-AEGIS](https://github.com/wdlab1958/Webpage-AEGIS) |

---

## Deployment

### GitHub Pages (현재 배포 방식)

GitHub Actions 워크플로 (`.github/workflows/deploy.yml`)를 통해 `main` 브랜치 푸시 시 자동 배포됩니다.

```yaml
# 배포 트리거
on:
  push:
    branches: ["main"]

# 정적 파일 업로드 → GitHub Pages 배포
steps:
  - uses: actions/checkout@v4
  - uses: actions/configure-pages@v5
  - uses: actions/upload-pages-artifact@v3
  - uses: actions/deploy-pages@v4
```

### Alternative Deployment

```bash
# Nginx
sudo cp -r . /var/www/html/nexusai/

# Docker
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine

# Node.js (http-server)
npx http-server -p 5500
```

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Responsive |
| Mobile Safari | ✅ Responsive |

> WebGL이 지원되지 않는 환경에서는 Three.js 파티클 배경 대신 CSS 그라데이션 폴백이 적용됩니다.

---

## Author

Designed by **Brian Lee**

---

&copy; 2026 NEXUS AI Platform. All Rights Reserved.
