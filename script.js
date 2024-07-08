// JavaScript for sticky footer
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollY = window.scrollY;

    if (scrollY > 100) { // Adjust the scroll position threshold as needed
        footer.classList.add('active');
    } else {
        footer.classList.remove('active');
    }
});

// Adjust body padding when footer is fixed
document.body.classList.add('fixed-footer');
