document.addEventListener('DOMContentLoaded', () => {
    const cryptoList = document.getElementById('cryptoList');

    // Static cryptocurrency data
    const cryptoData = [
        { name: 'Bitcoin', symbol: 'BTC', price: '$29,000', change: '+3.5%' },
        { name: 'Ethereum', symbol: 'ETH', price: '$1,800', change: '+2.1%' },
        { name: 'Binance Coin', symbol: 'BNB', price: '$250', change: '+1.7%' },
        { name: 'Cardano', symbol: 'ADA', price: '$0.30', change: '-0.8%' },
        { name: 'Solana', symbol: 'SOL', price: '$25', change: '+4.2%' }
    ];

    // Populate the crypto list
    cryptoData.forEach(crypto => {
        const card = document.createElement('div');
        card.classList.add('crypto-card');
        card.innerHTML = `
            <h2>${crypto.name} (${crypto.symbol})</h2>
            <p>Price: ${crypto.price}</p>
            <p>Change: <span style="color: ${crypto.change.includes('-') ? 'red' : 'green'}">${crypto.change}</span></p>
        `;
        cryptoList.appendChild(card);
    });
});
