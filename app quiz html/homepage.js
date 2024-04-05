
// JavaScript function to handle link selection
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'selected' class from all links
        document.querySelectorAll('.link').forEach(link => {
            link.classList.remove('selected');
        });

        // Add 'selected' class to the clicked link
        this.classList.add('selected');

        // Scroll to the corresponding section
        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});