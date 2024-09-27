document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    emailjs.init('RHn2zVCxsG7kXQNaH'); // Replace with your actual EmailJS public key
  
    // Select the form element
    const contactForm = document.querySelector('form');
  
    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Send form data using EmailJS
      emailjs.sendForm('service_nr33g4w', 'template_1qin75a', this)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          contactForm.reset(); // Reset the form after successful submission
        }, function (error) {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        });
    });
  });