const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain); // Corrected 'Ires' to 'res'
});

const PORT = 3000;

app.listen(PORT, () => console.log(Listening at localhost:${PORT}));