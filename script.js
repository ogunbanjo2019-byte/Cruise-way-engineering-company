// ========================================
// CRUISE-WAY ENGINEERING - MAIN SCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollEffects();
  initializeFormHandling();
  setActiveNavLink();
  initializeAnimations();
  initializeFAQ();
});

// ========================================
// NAVIGATION FUNCTIONALITY
// ========================================

function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close menu when a link is clicked
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (hamburger) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
}

// ========================================
// SCROLL EFFECTS
// ========================================

function initializeScrollEffects() {
  const navbar = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// ========================================
// ANIMATIONS
// ========================================

function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // If it's a counter, start the animation
        if (entry.target.classList.contains('counter')) {
          animateCounter(entry.target);
        }
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animateElements = document.querySelectorAll('.animate-on-scroll, .card, .counter, .partner-card, .ceo-card, .testimonial-card, .faq-item');
  
  animateElements.forEach(el => {
    // Add default animation class if not present
    if (!el.classList.contains('animate-on-scroll')) {
      el.classList.add('animate-on-scroll', 'fade-in');
    }
    observer.observe(el);
  });
}

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  if (isNaN(target)) return;
  
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target;
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current);
    }
  }, 16);
}

// ========================================
// FAQ ACCORDION
// ========================================

function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = null;
      });
      
      // Toggle current FAQ
      if (!isActive) {
        question.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ========================================
// FORM HANDLING & WHATSAPP
// ========================================

function initializeFormHandling() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Validate form
      if (!validateForm(data)) {
        return;
      }
      
      // Send to WhatsApp
      sendToWhatsApp(data);
      
      // Show success message
      showSuccessMessage(form);
      
      // Reset form
      form.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        hideSuccessMessage();
      }, 3000);
    });
  }
}

function sendToWhatsApp(data) {
  const phoneNumber = "2348000000000"; // Replace with actual number
  const message = `*New Inquiry from Cruise-Way Website*%0A%0A` +
    `*Name:* ${data.name}%0A` +
    `*Email:* ${data.email}%0A` +
    `*Phone:* ${data.phone || 'N/A'}%0A` +
    `*Service:* ${data.service}%0A` +
    `*Message:* ${data.message}`;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

function validateForm(data) {
  if (!data.name || data.name.trim() === '') {
    alert('Please enter your name');
    return false;
  }
  
  if (!data.email || data.email.trim() === '') {
    alert('Please enter your email');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert('Please enter a valid email address');
    return false;
  }
  
  if (!data.service || data.service === '') {
    alert('Please select a service');
    return false;
  }
  
  if (!data.message || data.message.trim() === '') {
    alert('Please enter your message');
    return false;
  }
  
  return true;
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = `
    <p style="font-weight: 600; margin-bottom: 5px;">Redirecting to WhatsApp...</p>
    <p style="font-size: 0.9rem;">Thank you for your inquiry!</p>
  `;
  successDiv.style.cssText = `
    background-color: #e8f5ee;
    border: 1px solid #0f9d58;
    color: #0f9d58;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    animation: slideInUp 0.3s ease;
  `;
  
  form.insertBefore(successDiv, form.firstChild);
}

function hideSuccessMessage() {
  const message = document.querySelector('.success-message');
  if (message) {
    message.remove();
  }
}

// ========================================
// SET ACTIVE NAV LINK
// ========================================

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// WINDOW RESIZE HANDLER
// ========================================

window.addEventListener('resize', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth > 768) {
    if (hamburger) hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
  }
});
