// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navDesktop = document.querySelector('.nav-desktop');
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            <a href="#properties" class="mobile-nav-link">Properties</a>
            <a href="#locations" class="mobile-nav-link">Locations</a>
            <a href="#services" class="mobile-nav-link">Services</a>
            <a href="#about" class="mobile-nav-link">About</a>
            <a href="#contact" class="mobile-nav-link">Contact</a>
            <div class="mobile-contact">
                <span>+1 (555) 123-4567</span>
                <span>hello@eliteestate.com</span>
                <button class="btn btn-primary">Book Viewing</button>
            </div>
        </div>
    `;
    
    // Add mobile menu styles
    const mobileMenuStyles = `
        .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(26, 54, 93, 0.98);
            backdrop-filter: blur(10px);
            z-index: 999;
            display: none;
            align-items: center;
            justify-content: center;
        }
        
        .mobile-menu.active {
            display: flex;
        }
        
        .mobile-menu-content {
            text-align: center;
            color: white;
        }
        
        .mobile-nav-link {
            display: block;
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 500;
            margin: 1.5rem 0;
            transition: color 0.3s ease;
        }
        
        .mobile-nav-link:hover {
            color: #d4af37;
        }
        
        .mobile-contact {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
        
        .mobile-contact span {
            opacity: 0.9;
        }
    `;
    
    // Add styles to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = mobileMenuStyles;
    document.head.appendChild(styleSheet);
    
    // Add mobile menu to body
    document.body.appendChild(mobileMenu);
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Property favorite toggle
document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.property-favorite');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentText = this.textContent;
            this.textContent = currentText === '♡' ? '♥' : '♡';
            this.style.color = currentText === '♡' ? '#d4af37' : 'inherit';
        });
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = searchInput.nextElementSibling;
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // In a real application, this would filter properties or redirect to search results
            alert(`Searching for: "${searchTerm}"\n\nThis would normally filter the properties or redirect to a search results page.`);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // View Details buttons
    const viewDetailsButtons = document.querySelectorAll('.property-actions .btn-outline');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const propertyCard = this.closest('.property-card');
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            alert(`Viewing details for: ${propertyTitle}\n\nThis would normally navigate to a detailed property page.`);
        });
    });
    
    // Schedule Tour buttons
    const scheduleTourButtons = document.querySelectorAll('.property-actions .btn-primary');
    scheduleTourButtons.forEach(button => {
        button.addEventListener('click', function() {
            const propertyCard = this.closest('.property-card');
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            alert(`Scheduling tour for: ${propertyTitle}\n\nThis would normally open a booking form or calendar.`);
        });
    });
    
    // Book Viewing buttons
    const bookViewingButtons = document.querySelectorAll('button:contains("Book Viewing")');
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Book Viewing')) {
            button.addEventListener('click', function() {
                alert('Opening booking form...\n\nThis would normally open a contact form or calendar booking system.');
            });
        }
    });
    
    // Schedule Consultation buttons
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Schedule Consultation')) {
            button.addEventListener('click', function() {
                alert('Scheduling consultation...\n\nThis would normally open a consultation booking form.');
            });
        }
    });
    
    // View Collections button
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('View Collections')) {
            button.addEventListener('click', function() {
                alert('Viewing property collections...\n\nThis would normally navigate to a collections page.');
            });
        }
    });
    
    // View All Properties button
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('View All Properties')) {
            button.addEventListener('click', function() {
                alert('Viewing all properties...\n\nThis would normally navigate to a full properties listing page.');
            });
        }
    });
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.property-card, .service-card, .stat-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Parallax effect for hero background
document.addEventListener('DOMContentLoaded', function() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${parallax}px)`;
        });
    }
});

// Navigation background on scroll
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(26, 54, 93, 0.98)';
        } else {
            nav.style.background = 'rgba(26, 54, 93, 0.95)';
        }
    });
});