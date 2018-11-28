class CryptoInfo {

    constructor(selector) {
        this.selector = selector;
    }

    getCrypto() {
        let element = document.getElementById(this.selector);

        let request = new XMLHttpRequest();
        request.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd', true);
        request.onload = function () {

            // Begin accessing JSON data here
            let data = JSON.parse(this.response);
            console.log(data.ticker);

            element.textContent = data.ticker.price;

        }

        request.send();

    }

}

export default CryptoInfo;