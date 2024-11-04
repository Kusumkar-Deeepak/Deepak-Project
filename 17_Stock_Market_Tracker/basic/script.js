document.getElementById('searchBtn').addEventListener('click', () => {
    const symbol = document.getElementById('stockInput').value.trim();
    if (!symbol) {
        alert('Please enter a company symbol.');
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual free API key from Finnhub or Alpha Vantage
    const apiKey = 'UMK7NYO8VMI8ATRR';
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data['Global Quote'] && data['Global Quote']['05. price']) {
                const price = data['Global Quote']['05. price'];
                document.getElementById('stockResult').innerHTML = `
                    <h2>${symbol.toUpperCase()}</h2>
                    <p>Current Price: $${price}</p>
                `;
            } else {
                document.getElementById('stockResult').innerHTML = `<p>Stock information not found. Please check the symbol and try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
            document.getElementById('stockResult').innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
        });
});
