document.addEventListener('DOMContentLoaded', () => {
    const overviewItems = document.querySelectorAll('.cafe-overview-item');
    const detailSections = document.querySelectorAll('.cafe-detail-section');

    // 페이지 로드 시 모든 상세 섹션을 숨깁니다.
    // 이 부분은 CSS에서 `display: none;`으로 처리하는 것이 더 일반적입니다.
    // 하지만 JS에서 제어해야 한다면 아래 코드를 사용합니다.
    detailSections.forEach(section => {
        section.style.display = 'none'; // 초기에는 모두 숨김
        section.classList.remove('active'); // active 클래스도 제거
    });

    // (선택 사항) 페이지 로드 시 첫 번째 카페의 상세 정보를 보여줍니다.
    // 만약 초기 상태에 아무것도 보이지 않게 하려면 이 블록을 삭제하세요.
    if (overviewItems.length > 0) {
        overviewItems[0].classList.add('selected'); // 첫 번째 개요 항목 활성화
        const firstCafeId = overviewItems[0].dataset.cafe;
        const firstDetailSection = document.getElementById(`${firstCafeId}-detail`);
        if (firstDetailSection) {
            firstDetailSection.style.display = 'block'; // 첫 번째 상세 섹션 보이기
            firstDetailSection.classList.add('active');
        }
    }

    overviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetCafe = item.dataset.cafe;

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
            const activeDetailSection = document.getElementById(`${targetCafe}-detail`);
            if (activeDetailSection) {
                activeDetailSection.style.display = 'block'; // 'display: block'으로 변경하여 보이게 함
                activeDetailSection.classList.add('active');
                activeDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
