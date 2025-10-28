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

// Sign Up Form Handling

const signinForm = document.querySelector('.signin-form');
const signupForm = document.querySelector('.signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();

    if(username && password && email) {
        console.log('Sign Up Successful'); 
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];


    if(users.some((user) => user.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    users.push({ username, password, email });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign Up Successful! You can now sign in.');
    signupForm.reset();
    logIn.classList.remove('active');
});

// Sign In Form Handling

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('.signin-form input[type="text"]').value.trim();
    const password = document.querySelector('.signin-form input[type="password"]').value.trim();
    const rememberMe = document.querySelector('.signin-form input[type="checkbox"]').checked;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find((user) => user.username === username && user.password === password);

    if(validUser) {
        alert('☕ Welcome back,' + ' ' + validUser.username + '!' + ' Enjoy your coffee!');

    if(rememberMe) {    
        localStorage.setItem('currentUser', JSON.stringify({validUser}));
    } else {
        sessionStorage.setItem('currentUser', JSON.stringify({validUser}));
    }

    window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

window.addEventListener('domContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));
    if(currentUser) {
        window.location.href = 'dashboard.html';
    }
});