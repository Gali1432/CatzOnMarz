
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
