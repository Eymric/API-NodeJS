import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/route';
import database from './src/models/database';

// Création de l'app
const app = express();

// Configuration du serveur avec Cors et BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

// Utilisation des routes
app.use('/', router);


// Lancement du serveur
const port = 3500;

database().then(async () => {
    console.log('Database server is connected');
    app.listen(port, () => {
        console.log(`Serveur lancé sur le port ${port}...`)
    });
})


export default app;