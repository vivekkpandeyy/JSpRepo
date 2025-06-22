// Function to handle the submission of feedback from the user survey form
function submitFeedback() {
    // Log to console to check if the function is being called
    console.log("submitFeedback function called.");

    // Retrieve values from the respective HTML input elements using their IDs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Log retrieved values for debugging
    console.log("Form Data:", { username, age, email, job, designation, productType, feedback });

    const userInfoDiv = document.getElementById('userInfo');

    // Construct the entire HTML content for the userInfo div dynamically.
    // This ensures that all elements (thank you message, user info) are correctly
    // structured and displayed every time the form is submitted.
    userInfoDiv.innerHTML = `
        <h2>Thank you for your valuable feedback!</h2>
        <h2>User Information:</h2>
        <p>Name: <span id="userName">${username}</span></p>
        <p>Age: <span id="userAge">${age}</span></p>
        <p>Email: <span id="userEmail">${email}</span></p>
        <p>Job: <span id="userJob">${job}</span></p>
        <p>Designation: <span id="userDesignation">${designation}</span></p>
        <p>Feedback for <span id="userProductChoice">${productType}</span>: <span id="userFeedback">${feedback}</span></p>
    `;

    // Make the user information display section visible.
    // The 'userInfo' div is initially hidden with 'display: none' in HTML/CSS,
    // and this line makes it visible ('block') upon form submission.
    userInfoDiv.style.display = 'block';
    console.log("userInfo div display set to block.");
}

// Declare a variable for the submit button and initialize it by fetching the HTML element
// with the ID 'submitBtn'. This allows JavaScript to interact with the button.
const submitButton = document.getElementById('submitBtn');

// Assign the submitFeedback function to be executed when the submitButton is clicked.
// This sets up the event listener for the button.
submitButton.onclick = submitFeedback;

// Add an event listener to the entire document to detect key presses.
// This ensures that the feedback form submits when the 'Enter' key is pressed,
// mimicking a click on the submit button.
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        // If 'Enter' is pressed, call the submitFeedback function
        submitFeedback();
    }
});