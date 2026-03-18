// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Add form validation and handling logic here
        const formData = new FormData(form);
        
        // Example: Logging form data to console
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Reset form after submission
        form.reset();
    });
});
