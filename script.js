document.addEventListener('DOMContentLoaded', function() {
    var signinLink = document.getElementById('signin-link');
    var signinModal = document.getElementById('signin-modal');
    var closeSigninModal = document.getElementById('close-signin-modal');

    signinLink.addEventListener('click', function(event) {
        event.preventDefault();
        signinModal.style.display = 'flex';
    });

    closeSigninModal.addEventListener('click', function() {
        signinModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    var registerLink = document.getElementById('register-as-firm-link');
    var registerModal = document.getElementById('register-modal');
    var closeRegisterModal = document.getElementById('close-register-modal');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerModal.style.display = 'flex';
    });

    closeRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
