document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            formStatus.textContent = 'Sending message...';
            formStatus.style.color = '#007bff';

            // In a GitHub Pages context, you can't have a direct backend.
            // Here are a few options for handling forms:

            // Option 1: Use a third-party form service (RECOMMENDED for simple forms)
            // Services like Formspree.io, Netlify Forms, Getform.io
            // You would set your form's action attribute to their endpoint:
            // <form action="https://formspree.io/f/yourformid" method="POST">
            // This JS would then just display success/failure based on the service's redirect/response.
            // Example for Formspree (requires you to replace 'yourformid' with your actual form ID):
            // const response = await fetch('https://formspree.io/f/yourformid', {
            //     method: 'POST',
            //     body: new FormData(event.target),
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // });

            // if (response.ok) {
            //     formStatus.textContent = 'Message sent successfully!';
            //     formStatus.style.color = 'green';
            //     contactForm.reset();
            // } else {
            //     formStatus.textContent = 'Error sending message. Please try again.';
            //     formStatus.style.color = 'red';
            // }


            // Option 2: Use a serverless function (e.g., AWS Lambda, Netlify Functions, Firebase Functions)
            // This is more advanced. You'd deploy a function that handles email sending or database saving,
            // and your frontend would make an API call to this function.
            // Example (pseudo-code for a serverless function call):
            // try {
            //     const formData = new FormData(event.target);
            //     const response = await fetch('/.netlify/functions/send-email', { // Example Netlify Functions path
            //         method: 'POST',
            //         body: JSON.stringify(Object.fromEntries(formData)),
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     });
            //     if (response.ok) {
            //         formStatus.textContent = 'Message sent successfully!';
            //         formStatus.style.color = 'green';
            //         contactForm.reset();
            //     } else {
            //         throw new Error('Server error');
            //     }
            // } catch (error) {
            //     console.error('Form submission error:', error);
            //     formStatus.textContent = 'Error sending message. Please try again.';
            //     formStatus.style.color = 'red';
            // }

            // For a basic GitHub Pages site without backend:
            // You can use a mailto link, but it opens the user's email client.
            // This is generally not preferred for contact forms.
            // Or, simply instruct the user to email you directly:
            formStatus.textContent = 'Please email me directly at your.email@example.com';
            formStatus.style.color = 'blue';
            // You might want to disable the submit button after this message.
            contactForm.querySelector('button[type="submit"]').disabled = true;

            // Or, if you want to be fully static, just reset the form and show a message
            // formStatus.textContent = 'Thank you for your message! (This form does not send actual emails on GitHub Pages)';
            // formStatus.style.color = 'orange';
            // contactForm.reset();

            // The best way to handle forms for GitHub Pages without a server is Formspree or Netlify Forms.
            // For this example, I'll use a placeholder message.
            formStatus.textContent = 'Form submission is simulated. For a real form, use a service like Formspree.io!';
            formStatus.style.color = 'orange';
            contactForm.reset();
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000); // Clear message after 5 seconds
        });
    }

    // You can add more JavaScript for:
    // - Image sliders for projects
    // - Animations on scroll (e.g., using Intersection Observer API)
    // - Lightbox for images
    // - Dynamic content loading (e.g., fetching project data from a JSON file or an external API)
});