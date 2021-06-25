const express = require('express');

const getContent = require('./getContent');

const app = express(); //Det library vi bruger til at serve

app.use(express.static('public')); //Any static files in "public" folder will be served

app.get('/api/stocks', async (req, res) => {
    const stocks = await getContent();
    res.json(stocks);
});



const port = process.env.PORT || 4242;
app.listen(port, () => {
    console.log('Listening at http://localhost:'+port);
});

