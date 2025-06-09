document.addEventListener('DOMContentLoaded', () => {
    const overviewItems = document.querySelectorAll('.variable-overview-item');
    const detailSections = document.querySelectorAll('.variable-detail-section');

    overviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetVariable = item.dataset.variable;

            detailSections.forEach(section => {
                section.classList.remove('active');
            });

            const activeDetailSection = document.getElementById(`${targetVariable}-detail`);
            if (activeDetailSection) {
                activeDetailSection.classList.add('active');
                activeDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
