export default class RegisterCtrl {
    registerAction(req, res) {
        res.render('register', {
            title: 'Email generator',
            email: req.params.email,
            pw: req.params.pw,
            pw2: req.params.pw2,
        });
    }
    registerActionPost(req, res) {
        res.render('register', {
            title: 'Email generator',
            email: req.body.email,
            pw: req.body.pw,
            pw2: req.body.pw2,
        });
    }
}