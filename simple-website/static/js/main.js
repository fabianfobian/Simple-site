document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the elements we need
    const footer = document.querySelector('footer');
    const toggleButton = document.getElementById('footer-toggle'); // <-- New line

    // 2. The function to toggle the CSS class
    function toggleFooter() {
        // This is the function you already defined!
        footer.classList.toggle('hidden-footer');
        
        // Optional: Change button text to reflect current state
        if (footer.classList.contains('hidden-footer')) {
            toggleButton.textContent = 'Show Footer';
        } else {
            toggleButton.textContent = 'Hide Footer';
        }
    }

    // 3. The crucial step: Attach the event listener to the button
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleFooter);
    }
});