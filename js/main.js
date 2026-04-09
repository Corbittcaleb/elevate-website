// ── Elevate Website — Interactions ──────────────

document.addEventListener('DOMContentLoaded', function () {

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Mobile Nav ──────────────────────────
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  var nav = document.querySelector('.nav');

  function closeNav() {
    if (toggle && links) {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (toggle && links) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = links.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        toggle.classList.add('open');
        links.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    // Close on tap outside nav links
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
        closeNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        closeNav();
        toggle.focus();
      }
    });
  }

  // ── Nav Scroll Behavior ─────────────────
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ── Scroll Reveal ───────────────────────
  if (!prefersReducedMotion) {
    var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if (reveals.length > 0) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      });

      reveals.forEach(function (el) { observer.observe(el); });
    }
  } else {
    // If reduced motion, make everything visible immediately
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ── Stagger Children ───────────────────
  document.querySelectorAll('.stagger').forEach(function (parent) {
    Array.from(parent.children).forEach(function (child, i) {
      child.style.setProperty('--i', i);
    });
  });

  // ── Counter Animation ──────────────────
  var counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';

    if (prefersReducedMotion) {
      el.textContent = prefix + target + suffix;
      return;
    }

    var duration = 1600;
    var start = performance.now();

    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * ease);

      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ── Parallax on Hero ───────────────────
  var heroImage = document.querySelector('.hero__image');
  if (heroImage && window.innerWidth > 768 && !prefersReducedMotion) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      if (scrolled < 800) {
        var opacity = 1 - (scrolled / 800) * 0.3;
        heroImage.style.transform = 'translateY(' + (scrolled * 0.1) + 'px)';
        heroImage.style.opacity = opacity;
      }
    }, { passive: true });
  }

  // ── Contact Form ───────────────────────
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      var subject = encodeURIComponent('Elevate Website Inquiry from ' + name);
      var phone = form.querySelector('#phone') ? form.querySelector('#phone').value : '';
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + (phone || 'Not provided') + '\n\n' +
        'Message:\n' + message
      );

      window.location.href = 'mailto:samantha@letselevateup.com?subject=' + subject + '&body=' + body;
    });
  }

});
