document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username_in');
    const password = document.getElementById('pass_in');

    function loginHandle(){
        let user ={
            username: username.value,
            password: password.value
        }
        console.log(user);
        const isValidInput = (input) => {
            // Regular expression to check for special characters and Unicode characters
            const regex = /^[a-zA-Z0-9]+$/;
            return regex.test(input);
        };

        if (username.value === '' || password.value === '') {
            alert('Please enter your username and password');
        } else if (username.value.length > 16 || password.value.length > 16) {
            alert('Username and password must be maximum 16 characters long');
        } else if (!isValidInput(username.value) || !isValidInput(password.value)) {
            alert('Username and password can only contain letters and numbers');
        } else {
            // Here you would typically send the credentials to a server for validation
            // For this example, we'll just consider it a successful login
            alert('Login successful');
            document.getElementById('form1').reset();
        }
    }

    // Attach the loginHandle function to the form's submit event
    document.getElementById('form1').addEventListener('submit', function(event) {
        event.preventDefault();
        loginHandle();
    });
});