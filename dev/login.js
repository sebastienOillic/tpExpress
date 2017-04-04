/*
import express from 'express';
import bodyParser from 'body-parser';
import expressForm from 'express-form';
import path from 'path';
import pug from 'pug';
const port = process.argv[2] || 8080;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 


// Définition du moteur de template
app.set('view engine', 'pug');
// Définition du dossier de vues
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req, res) => {
    res.render('login', {
      title: "Authentification",
      email:req.params.email,
      password:req.params.password
    });
});

const server = app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
*/

