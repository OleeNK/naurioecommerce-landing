document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = document.getElementById('interests').value;

    if (name && email) {
        alert('Thank you for subscribing! You will get access soon.');
        // Optionally, send the data to a server or save it.
        // Example: Send data to server with AJAX
        // fetch('/subscribe', { method: 'POST', body: JSON.stringify({ name, email, interests }) });

        // Close modal after submission
        $('#emailModal').modal('hide');
    } else {
        alert('Please fill in all fields!');
    }
});
