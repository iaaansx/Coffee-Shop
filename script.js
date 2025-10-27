const logIn = document.querySelector('.login');
const signUp = document.getElementById('signup');
const signIn = document.getElementById('signin');

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    logIn.classList.add('active');
});

signIn.addEventListener('click', (e) => {
    e.preventDefault();
    logIn.classList.remove('active');
});