
document.getElementById('joke').style.display = 'none';

document.getElementById('loadBtn').addEventListener('click', function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            if (data.value) {
                document.getElementById('joke').innerHTML = data.value;
                document.getElementById('joke').style.display = 'block';
            } else {
                document.getElementById('joke').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke').style.display = 'none';
        });
});