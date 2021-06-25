const axios = require('axios');
const cheerio = require('cheerio');

const page_url = 'https://www.home.saxo/da-dk/campaigns/millionaerklubben'

function getStocks($) {
    const stocks = [];
    const tablefinder = $(`th:contains("Åbningspris")`);
    tablefinder.parent().parent().parent().find("tbody tr").each((i, element) => {
        const $row = $(element);
        const stock = {};
        stock.name = $row.find('.instrument__description-name').text();
        stock.amount = Number($($row.find('td')[1]).text());
        stock.openprice = Number($($row.find('td')[2]).text().replace(',', '.'));
        stock.investment = stock.amount * stock.openprice / 250000 * 100
        // console.log(`\nfundet aktie: ${stock.name} - ${stock.amount} stk. - købt til ${stock.openprice} kr. - samlet ${stock.amount * stock.openprice} svarende til ${stock.investment} %`);
        stocks.push(stock);
    })

    console.log(stocks);
    // return stocks;
}

function getReturns($) {
    
    const counter = 12;
}

async function getContent() {
    const { data } = await axios.get(page_url); // This is entire HTML page
    const $ = cheerio.load(data); // We pass that into cheerio which is some kind of jquery thing
    getStocks($);
    getReturns($);
}

// const investorID = 'Mads Christiansen'
getContent();



// module.exports = getStocks;