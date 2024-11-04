document.getElementById('translateButton').addEventListener('click', translateText);

function translateText() {
    const inputText = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('languageSelect').value;

    if (inputText === '') {
        document.getElementById('outputText').innerText = 'Please enter text to translate.';
        return;
    }

    const apiUrl = 'https://libretranslate.com/translate';
    const params = {
        q: inputText,
        source: 'en',
        target: targetLanguage,
        format: 'text'
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText = data.translatedText;
    })
    .catch(error => {
        document.getElementById('outputText').innerText = 'Error translating text. Please try again.';
        console.error('Error:', error);
    });
}
