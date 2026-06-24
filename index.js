// Project Data for Modals
const projectData = {
    "ssafy-feedback": {
        tag: "AI System Dev",
        title: "SSAFY AI 피드백 시스템 (aibot.ssafy.io)",
        client: "멀티캠퍼스 (SSAFY)",
        role: "AI 시스템 설계 및 풀스택 개발",
        duration: "2025.07 - 현재 (1년)",
        tech: "LLM (GPT-4), FastAPI, Python, React, Radar Charts, VectorDB",
        desc: "교육생들의 과목평가 코딩 및 서술형 답변을 분석하고, AI 기반의 자동 정밀 피드백을 제공하여 강사 개입을 최소화하면서도 고품질 튜터링을 제공하는 풀스택 AI 시스템입니다.",
        bullets: [
            "LLM 연동 및 프롬프트 엔지니어링을 설계하여 교육생 제출 코드/답안에 대한 상세 분석 및 피드백 자동 생성",
            "개념별 성적 분석 요약 및 레이더 차트 시각화: 수강생의 지식 부족 영역 자동 분류",
            "오답 분석에 기반한 동적 맞춤형 복습 퀴즈(Multiple-choice & Code snippet) 자동 생성 파이프라인 개발",
            "교육생들이 평가 개념에 대해 추가 질문할 수 있는 실시간 AI Chatbot 튜터 기능 탑재"
        ],
        images: [
            { path: "ai-feedback/feedback-admin.png", caption: "AI 피드백 시스템 - 최근 평가 등록 및 관리 현황 (관리자 페이지)" },
            { path: "ai-feedback/feedback-student.png", caption: "교육생 제공 AI 피드백 보고서 (오답 퀴즈 및 AI 튜터 챗봇)" },
            { path: "ai-feedback/feedback-report.png", caption: "개인별 과목평가 정밀 피드백 리포트 레이아웃" }
        ]
    },
    labhub: {
        tag: "AI System Dev",
        title: "LabHub 만족도 분석 시스템",
        client: "멀티캠퍼스 (SSAFY)",
        role: "만족도 분석 알고리즘 및 데이터 파이프라인 개발",
        duration: "2025.08 - 현재 (1년)",
        tech: "LLM Sentiment Analysis, Excel Parsing, Pandas, Python, Figma Prototyping",
        desc: "매주 실행되는 교육생 만족도 설문 엑셀 데이터에서 서술형 텍스트 피드백을 실시간 파싱하고, LLM 감성 분석 및 토픽 모형화를 통해 긍정/부정/특이사항을 자동 분류해 트랙별 만족도 대시보드에 시각화해주는 관리형 AI 시스템입니다.",
        bullets: [
            "대규모 만족도 설문 원천 데이터(.xlsx) 업로드 시 백엔드에서 비동기 처리하는 파일 관리 및 분석 상태 추적 파이프라인 개발",
            "수천 건의 수강생 자유 기술 주관식 문항을 LLM 기반 감성 분류(긍정/부정/특이사항) 및 대표 키워드 요약으로 가공",
            "트랙별(Python, Java, Embedded, Data 등) 주차별 만족도 변화 추이를 모니터링하는 인터랙티브 차트 대시보드 설계",
            "교육 운영진의 매주 피드백 리포트 작성 공수를 80% 이상 절감하는 효율성 달성"
        ],
        images: [
            { path: "ai-satisfaction/satisfaction-dashboard.png", caption: "LabHub 만족도 분석 시스템 - 주차별 만족도 변화 추이 시각화 대시보드" },
            { path: "ai-satisfaction/satisfaction-sentiment.png", caption: "만족도 조사 주관식 피드백 분석 (LLM 기반 트랙별 긍정/부정/특이사항 자동 키워드 분류)" },
            { path: "ai-satisfaction/satisfaction-files.png", caption: "만족도 엑셀 파일 관리 및 AI 분석 상태 진행률 모니터링" }
        ]
    },
    "ssafy-challenge": {
        tag: "AI Challenge",
        title: "SSAFY 대규모 Kaggle AI 챌린지 기획 및 운영",
        client: "멀티캠퍼스 (SSAFY)",
        role: "챌린지 총괄 디렉터 & 데이터셋 설계",
        duration: "SSAFY 14기 (2025) & 15기 (2026) 진행",
        tech: "Kaggle Platform, VQA (Visual Question Answering), Image Processing, Evaluation Metrics",
        desc: "SSAFY 교육생들의 인공지능 실무 역량 강화를 위해 900명 이상의 대규모 인원이 참가하는 Private Kaggle 경진대회를 설계하고 총괄 운영했습니다.",
        bullets: [
            "14기 VQA 챌린지: '이미지로 묻고, AI로 답하다' 멀티모달 VQA 모델 개발 (943명 참가, 2,977회 제출 기록)",
            "15기 재활용품 VQA 챌린지: 재활용 쓰레기 이미지 객체 식별 및 속성 질의응답 모델 개발 (901명 참가, 3,210회 제출 기록)",
            "스마트 팩토리 품질 이상 감지, 위성/환경 데이터 처리 등 실무 지향적 데이터셋 가공 및 평가 지표(Accuracy Score) 수립",
            "Kaggle 토론(Discussion) 및 리더보드 운영을 리드하여 교육생들이 자율적으로 협업하고 모델 성능을 갱신하는 학습 문화 구축"
        ],
        images: [
            { path: "ai-challenge/cohort-14/challenge-14.png", caption: "2025 SSAFY 14기 AI 챌린지 - 이미지 기반 질의응답(VQA) 모델 개발 경진대회 (Kaggle)" },
            { path: "ai-challenge/cohort-15/challenge-15.png", caption: "2026 SSAFY AI 챌린지 - 재활용 쓰레기 이미지 VQA 모델 개발 경진대회 (Kaggle)" }
        ]
    },
    samsung: {
        tag: "B2B Project",
        title: "삼성전자 신입/경력 프로그래밍 & AI 교육",
        client: "삼성전자 DS부문",
        role: "콘텐츠 기획 및 총괄 PM",
        duration: "6주 교육 과정 (매년 반복)",
        tech: "Python, Pandas, Git, SQL, EDA",
        desc: "삼성전자 DS부문에 새롭게 임용된 모든 신입/경력 직원을 위한 실무 지향적 데이터 분석 및 프로그래밍 교육 과정입니다. 코딩 기초부터 실제 반도체 데이터 조작 기법까지 연계되도록 구성했습니다.",
        bullets: [
            "수강생 역량 진단 모델을 설계해 기초/심화반 분리 운영 (효과적인 개인화 교육)",
            "Python 문법, Pandas 기초, 자료구조, 자동화 업무 스크립트 실습 콘텐츠 자체 기획 및 설계",
            "비개발 부서를 위한 Citizen Developer 트랙 추가: 노코드 툴, SQL, 데이터 시각화 커리큘럼 설계",
            "프로그래밍 교육의 진입장벽을 낮추고 현업 활용 만족도 90% 이상 획득"
        ]
    },
    sk: {
        tag: "B2B Project",
        title: "SK mySUNI CDS & Guided Project",
        client: "SK 그룹 (SKT, SK하이닉스 등)",
        role: "현업 데이터 PoC 설계 및 교육 PM",
        duration: "연간 정기 업데이트 프로젝트",
        tech: "Python, Pandas, Machine Learning, RAG",
        desc: "SK 그룹 전사의 Citizen Data Scientist(CDS) 역량 강화 교육과정 및 각 관계사별 실무 데이터를 활용한 머신러닝 PoC(개념검증) 기반의 Guided Project입니다.",
        bullets: [
            "비개발 직군을 대상으로 파이썬 기초부터 머신러닝 예측 모델 빌딩까지 단계별 학습 경로 구축",
            "SKT, SK하이닉스 등 각사 보안 가이드라인 내에서 가공된 Raw Data를 수집 및 비식별화 처리",
            "실제 실무에서 발생하는 분석 주제를 토대로 PoC 가이드라인 설계 및 평가 데이터셋 생성",
            "Guided Project 결과물 성적 분석 및 상위 우수자 예측 모델 설계 보고서 그룹 제공"
        ]
    },
    lg: {
        tag: "B2B Project",
        title: "LG이노텍 PBL 및 LG AI연구원 심화 이론 교육",
        client: "LG 그룹 (LG이노텍, LG AI연구원)",
        role: "콘텐츠 디렉팅 및 교수진 운영 PM",
        duration: "16주 장기 교육 모델",
        tech: "PyTorch, Computer Vision, Anomaly Detection",
        desc: "LG이노텍 제조 현장의 생산 데이터를 적용한 Project-Based Learning(PBL) 과정과 LG AI연구원의 정통 딥러닝 이론/모델링 과정을 통합 리드했습니다.",
        bullets: [
            "제조 현장의 기판/광학 장비 이미지를 사용한 불량·양품 판정 및 이상치 탐지 실습 설계",
            "도면 이미지 내 렌즈 수 자동 식별과 같은 정합성 검증 컴퓨터 비전 문제 기획",
            "LG AI연구원 대상 16주 석박사급 고급이론(통계, 최적화 이론, NLP, CV 최신동향) 대학 연계 기획",
            "실무 난이도가 높은 제조 엔지니어들에게 현업 솔루션 PoC 역할을 성공적으로 수행"
        ]
    },
    rag: {
        tag: "B2C AI Course",
        title: "LangChain & LangGraph RAG 실무 교육과정",
        client: "자체 B2C 유료 콘텐츠",
        role: "커리큘럼 설계 및 강사",
        duration: "온라인 VOD & 실습 런칭",
        tech: "LangChain, LangGraph, LLM Agent, FastAPI, VectorDB",
        desc: "최신 LLM 응용 아키텍처 핵심인 RAG(검색증강생성)와 Multi-Agent 시스템 개발 능력을 실무 관점에서 배울 수 있는 프리미엄 B2C 인공지능 교육 코스를 단독 기획했습니다.",
        bullets: [
            "기본적인 텍스트 검색을 넘어 하이브리드 검색, 임베딩 최적화 기법 등 고급 RAG 기술 다룸",
            "LangGraph 프레임워크를 기반으로 상태 관리가 가능한 AI 워크플로우 및 멀티 에이전트 시스템 구현 실습 제공",
            "FastAPI와 Gradio/Streamlit 프레임워크를 연동하여 완성도 높은 AI 웹 서비스 프로토타입 배포 실습 구성",
            "RAG 시스템 구축 시 발생하는 환각(Hallucination) 방지 및 프롬프트 엔지니어링 가이드라인 제시"
        ]
    },
    chatgpt: {
        tag: "B2C AI Course",
        title: "ChatGPT 생산성 및 프롬프트 엔지니어링 마스터",
        client: "자체 B2C 유료 콘텐츠",
        role: "콘텐츠 전담 기획 및 제작 리더",
        duration: "4개 VOD 시리즈 런칭",
        tech: "Prompt Engineering, Gradio, Streamlit, LLM API",
        desc: "대중들이 생성형 AI를 실제 업무 자동화와 생산성 향상에 바로 적용할 수 있도록 설계된 실천 중심 교육 콘텐츠입니다.",
        bullets: [
            "프롬프트 엔지니어링의 주요 기법(Few-shot, CoT, ReAct)을 시나리오 중심 실습으로 강의 자료 기획",
            "비개발자가 GPT-4 API와 Streamlit/Gradio를 연동해 하루 만에 개인용 업무 툴을 빌드하는 패키지 제공",
            "PDF 문서 자동 요약기, 크롤링 데이터 자동 보고서 생성기 등 흥미로운 실무 시나리오 개발",
            "트렌디하고 파급력 있는 주제 선정으로 수천 명의 온라인 유료 수강생 이탈률 최소화 달성"
        ]
    },
    "lg-aimers": {
        tag: "AI Challenge",
        title: "LG Aimers AI 해커톤 운영 총괄",
        client: "LG AI 연구원 주최",
        role: "대회 기획 및 예·본선 출제 총괄 PM",
        duration: "5개 기수 중 2개 기수 총괄 운영",
        tech: "Platform Infra, Machine Learning Evaluation, NLP/CV",
        desc: "청년 AI 인재 양성을 주도하는 국내 최대 규모의 AI 해커톤(약 3,000명 지원)의 문항 기획, 평가 검수 및 본선 운영을 완수했습니다.",
        bullets: [
            "LG 전 계열사가 당면한 실무 과제를 변형하여 예선 및 본선 해커톤 문제 시나리오 설계",
            "약 3,000명의 동시 평가가 지연 없이 진행되도록 플랫폼 시스템 및 검수 파이프라인 조율",
            "대회 문제 오류를 제로화하기 위한 5단계의 데이터 검증 프로세스 구축",
            "1박 2일 오프라인 본선 현장 관리와 네트워킹 리포트, 참가자 분석 대시보드 리포팅"
        ]
    },
    maicon: {
        tag: "AI Challenge",
        title: "국방인공지능경진대회 (MAICON) 기획 및 운영",
        client: "국방부 주관 / 과기정통부 공동주최",
        role: "예·본선 문제 개발 및 오프라인 PM",
        duration: "연간 해커톤 운영",
        tech: "PyTorch, Image Segmentation, Time-series, GPU Cluster",
        desc: "군 내 장병 및 일반인을 대상으로 국방 혁신과 스마트 강군 구축을 위한 우수 AI 인재를 선발하는 1,000명 규모의 공공 챌린지입니다.",
        bullets: [
            "군 의료 이미지 분석(이상징후 감지), 스마트 레이더 시그널 감지 등 공공 국방 도메인 문제 설계",
            "장병 부문과 일반인 부문으로 분리 운영하여 부문별 난이도 튜닝 및 베이스라인 코드 작성 제공",
            "오프라인 본선 현장 GPU 서버 할당 및 실시간 랭킹 평가 모니터링",
            "국방부 장관상 및 과기정통부 장관상 시상 연계 운영 성공"
        ]
    },
    kasi: {
        tag: "AI Challenge",
        title: "한국천문연구원-KAIST 천문우주 AI 경진대회",
        client: "한국천문연구원, KAIST 주최",
        role: "데이터 정제 및 예·본선 기획 PM",
        duration: "단기 챌린지 기획",
        tech: "Computer Vision, Object Detection, Space Image Data",
        desc: "우주 과학 데이터 접근성을 넓히고 AI 융합 연구를 장려하기 위해 실제 천문 이미지 위성 관측 데이터를 가공해 대회를 주관했습니다.",
        bullets: [
            "태양 코로나 이미지 분류 및 홍염 폭발 등 태양 우주 환경의 이상 현상을 식별하는 컴퓨터 비전 문제 출제",
            "고용량 천문 원천 관측 데이터(FITS)를 분석용 PNG/NumPy 파일 형태로 변환 가공",
            "KAIST 및 천문연 전문가단과의 협업을 거쳐 평가 매트릭스(mAP) 설계 및 기준선 제시",
            "우주 이미지 이상치 탐지의 정밀도가 실무 적용 수준에 도달함을 PoC로 입증"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Hero Dashboard Widget Tabs
    const widgetBtns = document.querySelectorAll('.widget-tab-btn');
    const widgetContents = document.querySelectorAll('.widget-tab-content');
    
    widgetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            widgetBtns.forEach(b => b.classList.remove('active'));
            widgetContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetId = `widget-${btn.getAttribute('data-widget')}`;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        
        // Close menu on nav item click
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // 2. Project Tabs Filter
    const tabBtns = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // 3. Modal Popup Management
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    
    const openModal = (projectId) => {
        const data = projectData[projectId];
        if (!data) return;
        
        const bulletsHtml = data.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        
        let imagesHtml = '';
        if (data.images && data.images.length > 0) {
            imagesHtml = `
                <h3>프로젝트 실무 스크린샷</h3>
                <div class="modal-gallery">
                    ${data.images.map(img => `
                        <div class="gallery-item">
                            <img src="${encodeURI(img.path)}" alt="${img.caption}" class="modal-img">
                            <span class="img-caption">${img.caption}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        modalBody.innerHTML = `
            <span class="modal-tag">${data.tag}</span>
            <h2>${data.title}</h2>
            <div class="modal-meta-grid">
                <div class="modal-meta-item">
                    <span>고객사 / 주최</span>
                    ${data.client}
                </div>
                <div class="modal-meta-item">
                    <span>수행 역할</span>
                    ${data.role}
                </div>
                <div class="modal-meta-item">
                    <span>개발 기간 / 주기</span>
                    ${data.duration}
                </div>
                <div class="modal-meta-item">
                    <span>주요 기술</span>
                    ${data.tech}
                </div>
            </div>
            <h3>과정 및 프로젝트 요약</h3>
            <p>${data.desc}</p>
            <h3>핵심 성과 및 수행 내역</h3>
            <ul>
                ${bulletsHtml}
            </ul>
            ${imagesHtml}
        `;
        
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Stop body scrolling
    };
    
    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Restore body scrolling
    };
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            openModal(projectId);
        });
    });
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 5. Navigation Spy (Highlight active item in header)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    const updateActiveNav = () => {
        let currentSectionId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop - 200) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check

    // 6. Stats Count Up Animation
    const statsElements = document.querySelectorAll('.stat-num');
    let animatedStats = false;
    
    const animateStats = () => {
        if (animatedStats) return;
        
        statsElements.forEach(el => {
            const targetStr = el.getAttribute('data-target');
            let targetNum = parseInt(targetStr.replace(/[^0-9]/g, ''));
            let current = 0;
            let increment = Math.max(1, Math.floor(targetNum / 30));
            let speed = 40;
            
            const isPercentOrPlus = targetStr.includes('+') ? '+' : (targetStr.includes('회') ? '회' : '');
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNum) {
                    current = targetNum;
                    clearInterval(timer);
                }
                
                // Format numbers with comma
                let displayVal = current.toLocaleString() + isPercentOrPlus;
                el.textContent = displayVal;
            }, speed);
        });
        
        animatedStats = true;
    };
    
    // Trigger when stats card is in viewport
    const statsCard = document.querySelector('.stats-card');
    if (statsCard) {
        const checkStatsScroll = () => {
            const rect = statsCard.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                animateStats();
                window.removeEventListener('scroll', checkStatsScroll);
            }
        };
        window.addEventListener('scroll', checkStatsScroll);
        checkStatsScroll(); // Initial check
    }

});
