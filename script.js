document.addEventListener('DOMContentLoaded', () => {
    // 'page-move-btn' 클래스를 가진 모든 버튼을 선택합니다.
    const pageMoveButtons = document.querySelectorAll('.page-move-btn');

    // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
    pageMoveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 버튼의 'data-target' 속성에서 이동할 페이지 경로를 가져옵니다.
            const targetPage = button.dataset.target;
            if (targetPage) {
                location.href = targetPage; // 해당 페이지로 이동
            }
        });
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
