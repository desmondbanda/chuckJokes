// Initially hide the joke and fun fact elements when the page loads
document.getElementById('joke').style.display = 'none';
document.getElementById('funFact').style.display = 'none';

// Show loading spinner while fetching joke
const loadingSpinner = document.getElementById('loadingSpinner');
const funFact = document.getElementById('funFact');

// Add fun facts about Chuck Norris
const funFacts = [
    "Chuck Norris counted to infinity. Twice.",
    "Chuck Norris can divide by zero.",
    "Chuck Norris doesn’t wear a watch. He decides what time it is.",
    "Chuck Norris can slam a revolving door."
];

function getRandomFunFact() {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
}

// Add a click event listener to the button with ID 'loadBtn'
document.getElementById('loadBtn').addEventListener('click', function() {
    loadingSpinner.style.display = 'block';
    document.getElementById('joke').style.display = 'none';
    funFact.style.display = 'none';

    // Fetch a random joke from the Chuck Norris API
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json()) // Parse the JSON response from the API
        .then(data => {
            // Check if the joke data contains a 'value' property
            if (data.value) {
                // If a joke is available, display it in the element with ID 'joke'
                document.getElementById('joke').innerHTML = data.value;
                document.getElementById('joke').style.display = 'block';
                funFact.innerHTML = getRandomFunFact();
                funFact.style.display = 'block';
            } else {
                // If no joke is available, hide the joke element
                document.getElementById('joke').style.display = 'none';
            }
        })
        .catch(error => {
            // Log any errors to the console and hide the joke element
            console.error('Error fetching joke:', error);
            document.getElementById('joke').style.display = 'none';
        })
        .finally(() => {
            loadingSpinner.style.display = 'none';
        });
});
