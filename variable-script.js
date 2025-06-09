document.addEventListener('DOMContentLoaded', () => {
    const overviewItems = document.querySelectorAll('.variable-overview-item');
    const detailSections = document.querySelectorAll('.variable-detail-section');

    // 페이지 로드 시 모든 상세 섹션을 숨깁니다.
    detailSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // (선택 사항) 페이지 로드 시 첫 번째 변수의 상세 정보를 기본으로 보여줍니다.
    if (overviewItems.length > 0) {
        overviewItems[0].classList.add('selected'); // 첫 번째 개요 항목 활성화
        const firstVariableId = overviewItems[0].dataset.variable;
        const firstDetailSection = document.getElementById(`${firstVariableId}-detail`);
        if (firstDetailSection) {
            firstDetailSection.style.display = 'block'; // 첫 번째 상세 섹션 보이기
            firstDetailSection.classList.add('active');
        }
    }

    overviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetVariable = item.dataset.variable;

            // 모든 개요 항목의 'selected' 클래스를 제거합니다.
            overviewItems.forEach(overview => {
                overview.classList.remove('selected');
            });
            // 클릭된 개요 항목에 'selected' 클래스를 추가합니다.
            item.classList.add('selected');

            // 모든 상세 정보 섹션을 숨깁니다.
            detailSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });

            // 클릭된 항목에 해당하는 상세 정보 섹션을 찾아서 보여줍니다.
            const activeDetailSection = document.getElementById(`${targetVariable}-detail`);
            if (activeDetailSection) {
                activeDetailSection.style.display = 'block';
                activeDetailSection.classList.add('active');
                activeDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
