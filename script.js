document.addEventListener("DOMContentLoaded", function() {
    var lastClickedSectionId = null;

    function changeContent(sectionId) {
        hideAllSections();
        showSection(sectionId);
    }

    function hideAllSections() {
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        document.getElementById(sectionId).style.display = 'block';
    }

    document.querySelectorAll('.menu-item').forEach(function(menuItem) {
        menuItem.addEventListener('mouseover', function() {
            if (lastClickedSectionId !== menuItem.getAttribute('data-section')) {
                changeContent(menuItem.getAttribute('data-section'));
            }
        });

        menuItem.addEventListener('click', function() {
            lastClickedSectionId = menuItem.getAttribute('data-section');
            changeContent(lastClickedSectionId);
        });
    });

    // Corrected canvas selection
    const canvas = document.querySelector('.canvas');

    document.addEventListener('mousemove', (e) => {
        createParticle(e);
    });

    console.log

    function createParticle(e) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        canvas.appendChild(particle);

        // Particle size and position
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${e.pageX - size / 2}px`;
        particle.style.top = `${e.pageY - size / 2}px`;

        // Random neon color
        const colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-tertiary)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
        particle.style.border = `1px solid ${color}`;

        // Animation
        const animation = particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: 'translate(0, 20px)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        animation.onfinish = () => {
            particle.remove();
        };
    }
    console.log
});
