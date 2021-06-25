const express = require('express');



// Vores 'select' dropdown der skal have states listen der har ID='states'
const stockSelector = document.querySelector('#stockselector');
const infoElement = document.querySelector('#info')

function displayStocks(stocks) {
    stocks.forEach((stock) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', stock.name);
        optionElement.textContent = stock.name;
        statesElement.append(optionElement);
        optionElement.addEventListener('click', () => {
            infoElement.innerHTML = `<pre>${JSON.stringify(stock, null, 2)}</pre>`
        });
    
    });
}

async function getStocks() {
    // fetch er en function man bruger i browseren åbenbart
    const response = await fetch('/api/stocks');
    const stocks = await response.json();
    displayStocks(stocks);
}

getStocks();
