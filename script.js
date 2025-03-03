document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    
    // Create the three lines for the hamburger icon
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        mobileMenuToggle.appendChild(span);
    }
    
    // Insert the toggle button before the nav-links
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    header.insertBefore(mobileMenuToggle, navLinks);
    
    // Toggle the menu when clicking the button
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close the menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-toggle')) {
            navLinks.classList.remove('active');
        }
    });
});