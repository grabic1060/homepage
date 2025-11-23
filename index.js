document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 기존 애니메이션 코드 (그대로 유지) ---
    const cards = document.querySelectorAll('.sitemap-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('hidden');
            card.classList.add('visible');
        }, index * 100);
    });

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. 다크 모드 기능 추가 (여기부터 새로 추가된 부분) ---
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;
    
    // 사용자의 선호 테마 확인 (저장된 값 우선, 없으면 시스템 설정 확인)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️'; // 다크모드니까 '해' 아이콘 보여주기 (끄라는 뜻)
    } else {
        themeBtn.textContent = '🌙'; // 라이트모드니까 '달' 아이콘 보여주기 (키라는 뜻)
    }

    // 버튼 클릭 이벤트
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // 현재 상태에 따라 아이콘 변경 및 저장
        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});
