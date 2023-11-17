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
    
//typing animation

var t2 = new SplitText('.txt2').chars,
    color2 = '#17c0fd',
    color1 = '#fff',
    moveBar = ()=>{ gsap.set('.bar', {left:gsap.getProperty('.txt1','width') + 1}) };

gsap.timeline({delay:0.2})
    .set('.txt1',   {color:color1, fontWeight:'regular'})
    .set('.txt2',   {color:color2, fontWeight:'bold', opacity:0, x:gsap.getProperty('.txt1','width')-2, immediateRender:true})
    .set('.bar',    {left:1, backgroundColor:color1, immediateRender:true})

    .to('.bar',     {duration:0.1, opacity:0, ease:Expo.easeIn, yoyo:true, repeat:5, repeatDelay:0.3}, 0)
    .from('.txt1',  {duration:1.1, width:0, ease:SteppedEase.config(14), onUpdate:moveBar}, 2.5)
    .to('.bar',     {duration:0.05, backgroundColor:color2}, '+=0.15')
    .to('.bar',     {duration:1.0, width:290, ease:Power4.easeInOut}, '+=0.1')
    .from('.h3-container',     {duration:1.0, x:135, ease:Power4.easeInOut}, '-=1.0')
    .to('.txt2',    {duration:0.01, opacity:1}, '-=0.1')
    .to('.bar',     {duration:0.4, x:290, width:0, ease:Power4.easeIn})
    .from(t2,       {duration:0.6, opacity:0, ease:Power3.easeInOut, stagger:0.02}, '-=0.5')
    .to('.txt1',    {duration:1.5, opacity:0.25, ease:Power3.easeInOut}, '-=1.2')
    .timeScale(1.45)
    ;

});
