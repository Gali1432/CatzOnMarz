

const hardcodedCredentials = {
    name: "Bobby",
    username: "Bob",
    password:"bob"
};

function validateLogin(inputName, inputUsername,password) {
    if (inputName === hardcodedCredentials.name && inputUsername === hardcodedCredentials.username && inputPassword === hardcodedCredentials.password) {
        return true; 
    } else {
        return false; 
    }
}


const inputName = "Bobby";
const inputUsername = "bob1";

if (validateLogin(inputName, inputUsername,password)) {
    console.log("Login successful!");
} else {
    console.log("Login failed. Incorrect credentials.");
}
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

