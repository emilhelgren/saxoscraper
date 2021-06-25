const axios = require('axios');
const cheerio = require('cheerio');



const page_url = 'https://www.home.saxo/da-dk/campaigns/millionaerklubben'


async function getContent(investorID) {
    const { data } = await axios.get(page_url); // This is entire HTML page
    const $ = cheerio.load(data); // We pass that into cheerio which is some kind of jquery thing
    // const table = $(`#mads`).siblings()[1].children().children().children()[1].children();

    // Prøv i stedet at finde ordet "instrument" og så lav noget if måske, fordi det virker kun ved mads nu
    const wrapper1 = $(`#mads`).siblings()[1];
    const wrapper2 = $(wrapper1).children().children().children()[1];
    const table = $(wrapper2).children().children();
    console.log(table);
    console.log("that was the table");
    const stocks = [];
    table.find('tbody tr').each((i, element) => {
        const $row = $(element);
        const stock = {};
        stock.name = $row.find('.instrument__description-name').text();
        console.log(`Se her nu: ${stock.name}`);
    });
    


    
    
    // console.log(stocks);
    // return stocks;
    
}


const investorID = 'Mads Christiansen'
getContent(investorID);
// module.exports = getUSStates;