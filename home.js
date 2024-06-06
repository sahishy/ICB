document.addEventListener("DOMContentLoaded", function() {
    var scrollButton1 = document.getElementById("registerUpcomingCompetition");
    var scrollButton2 = document.getElementById("learnMoreCompetition");
    var stat1 = document.getElementById("stat1");
    var stat2 = document.getElementById("stat2");
    var stat3 = document.getElementById("stat3");

    scrollButton1.addEventListener("click", function() {
        var targetSection = document.getElementById("homeCompetitions");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });

    scrollButton2.addEventListener("click", function() {
        var targetSection = document.getElementById("homeCompetitions");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });

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

        animateNumberSections();
    } 

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    function animateNumberSections() {
        var numberElements = [stat1, stat2, stat3];
        var targetValues = [300, 5, 5000];
        var windowHeight = window.innerHeight;

        numberElements.forEach(function(element, index) {
            var position = element.getBoundingClientRect();
            if (position.top < windowHeight && position.bottom >= 0 && !element.classList.contains('animated')) {
                element.classList.add('animated');
                animateNumber(element, targetValues[index], 2000);
            }
        });
    }

    function animateNumber(element, targetValue, duration) {
        const frameRate = 60; // Frames per second
        const totalFrames = duration / (1000 / frameRate);
        let currentValue = 0;
        const increment = targetValue / totalFrames;
        let currentFrame = 0;

        function updateNumber() {
            currentValue += increment;
            currentFrame++;
            if (currentFrame >= totalFrames) {
                currentValue = targetValue;
                clearInterval(animationInterval);
            }
            element.textContent = Math.floor(currentValue) + '+';
        }

        const animationInterval = setInterval(updateNumber, 1000 / frameRate);
    }
});
