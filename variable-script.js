// DOMContentLoaded 이벤트는 HTML 문서가 완전히 로드되고 파싱되었을 때 발생합니다.
document.addEventListener('DOMContentLoaded', () => {
    // 모든 추출 변수 개요 항목(클릭 가능한 배너)을 선택합니다.
    const overviewItems = document.querySelectorAll('.variable-overview-item');
    // 모든 상세 추출 변수 정보 섹션을 선택합니다.
    const detailSections = document.querySelectorAll('.variable-detail-section');

    // 각 개요 항목에 클릭 이벤트 리스너를 추가합니다.
    overviewItems.forEach(item => {
        item.addEventListener('click', () => {
            // 클릭된 항목의 'data-variable' 속성 값을 가져옵니다.
            // 이 값은 보여줄 상세 정보 섹션의 ID 접두사로 사용됩니다.
            const targetVariable = item.dataset.variable; // 예: 'dose'

            // 모든 상세 정보 섹션을 숨깁니다.
            detailSections.forEach(section => {
                section.classList.remove('active'); // CSS에서 'display: none'을 'display: block'으로 변경
            });

            // 클릭된 항목에 해당하는 상세 정보 섹션을 찾아서 보여줍니다.
            const activeDetailSection = document.getElementById(`${targetVariable}-detail`); // 예: 'dose-detail'
            if (activeDetailSection) {
                activeDetailSection.classList.add('active');
                // 상세 정보 섹션으로 스크롤 (선택 사항)
                activeDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
