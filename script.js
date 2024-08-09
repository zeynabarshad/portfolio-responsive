document.getElementById('downArrow').addEventListener('click', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    // Find the current section in view
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSectionIndex = index;
        }
    });

    // Scroll to the next section if it exists
    if (currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex + 1].scrollIntoView({
            behavior: 'smooth'
        });
    }
});
function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const leftElements = document.querySelectorAll('.slide-in-left');
    const rightElements = document.querySelectorAll('.slide-in-right');

    const onScroll = () => {
        leftElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            if (rect.top < viewHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });

        rightElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            if (rect.top < viewHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
});

