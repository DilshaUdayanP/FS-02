// Function to make a POST request to the API and handle responses
async function makeApiRequest(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        return response.json();
    } catch (error) {
        console.error('API request error:', error);
        // Handle error, show an error message, etc.
    }
}

// Registration Form Submission
document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const registrationData = {
        // Construct registration data object based on form input
    };

    // Make a POST request to the registration API
    const registrationResponse = await makeApiRequest('https://geek-store.onrender.com/user/register', registrationData);

    // Handle the registration response (success or error)
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const loginData = {
        // Construct login data object based on form input
    };

    // Make a POST request to the login API
    const loginResponse = await makeApiRequest('https://geek-store.onrender.com/user/login', loginData);

    // Handle the login response (success or error)
    if (loginResponse && loginResponse.token) {
        // Store the token in local storage if login is successful
        localStorage.setItem('token', loginResponse.token);
        // Redirect to the dashboard or perform other actions
    }
});

// Password Reset Form Submission
document.getElementById('password-reset-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const resetData = {
        // Construct password reset data object based on form input
    };

    // Make a POST request to the password reset API
    const resetResponse = await makeApiRequest('https://geek-store.onrender.com/user/forgot-password', resetData);

    // Handle the password reset response (success or error)
});

// Check if the user is logged in and display content accordingly
const token = localStorage.getItem('token');
if (token) {
    // User is logged in, display the dashboard or perform other actions
    // You may also want to add a logout button to clear the token from local storage
}
