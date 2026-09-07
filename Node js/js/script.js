document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      hamburgerBtn.classList.toggle('is-active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Active Section Highlighting (for in-page anchors on the Home page)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  if (sections.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPosition = window.pageYOffset + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        navItems.forEach(item => {
          const href = item.getAttribute('href') || '';
          if (href.includes(`#${current}`)) {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 3. Hospital Search and Filter Engine (Hospitals page only)
  const searchInput = document.getElementById('searchName');
  const locationSelect = document.getElementById('filterLocation');
  const typeSelect = document.getElementById('filterType');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const hospitalCards = document.querySelectorAll('.hospital-card');
  const noResults = document.getElementById('noResults');

  if (searchInput && locationSelect && typeSelect && resetBtn) {
    function filterHospitals() {
      const query = searchInput.value.toLowerCase().trim();
      const selectedLocation = locationSelect.value.toLowerCase();
      const selectedType = typeSelect.value.toLowerCase();
      let visibleCount = 0;

      hospitalCards.forEach(card => {
        const cardName = card.getAttribute('data-name').toLowerCase();
        const cardLocation = card.getAttribute('data-location').toLowerCase();
        const cardType = card.getAttribute('data-type').toLowerCase();

        const matchesQuery = !query || cardName.includes(query);
        const matchesLocation = selectedLocation === 'all' || cardLocation === selectedLocation;
        const matchesType = selectedType === 'all' || cardType.includes(selectedType);

        if (matchesQuery && matchesLocation && matchesType) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    searchInput.addEventListener('input', filterHospitals);
    locationSelect.addEventListener('change', filterHospitals);
    typeSelect.addEventListener('change', filterHospitals);

    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      locationSelect.value = 'all';
      typeSelect.value = 'all';
      filterHospitals();
    });
  }

  // 4. Animated Counters on Scroll (Home page only)
  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;

  if (counters.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500;
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;

            const timer = setInterval(() => {
              current += Math.ceil(target / 40);
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = current;
              }
            }, stepTime || 20);
          });
        }
      });
    }, { threshold: 0.25 });

    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
      statsObserver.observe(achievementsSection);
    }
  }

  // 5. Contact Form Handler (Contact page only)
  const contactForm = document.getElementById('contactForm');
  const feedbackMessage = document.getElementById('formSuccessMessage');

  if (contactForm && feedbackMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      feedbackMessage.style.display = 'block';
      contactForm.reset();

      setTimeout(() => {
        feedbackMessage.style.display = 'none';
      }, 5000);
    });
  }
});
