document.addEventListener('DOMContentLoaded', () => {
    // teamproject.html 상단 네비게이션 버튼 (스크롤 기능)
    const navButtons = document.querySelectorAll('nav button');

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // teamproject.html 내부 스크롤 기능은 이제 사용되지 않으므로,
            // 이 버튼들은 각 페이지로 이동하는 onclick 이벤트로 대체됩니다.
            // 따라서 이 JavaScript 리스너는 teamproject.html에서는 작동하지 않습니다.
            // 하지만 혹시 모를 다른 스크롤 기능이 추가될 경우를 대비해 코드는 남겨둡니다.
            const targetId = event.target.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // '더 알아보기' 버튼 클릭 시 teamproject.html의 intro 섹션으로 스크롤
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
