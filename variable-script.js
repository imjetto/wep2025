document.addEventListener('DOMContentLoaded', () => {
    // 모든 변수 개요 항목(클릭 가능한 배너)을 선택합니다.
    const overviewItems = document.querySelectorAll('.variable-overview-item');
    // 모든 상세 변수 정보 섹션을 선택합니다.
    const detailSections = document.querySelectorAll('.variable-detail-section');

    // 각 개요 항목에 클릭 이벤트 리스너를 추가합니다.
    overviewItems.forEach(item => {
        item.addEventListener('click', () => {
            // 클릭된 항목의 'data-variable' 속성 값을 가져옵니다.
            const targetVariable = item.dataset.variable;

            // 모든 상세 정보 섹션을 숨깁니다.
            detailSections.forEach(section => {
                section.classList.remove('active');
            });

            // 클릭된 항목에 해당하는 상세 정보 섹션을 찾아서 보여줍니다.
            const activeDetailSection = document.getElementById(`${targetVariable}-detail`);
            if (activeDetailSection) {
                activeDetailSection.classList.add('active');
                // 부드러운 스크롤 애니메이션
                activeDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
