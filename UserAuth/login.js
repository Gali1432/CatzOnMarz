document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check username and password?

  // For demonstration purposes, let's assume the login is successful
  if (username === 'user' && password === 'password') {
    alert('You are logged in!');
    // Redirect to index.html or wherever you want to go after login
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
