document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {   //Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID with the actual Eamiljs credentials
        to_name: 'me',  // Set a fixed value or dynamically if needed
        from_name: 'User',  // Assuming you want to use phone number as from_name
        message: `Phone: ${phone}, Query: ${query}` // The actual message from the form
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('form-message').textContent = 'Thank you for contacting us!';
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('form-message').textContent = 'There was an error sending your message. Please try again.';
    });

});

