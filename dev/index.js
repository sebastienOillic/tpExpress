import express from 'express'
import pug from 'pug'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

const port = process.argv[2] || 8080

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views/pages'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Email generator',
        email: req.params.email,
        password: req.params.password,
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})