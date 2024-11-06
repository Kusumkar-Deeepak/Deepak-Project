document.getElementById('searchBtn').addEventListener('click', () => {
    let symbol = document.getElementById('cryptoInput').value.trim().toLowerCase();
    if (!symbol) {
        alert('Please enter a cryptocurrency name (e.g., bitcoin)');
        return;
    }

    const apiUrl = `https://api.coingecko.com/api/v3/coins/${symbol}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data && data.market_data) {
                const price = data.market_data.current_price.usd;
                document.getElementById('cryptoResult').innerHTML = `
                    <h2>${data.name} (${data.symbol.toUpperCase()})</h2>
                    <p>Current Price: $${price}</p>
                `;
            } else {
                document.getElementById('cryptoResult').innerHTML = `<p>Cryptocurrency information not found. Please check the name and try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('cryptoResult').innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
        });
});
