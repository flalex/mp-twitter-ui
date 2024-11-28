const MAX_USER_INPUT = 120;

document.getElementById('simpleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(this);
    const payload = Object.fromEntries(formData.entries());

    // Send POST request
    fetch('https://jsonplaceholder.typicode.com/posts', { // Replace with your actual URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        console.log('Response:', data);
    })
    .catch(error => {
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
    });
});


// Limit inputs to 120 characters.
document.querySelectorAll('.limited-input-120').forEach(input => {
    let previousValue = '';
    input.addEventListener('input', function() {
        if (this.value.length > MAX_USER_INPUT) {
            this.value = previousValue;
            alert('Input is limited to a maximum of 120 characters.');
        } else {
            previousValue = this.value; // Update the previous value
        }
    });
});
