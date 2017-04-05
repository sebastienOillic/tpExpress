import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import RegisterCtrl from './controllers/RegisterCtrl';
import GeneratorCtrl from './controllers/GeneratorCtrl';

const registerCtrl = new RegisterCtrl();
const generatorCtrl = new GeneratorCtrl();

const app = express();
const port = process.argv[2] || 8080;
//8080 pr server http
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views/pages'));

//traitement des requete avant arriver au controler midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1 /page principal, get: affichage, post: enovoie formulaire
app.get('/', registerCtrl.registerAction);
app.post('/', registerCtrl.registerActionPost);

app.get('/generator', generatorCtrl.indexAction);
app.post('/generator', generatorCtrl.indexActionPost);



app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});