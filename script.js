document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 버튼 이벤트 리스너
    document.getElementById('nav-cafe-btn').addEventListener('click', () => {
        location.href = 'cafe.html';
    });
    document.getElementById('nav-recipe-btn').addEventListener('click', () => {
        location.href = 'recipe.html';
    });
    document.getElementById('nav-variable-btn').addEventListener('click', () => {
        location.href = 'variable.html';
    });

    // 잡지식 코너 배너 버튼 이벤트 리스너
    document.getElementById('intro-cafe-btn').addEventListener('click', () => {
        location.href = 'cafe.html';
    });
    document.getElementById('intro-recipe-btn').addEventListener('click', () => {
        location.href = 'recipe.html';
    });
    document.getElementById('intro-variable-btn').addEventListener('click', () => {
        location.href = 'variable.html';
    });

    // '더 알아보기' 버튼 클릭 시 'intro' 섹션으로 스크롤
    const scrollBtn = document.getElementById('scrollBtn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const introSection = document.getElementById('intro');
            if (introSection) {
                introSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
