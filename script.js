// Handle the form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const message = document.querySelector("textarea[name='message']").value;

        // Display the input in an alert
        alert(`Thank you, ${name}!\nWe have received your message:\n"${message}"\nWe will get back to you at ${email}.`);

        // Optionally, clear the form
        form.reset();
    });
});
// Show/Hide Back-to-Top Button
window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
