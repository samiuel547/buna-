// 1. Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
    
    // Trigger Hero Animations after load
    document.querySelectorAll('.hero-content .fade-in-up').forEach(el => {
        el.classList.add('active');
    });
});

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Add a slight delay for the follower for a smooth effect
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Grow cursor on hoverable elements
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.classList.add('grow');
        follower.style.transform = 'translate(-50%, -50%) scale(2)';
        follower.style.borderColor = 'transparent';
        follower.style.background = 'rgba(212, 175, 55, 0.2)';
    });
    link.addEventListener('mouseleave', () => {
        follower.classList.remove('grow');
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        follower.style.background = 'transparent';
    });
});

// 3. Navbar color change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 4. Advanced Scroll Reveal (Intersection Observer)
const observerOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const elementsToReveal = document.querySelectorAll('.reveal');
elementsToReveal.forEach(el => observer.observe(el));