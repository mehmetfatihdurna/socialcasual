//Kütüphanelerimizi çağırıyoruz
require('dotenv').config();//ortam değişkenlerini ekliyoruz

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');


//Ortam değişkenlerine ulaşıyoruz
const mongoDbUrl = process.env.DATABASE_URL;

//mongoDb ye bağlanıyoruz
mongoose.connect(mongoDbUrl);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});


const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const PORT = 3000;

app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())
app.use('/api', routes);



app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});