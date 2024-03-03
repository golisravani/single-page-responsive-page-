document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCollapseId = button.getAttribute('data-bs-target');
            const targetCollapse = document.getElementById(targetCollapseId);
            if (targetCollapse && targetCollapse.classList.contains('show')) {
                targetCollapse.classList.remove('show');
            } else if (targetCollapse) {
                targetCollapse.classList.add('show');
            }
        });
    });
});



function toggleAccordion() {
    const accordion = document.getElementById('accordionFlushMobile');
    if (accordion.style.display === 'none') {
        accordion.style.display = 'block';
    } else {
        accordion.style.display = 'none';
    }
}