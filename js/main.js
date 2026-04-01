// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Contact form handling
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Placeholder: replace with actual form submission (Formspree, Netlify Forms, etc.)
      var subject = encodeURIComponent('Elevate Website Inquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + (form.querySelector('#phone').value || 'Not provided') + '\n\nMessage:\n' + message);
      window.location.href = 'mailto:samantha@letselevateup.com?subject=' + subject + '&body=' + body;
    });
  }
});
