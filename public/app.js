
// Vores 'select' dropdown der skal have states listen der har ID='states'
const stockSelector = document.querySelector('#stockselector');
const infoElement = document.querySelector('#info')

var stocks;

$(stockSelector).on('change', function() {
    stocks.forEach((stock) => {
        if (this.value === stock.name) {
            infoElement.innerHTML = `<pre>amount = ${stock.amount} \nopenprice = ${stock.openprice} \ninvestment = ${stock.investment}</pre>`
        }
    });
    
});


function displayStocks(stocks) {
    stocks.forEach((stock) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', stock.name);
        optionElement.textContent = stock.name;
        stockSelector.append(optionElement);
        // VIRKER KUN I FIREFOX :( 
        // optionElement.addEventListener('click', () => {
        //     infoElement.innerHTML = `<pre>${JSON.stringify(stock, null, 2)}</pre>`
        // });
    
    });
}

async function getStocks() {
    // fetch er en function man bruger i browseren åbenbart
    const response = await fetch('/api/stocks');
    stocks = await response.json();
    displayStocks(stocks);
}

getStocks();
