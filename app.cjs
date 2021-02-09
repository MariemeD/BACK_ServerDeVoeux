// DECLARATION
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const connexionChain = 'mongodb+srv://USER_SDV:serveurdevoeux@cluster0.fdsvw.mongodb.net/SDV?retryWrites=true&w=majority'
const routes = require('./routes/routes');
const expressSwagger = require('express-swagger-generator')(app);
mongoose.set('useFindAndModify', false);
let options = {
    swaggerDefinition: {
        info: {
            description: 'SDV API CRUD : Marion L, Soukayna M, Lauraine H, Marieme D',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(express.json()) //
app.use('/api', routes);

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
