// DECLARATION
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const connexionChain = 'mongodb+srv://USER_SDV:serveurdevoeux@cluster0.fdsvw.mongodb.net/SDV?retryWrites=true&w=majority'
const routes = require('./routes/routes');
const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');


mongoose.set('useFindAndModify', false);
let options = {
    swaggerDefinition: {
        info: {
            description: 'SDV API CRUD : Marion L, Soukayna M, Lauraine H, Marieme D',
            title: 'Swagger API Serveur de Voeux Département Informatique EVRY',
            version: '1.0.0',
        },
        host: 'back-serverdevoeux.herokuapp.com',
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/*.js'] //Path to the API handle folder
};

// USE
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(express.json()) //
app.use('/api', routes);
app.use(cors());

// Connexion base de données
mongoose.connect(
    connexionChain, { useUnifiedTopology: true, useNewUrlParser: true  })
    .then(client => {
        console.log('Connexion Base de données : OK');
    });

expressSwagger(options);

app.listen(process.env.PORT || 3000, function() {
    console.log('Connexion Server : OK');
})
