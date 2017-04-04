export default class IndexCtrl {
    indexAction(req, res) {
        res.render('index', {
            title: 'Email generator',
            email: req.params.email,
            password: req.params.password
        });
    }
}