// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT;

// Config dotenv
dotenv.config();

// Middlewares
app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Connexion à MONGODB
const connect = async () => {
    try{
        await mongoose.connect(process.env.HOST_MONGODB);
        console.log('Connecté à MongoDB');
    }catch(error){
        throw error;
    }
}

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT, () => {
    connect();
    console.log(`Serveur connecté à l'adresse http://localhost:${process.env.PORT}`);
})

