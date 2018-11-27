class cryptoInfo {

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
            console.log(data.ticker.price);

            element.textContent = data.ticker.price;
            // if (request.status >= 200 && request.status < 400) {
            //     data.forEach(movie => {
            //         const card = document.createElement('div');
            //         card.setAttribute('class', 'card');

            //         const h1 = document.createElement('h1');
            //         h1.textContent = movie.title;

            //         const p = document.createElement('p');
            //         movie.description = movie.description.substring(0, 300);
            //         p.textContent = `${movie.description}...`;

            //         element.appendChild(card);
            //         card.appendChild(h1);
            //         card.appendChild(p);
            //     });
            // } else {
            //     const errorMessage = document.createElement('marquee');
            //     errorMessage.textContent = `Gah, it's not working!`;
            //     app.appendChild(errorMessage);
            // }
        }

        request.send();

    }

}

export default cryptoInfo;