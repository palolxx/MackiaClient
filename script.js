// Future JavaScript for interactivity and animations

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Add a subtle animation to feature items on scroll
    const featureItems = document.querySelectorAll('.feature-item, .module-item');

    const observerOptions = {
        root: null, // relative to document viewport 
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // observer.unobserve(entry.target); // Optional: stop observing after animation
            }
        });
    }, observerOptions);

    featureItems.forEach(item => {
        // Initial state for animation
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(item);
    });

    // Sticky header anmation/style change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 46, 0.9)'; // Darker, more solid background
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
        } else {
            header.style.background = 'linear-gradient(90deg, var(--purple-start), var(--purple-end) 30%, var(--dark-bg) 70%)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        }
    });

}); 