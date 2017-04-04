export default class IndexCtrl {
    indexAction(req, res) {
        res.render('register', {
            title: 'Email generator',
            email: req.params.email,
            password: req.params.password
        });
    }
}