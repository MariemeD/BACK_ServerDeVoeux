const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const connexionChain = 'mongodb+srv://SDV_USER:serveurdevoeux@cluster0.82glw.mongodb.net/SDV?retryWrites=true&w=majority'
const routes = require('./routes/routes');
const expressSwagger = require('express-swagger-generator')(app);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(express.json()) //

// Connexion base de données
mongoose.connect(
    connexionChain, { useUnifiedTopology: true, useNewUrlParser: true  })
    .then(client => {
        console.log('Base de données : OK');
    });

// expressSwagger(options);

app.listen(process.env.PORT || 3000, function() {
    console.log('Server : OK');
})
