function submitForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this with your login validation logic.
    // For this example, let's check if the username and password are not empty.
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
        // You can redirect to another page or perform other actions after successful login.
    }
}
