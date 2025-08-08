document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            // Prevent scrolling when menu is open
            if (isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && 
                !menuToggle.contains(event.target) && 
                mainNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });