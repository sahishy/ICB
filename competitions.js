document.addEventListener("DOMContentLoaded", function() {
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
});
