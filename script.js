// JavaScript for mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navbarNav = document.getElementById('navbarNav');

        navToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation list
            navbarNav.classList.toggle('active');
        });