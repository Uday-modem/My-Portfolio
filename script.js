/* ================================================
   PORTFOLIO WEBSITE - SCRIPT.JS (COMPLETE)
   Includes: Theme Toggle, Animations, Navigation, & Project Modal
   ================================================ */

/* ================================================
   1. THEME MANAGER (Dark/Light Mode)
   ================================================ */
class ThemeManager {
  constructor() {
    this.themeBtn = document.getElementById('theme-toggle');
    this.htmlElement = document.documentElement;
    this.storageKey = 'portfolio-theme';
    this.init();
  }

  init() {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem(this.storageKey) || 'light';
    this.setTheme(savedTheme);
    
    // Attach click event
    if(this.themeBtn) {
        this.themeBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    this.htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
    this.updateButtonText(theme);
  }

  toggleTheme() {
    const currentTheme = this.htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateButtonText(theme) {
    if(this.themeBtn) {
        this.themeBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }
}

/* ================================================
   2. SCROLL REVEAL ANIMATIONS
   ================================================ */
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe achievement cards and gallery items
    document.querySelectorAll('.ach-card, .gallery-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
  }
}

/* ================================================
   3. NAVIGATION - Active Link Highlight
   ================================================ */
class NavigationManager {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-links a');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.updateActiveLink());

    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.setActiveLink(link);
      });
    });
  }

  updateActiveLink() {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  setActiveLink(link) {
    this.navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }
}

/* ================================================
   4. SMOOTH SCROLL
   ================================================ */
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
      });
    });
  }
}

/* ================================================
   5. KEYBOARD ACCESSIBILITY
   ================================================ */
class KeyboardAccessibility {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      // Alt + T to toggle theme
      if (e.altKey && e.key === 't') {
        const btn = document.getElementById('theme-toggle');
        if(btn) btn.click();
      }
    });
  }
}

/* ================================================
   6. LAZY LOADING
   ================================================ */
class LazyLoading {
  constructor() {
    this.init();
  }

  init() {
    const images = document.querySelectorAll('.gallery-img');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.loading = 'lazy';
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach(img => imageObserver.observe(img));
    }
  }
}

/* ================================================
   7. INITIALIZE ALL ON DOM READY
   ================================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio initialized successfully!');
  
  new ThemeManager();
  new ScrollAnimations();
  new NavigationManager();
  new SmoothScroll();
  new KeyboardAccessibility();
  new LazyLoading();
  new SkillRing(); 
  new VaporizeText();
  new DraggableGallery();
  new RoleRotator();


  console.log('✅ All features loaded.');
});

/* ================================================
   8. PROJECT MODAL LOGIC (New Feature)
   ================================================ */

// Define Data for Smart University Project
const projectData = {
    smartUni: {
        title: "Smart University Management System",
        img: "UI Designing.png",
        role: "Full Stack Developer",
        duration: "Sep 2025 - Dec 2025",
        desc: "A comprehensive university management system designed to digitize campus operations. It features a React-based student portal for tracking grades and attendance, integrated with an ESP32-based biometric hardware system. The platform reduces manual administrative workload by 40% and provides real-time data visualization for faculty.",
        tech: ["Spring Boot", "React.js", "MySQL", "IoT (ESP32)"],
        github: "https://github.com/Uday-modem/Smart_University_Management_System"
    },
    healthDash: {
        title: "Health Vital Dashboard",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        role: "Frontend Developer",
        duration: "Practice Project",
        desc: "A responsive frontend dashboard displaying real-time health vitals like Blood Pressure (BP), Heart Rate, SpO2, and Body Temperature. Designed for clean data visualization.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "#"
    },
    iotHome: {
        title: "IoT Home Automation & Safety",
        img: "homeAutomation.jpg",
        role: "IoT Engineer",
        duration: "Academic Project",
        desc: "A complete home automation system using Blynk IoT. Controls lights/fans remotely, detects gas leaks (MQ2 sensor) with mobile alerts, and monitors water tank levels to auto-switch the pump.",
        tech: ["Blynk IoT", "Arduino/ESP8266", "Micro Python", "Sensors"],
        github: "https://github.com/Uday-modem/iot-home-automation-with-gas-detection"
    }
};

/* ================================================
   9. 3D SKILL RING MANAGER
   ================================================ */
class SkillRing {
  constructor() {
    this.ring = document.getElementById('techRing');
    this.items = document.querySelectorAll('.ring-item');
    this.scene = document.querySelector('.ring-scene');
    
    if(!this.ring) return;

    // Configuration
    this.radius = 250; // Distance from center
    this.autoRotateSpeed = 0.3; // Speed of auto-spin
    
    // State
    this.angle = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    
    this.init();
  }

  init() {
    this.distributeItems();
    this.animate();
    this.addInteractions();
  }

  distributeItems() {
    const total = this.items.length;
    const step = 360 / total;

    this.items.forEach((item, index) => {
      const degree = index * step;
      // Position items in a circle using RotateY and TranslateZ
      item.style.transform = `rotateY(${degree}deg) translateZ(${this.radius}px)`;
    });
  }

  addInteractions() {
    // Mouse Events
    this.scene.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.startX = e.clientX;
      this.scene.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const delta = e.clientX - this.startX;
      this.angle += delta * 0.5; // Sensitivity
      this.startX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.scene.style.cursor = 'grab';
    });

    // Touch Events (Mobile)
    this.scene.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      this.startX = e.touches[0].clientX;
    });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      const delta = e.touches[0].clientX - this.startX;
      this.angle += delta * 0.8;
      this.startX = e.touches[0].clientX;
    });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  animate() {
    if (!this.isDragging) {
      this.angle -= this.autoRotateSpeed; // Auto-rotate direction
    }
    
    // Apply rotation to the whole ring container
    this.ring.style.transform = `rotateY(${this.angle}deg)`;
    
    requestAnimationFrame(() => this.animate());
  }
}

/* ================================================
   10. WIPE TEXT EFFECT
   ================================================ */
class VaporizeText {
    constructor() {
        this.texts = document.querySelectorAll('.vapor-text');
        this.currentIndex = 0;
        this.interval = 3000; // Change text every 3 seconds
        if(this.texts.length > 0) this.init();
    }

    init() {
        setInterval(() => this.cycleText(), this.interval);
    }

        cycleText() {
        const current = this.texts[this.currentIndex];
        const nextIndex = (this.currentIndex + 1) % this.texts.length;
        const next = this.texts[nextIndex];

        // 1. Fade out current (Add vaporize, remove active)
        current.classList.remove('active');
        current.classList.add('vaporize');

        // 2. Wipe in next (Add active)
        next.classList.remove('vaporize'); // Ensure it's clean
        next.classList.add('active');

        // 3. Reset the "current" one after it has faded out (500ms)
        setTimeout(() => {
            current.classList.remove('vaporize');
            
            // CRITICAL FIX: Disable transition temporarily to snap back clip-path
            current.style.transition = 'none'; 
            current.style.clipPath = 'inset(0 100% 0 0)';
            
            // Re-enable transition after a tiny delay so it's ready for next time
            setTimeout(() => {
                current.style.transition = ''; 
                current.style.clipPath = ''; // clear inline style to use CSS
            }, 50);
            
        }, 500); // Matches CSS opacity transition time

        this.currentIndex = nextIndex;
    }

  }

/* ================================================
   11. DRAGGABLE SCATTERED GALLERY
   ================================================ */
class DraggableGallery {
    constructor() {
        this.items = document.querySelectorAll('.scatter-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            this.makeDraggable(item);
        });
    }

    makeDraggable(el) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        el.addEventListener('mousedown', (e) => {
            isDragging = true;
            el.style.zIndex = 100; // Bring to front
            
            // Get current position
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement.getBoundingClientRect();
            
            startX = e.clientX;
            startY = e.clientY;
            
            // Calculate initial position relative to parent
            initialLeft = el.offsetLeft;
            initialTop = el.offsetTop;
            
            el.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            el.style.left = `${initialLeft + dx}px`;
            el.style.top = `${initialTop + dy}px`;
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                el.style.cursor = 'grab';
                el.style.zIndex = ''; // Reset z-index
            }
        });
    }
}
/* ================================================
   HERO TEXT ROTATOR (Continuous Loop)
   ================================================ */
class RoleRotator {
    constructor() {
        this.roles = document.querySelectorAll('.role-text');
        this.index = 0;
        this.interval = 2500; // Change every 2.5 seconds
        
        if (this.roles.length > 0) {
            this.init();
        }
    }

    init() {
        // Ensure first one is active initially
        this.roles[0].classList.add('active');
        
        setInterval(() => {
            this.rotate();
        }, this.interval);
    }

    rotate() {
        const currentRole = this.roles[this.index];
        const nextIndex = (this.index + 1) % this.roles.length;
        const nextRole = this.roles[nextIndex];

        // 1. Move Current UP and OUT
        currentRole.classList.remove('active');
        currentRole.classList.add('exit');

        // 2. Wait a tiny bit, then bring Next IN from Bottom
        setTimeout(() => {
            currentRole.classList.remove('exit'); // Reset position for next time
            nextRole.classList.add('active');
        }, 300); // 300ms delay matches CSS transition partly

        this.index = nextIndex;
    }
}






// Function to Open Modal
function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modalBody");
    const data = projectData[projectId];

    if (!data) return;

    // Inject Content dynamically
    body.innerHTML = `
        <img src="${data.img}" class="modal-header-img" alt="${data.title}">
        <div class="modal-body-content">
            <h2 class="modal-title">${data.title}</h2>
            
            <div class="modal-role-duration">
                <span><i class="fas fa-user-tag"></i> <strong>Role:</strong> ${data.role}</span>
                <span><i class="far fa-calendar-alt"></i> <strong>Duration:</strong> ${data.duration}</span>
            </div>

            <p class="modal-desc">${data.desc}</p>

            <div class="modal-tech-stack">
                ${data.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>

            <div class="modal-actions">
                <a href="${data.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View Source Code
                </a>
            </div>
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scrolling
}

// Function to Close Modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }
}

// Close if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
}
