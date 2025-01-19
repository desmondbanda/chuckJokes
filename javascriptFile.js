// Initially hide the joke element when the page loads
document.getElementById('joke').style.display = 'none';

// Add a click event listener to the button with ID 'loadBtn'
document.getElementById('loadBtn').addEventListener('click', function() {
    // Fetch a random joke from the Chuck Norris API
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json()) // Parse the JSON response from the API
        .then(data => {
            // Check if the joke data contains a 'value' property
            if (data.value) {
                // If a joke is available, display it in the element with ID 'joke'
                document.getElementById('joke').innerHTML = data.value;
                document.getElementById('joke').style.display = 'block';
            } else {
                // If no joke is available, hide the joke element
                document.getElementById('joke').style.display = 'none';
            }
        })
        .catch(error => {
            // Log any errors to the console and hide the joke element
            console.error('Error fetching joke:', error);
            document.getElementById('joke').style.display = 'none';
        });
});
