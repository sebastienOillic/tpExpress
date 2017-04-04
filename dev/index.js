import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import IndexCtrl from './controllers/IndexCtrl';
import generatorCtrl from './controllers/GeneratorCtrl';

const indexCtrl = new IndexCtrl();
const generatorCtrl = new GeneratorCtrl();

const app = express();

const port = process.argv[2] || 8080;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views/pages'));

app.get('/', indexCtrl.indexAction);

app.get('/generator', generatorCtrl.indexAction);
app.post('/generator', generatorCtrl.indexActionPost);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});