const form = document.getElementById('registrationForm');

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  if (!username) {
    document.getElementById('usernameError').textContent = 'Username is required';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    fetch('/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.redirect) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = data.redirect;
      }
    })
    .catch((error) => {
      alert('Submission failed: ' + error.message);
    });
  }
  
});

document.addEventListener('DOMContentLoaded', () => {
  const nameSpan = document.querySelector('.highlight');
  const username = localStorage.getItem('loggedInUser');
  if (nameSpan && username) {
    nameSpan.textContent = username;
  }
});