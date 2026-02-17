/* ========================================
   NEXUS AI - Introduction Webpage
   JavaScript: Three.js Particles, GSAP
   Animations, i18n, Counter
   ======================================== */

// ========== i18n TRANSLATIONS ==========
const translations = {
    ko: {
        // Navigation
        nav_architecture: '아키텍처',
        nav_frameworks: '프레임워크',
        nav_tools: 'AI 도구',
        nav_features: '기능',
        nav_techstack: '기술 스택',
        nav_status: '구현 상태',
        nav_stats: '통계',

        // Hero
        hero_badge: 'v2.1.0 프로덕션 레디',
        hero_title_1: 'Multi-Agent',
        hero_title_2: 'AI Platform',
        hero_subtitle: '10개의 Agentic AI 프레임워크를 통합한 프로덕션급 멀티 에이전트 오케스트레이션 시스템. 하이브리드 LLM 라우팅, 고급 메모리 시스템, 엔터프라이즈급 인프라를 제공합니다.',
        hero_btn_explore: '아키텍처 탐색',
        hero_btn_frameworks: '프레임워크 보기',
        stat_frameworks: 'AI 프레임워크',
        stat_tools: 'AI 도구',
        stat_endpoints: 'API 엔드포인트',
        stat_loc: '코드 라인',
        stat_pages: '대시보드 페이지',
        stat_phases: '완료된 단계',
        scroll_down: '아래로 스크롤',

        // Architecture
        arch_title: '시스템 아키텍처',
        arch_desc: '6개의 레이어로 구성된 프로덕션급 멀티 에이전트 플랫폼',
        arch_l6: '프론트엔드',
        arch_l5: 'API 게이트웨이',
        arch_l4: '멀티 에이전트 엔진',
        arch_l3: 'AI 도구 라이브러리',
        arch_l2: '메모리 시스템',
        arch_l1: '인프라스트럭처',

        // Frameworks
        fw_title: '10 Agentic AI 프레임워크',
        fw_desc: 'FrameworkAdapter 패턴으로 통합된 차세대 멀티 에이전트 프레임워크',
        fw_crewai: '역할 기반 멀티 에이전트 크루, Sequential/Hierarchical 실행',
        fw_langgraph: 'StateGraph 기반 에이전트, Anthropic/OpenAI 메시지 패싱',
        fw_autogen: 'RoundRobinGroupChat, 종료 조건 기반 멀티 에이전트 (Microsoft)',
        fw_google_adk: 'Gemini 2.0 Flash, 비동기 이벤트 스트리밍',
        fw_openai: 'Agent + Runner 패턴, 가드레일 기반 실행',
        fw_claude: 'Anthropic tool_use 에이전틱 루프 (최대 5 이터레이션)',
        fw_dspy: 'ChainOfThought 모듈, 자동 프롬프트 최적화 (Stanford)',
        fw_metagpt: 'Role/Action SOP 패턴, 소프트웨어 개발 자동화',
        fw_camel: 'ChatAgent + ModelFactory, 역할극 협업 시스템',
        fw_llamaindex: 'AgentWorkflow + FunctionAgent, 듀얼 LLM 백엔드',
        fw_feat_registry: 'Adapter Registry',
        fw_feat_registry_desc: 'Lazy-loaded 디스커버리, get_adapter(), list_frameworks()',
        fw_feat_fallback: 'Smart Fallback',
        fw_feat_fallback_desc: '사용 불가 프레임워크 자동 Direct LLM 실행 전환',
        fw_feat_frontend: 'Frontend Integration',
        fw_feat_frontend_desc: 'AgentBuilder 프레임워크 셀렉터 + i18n (en/ko)',

        // Tools
        tools_title: '110+ AI 도구 라이브러리',
        tools_desc: '5개 카테고리에 걸친 프로덕션급 AI 도구',
        tool_doc: '문서 처리',
        tool_doc_converter: '문서 변환기',
        tool_doc_metadata: '메타데이터 추출',
        tool_code: '코드 실행',
        tool_code_analyzer: '코드 분석기',
        tool_web: '웹 도구',
        tool_web_screenshot: '스크린샷 도구',
        tool_data: '데이터 분석',
        tool_data_viz: '시각화 (7종 차트)',
        tool_data_stats: '통계 분석',
        tool_data_transform: '데이터 변환',
        tool_media: '미디어 처리',
        tool_media_image: '이미지 처리 (Pillow)',
        tool_media_video: '비디오 처리 (FFmpeg)',
        tool_media_audio: '오디오 처리',
        tool_media_format: '30+ 포맷 지원',
        tools_security_title: '보안 기능',
        badge_docker: 'Docker 샌드박스 격리',
        badge_resource: '메모리/CPU 제한',
        badge_network: '네트워크 비활성화',
        badge_command: '위험 명령 차단',
        badge_whitelist: '명령어 화이트리스트',

        // Features
        feat_title: '핵심 기능',
        feat_desc: '엔터프라이즈급 AI 플랫폼의 주요 기능',
        feat_hybrid_llm: '하이브리드 LLM 라우팅',
        feat_hybrid_llm_desc: '민감 데이터 감지 시 로컬 LLM 자동 전환, 한국어 감지 시 EXAONE, 작업 복잡도 기반 라우팅',
        feat_memory: '3-Layer 메모리 시스템',
        feat_memory_desc: 'Redis 단기 기억 (24h TTL), PostgreSQL+pgvector 장기 기억, 시맨틱 검색 및 자동 승격',
        feat_security: '엔터프라이즈 보안',
        feat_security_desc: 'JWT 인증, OAuth2 (Google, GitHub, Kakao, Naver), Docker 샌드박스, 명령 안전 검증',
        feat_voice: '음성 인터페이스',
        feat_voice_desc: 'OpenAI Whisper STT, 6종 음성 TTS, 12개 언어 번역 지원',
        feat_multimodal: '멀티모달 AI',
        feat_multimodal_desc: 'Claude Vision API 이미지 분석, 비디오/오디오 처리 및 트랜스크립션',
        feat_plugin: '플러그인 시스템',
        feat_plugin_desc: '동적 플러그인 로딩, 서드파티 마켓플레이스, 플러그인 실행 및 관리',
        feat_analytics: '고급 분석',
        feat_analytics_desc: '사용량 추적, 기능 분석, 실시간 메트릭 대시보드, 성장 지표',
        feat_whitelabel: '화이트라벨 솔루션',
        feat_whitelabel_desc: '커스텀 브랜딩/테마, 커스텀 도메인, 멀티테넌트 배포',
        feat_collab: '협업 에이전트',
        feat_collab_desc: '멀티 에이전트 워크플로, 역할 기반 조율, 병렬 실행, 종속성 관리',
        feat_autonomous: '자율 워크플로',
        feat_autonomous_desc: '자가 개선 에이전트, 실행 이력 학습, 자동 워크플로 최적화',
        feat_finetune: '파인튜닝 파이프라인',
        feat_finetune_desc: '커스텀 모델 학습, 데이터셋 관리, 학습 모니터링, 모델 배포',
        feat_i18n: '국제화 (i18n)',
        feat_i18n_desc: '40개 대시보드 페이지 en/ko 완전 지원, 로케일당 1,594개 번역 키',

        // Advanced
        adv_title: '고급 모듈',
        adv_desc: 'Moltbot 대화 관리 + 향상된 Cowork 실행 시스템',
        adv_moltbot: 'Moltbot 대화 관리',
        adv_moltbot_intent: '의도 분류 (12+ 내장 인텐트)',
        adv_moltbot_entity: '엔티티 추출 (인물, 날짜, 이메일, URL 등)',
        adv_moltbot_sentiment: '감성 분석 및 감정 감지',
        adv_moltbot_context: '멀티턴 컨텍스트 추적 (Redis 기반)',
        adv_cowork: 'Enhanced Cowork 실행',
        adv_cowork_plan: 'LLM 기반 지능형 작업 플래닝',
        adv_cowork_parallel: '종속성 인식 병렬 실행',
        adv_cowork_checkpoint: '멀티레벨 체크포인트 시스템',
        adv_cowork_stream: '실시간 진행 스트리밍',
        mcp_title: 'MCP 통합 (Model Context Protocol)',

        // Tech Stack
        tech_title: '기술 스택',
        tech_desc: '최신 기술로 구축된 프로덕션급 플랫폼',

        // Status
        status_title: '구현 상태',
        status_desc: '전체 진행률: 100% (6/6 단계 완료)',
        phase0: '프로젝트 초기화',
        phase1: '에이전트 엔진 코어',
        phase2: 'AI 도구 라이브러리',
        phase3: 'API 백엔드',
        phase4: '프론트엔드',
        phase5: '고급 기능',
        phase6: '인프라 & 배포',

        // Statistics
        stats_title: '프로젝트 통계',
        stats_desc: 'NEXUS AI 플랫폼의 핵심 수치',
        stat_files: '프로덕션 파일',
        stat_total_loc: '코드 라인 (LOC)',
        stat_routers: 'API 라우터',
        stat_api_endpoints: 'API 엔드포인트',
        stat_fw_adapters: '프레임워크 어댑터',
        stat_ai_tools: 'AI 도구',
        stat_dashboard: '대시보드 페이지',
        stat_i18n_keys: 'i18n 키 (로케일당)',
        server_title: '서버 구성',

        // Versions
        ver_title: '버전 히스토리',
        ver_desc: 'NEXUS AI 플랫폼의 발전 과정',
        ver_latest: '최신',
        ver_210: '10개 Agentic AI 프레임워크 통합, FrameworkAdapter 패턴, Smart Fallback',
        ver_200: '멀티모달, 협업 에이전트, 플러그인, 분석, 화이트라벨, i18n 완성',
        ver_160: '한국 OAuth (카카오/네이버), 음성 인터페이스, Phase 6 인프라 완성',
        ver_150: 'Kubernetes 배포, CI/CD 파이프라인, Prometheus + Grafana 모니터링',
        ver_140: '5개 프로덕션 워크스페이스, 110+ 도구 UI, Phase 4 프론트엔드 완성',

        // Footer
        footer_desc: 'Production-grade Multi-Agent Orchestration Platform',
        footer_badge_verified: '100% 검증 완료',
        footer_quicklinks: '빠른 링크',
        footer_techstack: '기술 스택'
    },
    en: {
        // Navigation
        nav_architecture: 'Architecture',
        nav_frameworks: 'Frameworks',
        nav_tools: 'AI Tools',
        nav_features: 'Features',
        nav_techstack: 'Tech Stack',
        nav_status: 'Status',
        nav_stats: 'Statistics',

        // Hero
        hero_badge: 'v2.1.0 Production-Ready',
        hero_title_1: 'Multi-Agent',
        hero_title_2: 'AI Platform',
        hero_subtitle: 'Production-grade multi-agent orchestration system integrating 10 agentic AI frameworks with hybrid LLM routing, advanced memory systems, and enterprise-ready infrastructure.',
        hero_btn_explore: 'Explore Architecture',
        hero_btn_frameworks: 'View Frameworks',
        stat_frameworks: 'AI Frameworks',
        stat_tools: 'AI Tools',
        stat_endpoints: 'API Endpoints',
        stat_loc: 'Lines of Code',
        stat_pages: 'Dashboard Pages',
        stat_phases: 'Phases Complete',
        scroll_down: 'Scroll Down',

        // Architecture
        arch_title: 'System Architecture',
        arch_desc: 'Production-grade multi-agent platform with 6-layer architecture',
        arch_l6: 'Frontend',
        arch_l5: 'API Gateway',
        arch_l4: 'Multi-Agent Engine',
        arch_l3: 'AI Tools Library',
        arch_l2: 'Memory System',
        arch_l1: 'Infrastructure',

        // Frameworks
        fw_title: '10 Agentic AI Frameworks',
        fw_desc: 'Next-generation multi-agent frameworks unified through FrameworkAdapter pattern',
        fw_crewai: 'Role-based multi-agent crews with Sequential/Hierarchical execution',
        fw_langgraph: 'StateGraph-based agent with Anthropic/OpenAI message passing',
        fw_autogen: 'RoundRobinGroupChat with termination conditions (Microsoft)',
        fw_google_adk: 'Gemini 2.0 Flash with async event streaming',
        fw_openai: 'Agent + Runner pattern with guardrails',
        fw_claude: 'Anthropic tool_use agentic loop (max 5 iterations)',
        fw_dspy: 'ChainOfThought module with automatic prompt optimization (Stanford)',
        fw_metagpt: 'Role/Action SOP pattern for software development automation',
        fw_camel: 'ChatAgent + ModelFactory for role-play collaboration',
        fw_llamaindex: 'AgentWorkflow + FunctionAgent with dual LLM backend',
        fw_feat_registry: 'Adapter Registry',
        fw_feat_registry_desc: 'Lazy-loaded discovery, get_adapter(), list_frameworks()',
        fw_feat_fallback: 'Smart Fallback',
        fw_feat_fallback_desc: 'Unavailable frameworks auto-fallback to Direct LLM execution',
        fw_feat_frontend: 'Frontend Integration',
        fw_feat_frontend_desc: 'AgentBuilder framework selector with i18n (en/ko)',

        // Tools
        tools_title: '110+ AI Tools Library',
        tools_desc: 'Production-ready AI tools across 5 categories',
        tool_doc: 'Document Processing',
        tool_doc_converter: 'Document Converter',
        tool_doc_metadata: 'Metadata Extraction',
        tool_code: 'Code Execution',
        tool_code_analyzer: 'Code Analyzer',
        tool_web: 'Web Tools',
        tool_web_screenshot: 'Screenshot Tool',
        tool_data: 'Data Analysis',
        tool_data_viz: 'Visualization (7 Chart Types)',
        tool_data_stats: 'Statistical Analysis',
        tool_data_transform: 'Data Transformation',
        tool_media: 'Media Processing',
        tool_media_image: 'Image Processing (Pillow)',
        tool_media_video: 'Video Processing (FFmpeg)',
        tool_media_audio: 'Audio Processing',
        tool_media_format: '30+ Format Support',
        tools_security_title: 'Security Features',
        badge_docker: 'Docker Sandbox Isolation',
        badge_resource: 'Memory/CPU Limits',
        badge_network: 'Network Disabled',
        badge_command: 'Dangerous Command Block',
        badge_whitelist: 'Command Whitelist',

        // Features
        feat_title: 'Core Features',
        feat_desc: 'Key capabilities of the enterprise-grade AI platform',
        feat_hybrid_llm: 'Hybrid LLM Routing',
        feat_hybrid_llm_desc: 'Auto-switch to local LLM for sensitive data, EXAONE for Korean, complexity-based routing',
        feat_memory: '3-Layer Memory System',
        feat_memory_desc: 'Redis short-term (24h TTL), PostgreSQL+pgvector long-term, semantic search with auto-promotion',
        feat_security: 'Enterprise Security',
        feat_security_desc: 'JWT auth, OAuth2 (Google, GitHub, Kakao, Naver), Docker sandbox, command safety validation',
        feat_voice: 'Voice Interface',
        feat_voice_desc: 'OpenAI Whisper STT, 6 voice TTS options, 12 language translation support',
        feat_multimodal: 'Multi-modal AI',
        feat_multimodal_desc: 'Claude Vision API image analysis, video/audio processing and transcription',
        feat_plugin: 'Plugin System',
        feat_plugin_desc: 'Dynamic plugin loading, third-party marketplace, plugin execution and management',
        feat_analytics: 'Advanced Analytics',
        feat_analytics_desc: 'Usage tracking, feature analytics, real-time metrics dashboard, growth metrics',
        feat_whitelabel: 'White-label Solution',
        feat_whitelabel_desc: 'Custom branding/themes, custom domain, multi-tenant deployment',
        feat_collab: 'Collaborative Agents',
        feat_collab_desc: 'Multi-agent workflows, role-based coordination, parallel execution, dependency management',
        feat_autonomous: 'Autonomous Workflows',
        feat_autonomous_desc: 'Self-improving agents, learning from execution history, automatic workflow optimization',
        feat_finetune: 'Fine-tuning Pipeline',
        feat_finetune_desc: 'Custom model training, dataset management, training monitoring, model deployment',
        feat_i18n: 'Internationalization (i18n)',
        feat_i18n_desc: 'Full en/ko support across 40 dashboard pages, 1,594 translation keys per locale',

        // Advanced
        adv_title: 'Advanced Modules',
        adv_desc: 'Moltbot Dialog Management + Enhanced Cowork Execution System',
        adv_moltbot: 'Moltbot Dialog Management',
        adv_moltbot_intent: 'Intent Classification (12+ built-in intents)',
        adv_moltbot_entity: 'Entity Extraction (person, date, email, URL, etc.)',
        adv_moltbot_sentiment: 'Sentiment Analysis with Emotion Detection',
        adv_moltbot_context: 'Multi-turn Context Tracking (Redis-backed)',
        adv_cowork: 'Enhanced Cowork Execution',
        adv_cowork_plan: 'LLM-powered Intelligent Task Planning',
        adv_cowork_parallel: 'Dependency-aware Parallel Execution',
        adv_cowork_checkpoint: 'Multi-level Checkpoint System',
        adv_cowork_stream: 'Real-time Progress Streaming',
        mcp_title: 'MCP Integration (Model Context Protocol)',

        // Tech Stack
        tech_title: 'Tech Stack',
        tech_desc: 'Production-grade platform built with modern technologies',

        // Status
        status_title: 'Implementation Status',
        status_desc: 'Total Progress: 100% (6/6 Phases Complete)',
        phase0: 'Project Initialization',
        phase1: 'Agent Engine Core',
        phase2: 'AI Tools Library',
        phase3: 'API Backend',
        phase4: 'Frontend',
        phase5: 'Advanced Features',
        phase6: 'Infrastructure & Deployment',

        // Statistics
        stats_title: 'Project Statistics',
        stats_desc: 'Key metrics of the NEXUS AI platform',
        stat_files: 'Production Files',
        stat_total_loc: 'Lines of Code',
        stat_routers: 'API Routers',
        stat_api_endpoints: 'API Endpoints',
        stat_fw_adapters: 'Framework Adapters',
        stat_ai_tools: 'AI Tools',
        stat_dashboard: 'Dashboard Pages',
        stat_i18n_keys: 'i18n Keys (per locale)',
        server_title: 'Server Configuration',

        // Versions
        ver_title: 'Version History',
        ver_desc: 'Evolution of the NEXUS AI Platform',
        ver_latest: 'Latest',
        ver_210: '10 Agentic AI Frameworks, FrameworkAdapter Pattern, Smart Fallback',
        ver_200: 'Multimodal, Collaborative Agents, Plugins, Analytics, White-label, i18n',
        ver_160: 'Korean OAuth (Kakao/Naver), Voice Interface, Phase 6 Infrastructure',
        ver_150: 'Kubernetes Deploy, CI/CD Pipeline, Prometheus + Grafana Monitoring',
        ver_140: '5 Production Workspaces, 110+ Tools UI, Phase 4 Frontend Complete',

        // Footer
        footer_desc: 'Production-grade Multi-Agent Orchestration Platform',
        footer_badge_verified: '100% Verified',
        footer_quicklinks: 'Quick Links',
        footer_techstack: 'Tech Stack'
    }
};

let currentLang = 'ko';

function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
}

// ========== THREE.JS PARTICLE BACKGROUND ==========
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    let scene, camera, renderer, particles;
    let mouseX = 0, mouseY = 0;

    try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 400;

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particles
        const count = 1200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorCyan = new THREE.Color(0x00b4d8);
        const colorPurple = new THREE.Color(0x8b5cf6);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 1000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 600;

            const mix = Math.random();
            const color = colorCyan.clone().lerp(colorPurple, mix);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.0008;
            particles.rotation.x += 0.0004;
            camera.position.x += (mouseX * 30 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 30 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        }
        animate();
    } catch (e) {
        // Fallback: CSS gradient background
        canvas.style.display = 'none';
        document.body.style.background = 'radial-gradient(ellipse at 30% 20%, rgba(0, 180, 216, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%), #050608';
    }
}

// ========== GSAP ANIMATIONS ==========
function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance animations
    gsap.from('.hero-badge', { opacity: 0, y: 30, duration: 0.8, delay: 0.3 });
    gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1, delay: 0.5 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, delay: 0.7 });
    gsap.from('.hero-buttons', { opacity: 0, y: 20, duration: 0.8, delay: 0.9 });
    gsap.from('.hero-stats .stat-item', {
        opacity: 0, y: 20, duration: 0.6,
        stagger: 0.1, delay: 1.1
    });
    gsap.from('.arch-mini-layer', {
        opacity: 0, x: 40, duration: 0.6,
        stagger: 0.1, delay: 0.8
    });

    // Scroll-triggered fade-in for all .fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Stagger for grid items
    const staggerGroups = [
        { selector: '.arch-row', stagger: 0.08 },
        { selector: '.fw-card', stagger: 0.06 },
        { selector: '.tool-card', stagger: 0.08 },
        { selector: '.feature-card', stagger: 0.06 },
        { selector: '.status-card', stagger: 0.08 },
        { selector: '.stat-card', stagger: 0.08 },
        { selector: '.timeline-item', stagger: 0.1 }
    ];

    staggerGroups.forEach(group => {
        const elements = document.querySelectorAll(group.selector);
        if (elements.length === 0) return;

        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: group.stagger,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: elements[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                if (isNaN(target)) return;

                let current = 0;
                const steps = 40;
                const increment = target / steps;
                const interval = 30;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.round(current).toLocaleString();
                }, interval);

                counterObserver.unobserve(el);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-count]').forEach(el => {
        counterObserver.observe(el);
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile nav
                const navLinks = document.getElementById('nav-links');
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });
}

// ========== MOBILE NAV TOGGLE ==========
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initAnimations();
    initCounters();
    initSmoothScroll();
    initMobileNav();

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Refresh ScrollTrigger on page show (back/forward navigation)
    window.addEventListener('pageshow', () => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });
});
