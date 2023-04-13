const express  = require('express');
const cors = require('cors');
const phones = require('./phones.json');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bismillahir Rahmanir Rahim. Alhamdulillah, Allahu Akbar');
});

app.get('/about', (req, res) => {
    res.send('We are learing ExpressJS');
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    // console.log('i need the id:', id);

    const phone = phones.find(phone => phone.id === parseInt(id));
    res.send(phone);
});

app.listen(port, () => {
    console.log(`This app is using server port: ${port}`);
});