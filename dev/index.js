import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import LoginCtrl from './controllers/LoginCtrl';
import RegisterCtrl from './controllers/RegisterCtrl';
import GeneratorCtrl from './controllers/GeneratorCtrl';

const registerCtrl = new RegisterCtrl();
const generatorCtrl = new GeneratorCtrl();
const loginCtrl = new LoginCtrl();

const app = express();
const port = process.argv[2] || 8080;
//8080 pr server http
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views/pages'));

<<<<<<< HEAD
//traitement des requete avant arriver au controler midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1 /page principal, get: affichage, post: enovoie formulaire
app.get('/', registerCtrl.registerAction);
app.post('/', registerCtrl.registerActionPost);

app.get('/generator', generatorCtrl.indexAction);
app.post('/generator', generatorCtrl.indexActionPost);


=======
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> e7742cd5e3b399aa7761f2709b82491465fddbc7

app.get('/register', registerCtrl.registerAction);
app.post('/register', registerCtrl.registerActionPost);
app.get('/generator', generatorCtrl.generatorAction);
app.post('/generator', generatorCtrl.generatorActionPost);
app.get('/login', loginCtrl.loginAction);
app.post('/login', loginCtrl.loginActionPost);


app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});