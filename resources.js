const carousel = document.querySelector('.carousel');
const navDots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

function updateCarousel(index) {
    const item = carousel.querySelector('.carousel-item');
    const itemWidth = item.clientWidth;
    const itemMargin = parseFloat(getComputedStyle(item).marginLeft) + parseFloat(getComputedStyle(item).marginRight);
    const totalItemWidth = itemWidth + itemMargin;
    const offset = (carousel.clientWidth - totalItemWidth) / 2; // Center the current item
    const translateX = -index * totalItemWidth + offset;

    carousel.style.transform = `translateX(${translateX}px)`;

    document.querySelectorAll('.carousel-item').forEach((item, idx) => {
        item.classList.toggle('zoom', idx === index);
    });

    navDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });

    currentIndex = index;
}

function handleScroll() {
    var sections = document.querySelectorAll('.section');
    var windowHeight = window.innerHeight;
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect();
        if (position.top < windowHeight && position.bottom >= 0) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
} 

window.addEventListener('scroll', handleScroll);

handleScroll();

navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        updateCarousel(index);
    });
});

updateCarousel(currentIndex);
