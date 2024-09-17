const express = require('express');
const bodyparser = require('body-parser');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = Blockchain();

app.use(bodyparser.urlencoded({extended: true}));

app.get('/api/blocks', (req, res) => res.json(blockchain.chain));

app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });
    res.redirect('/api/blocks');
})

const PORT = 3000;
app.listen(prompt, () => console.log(`listening at localhost:${PORT}`));