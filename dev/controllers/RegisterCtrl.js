import User from '../connectMongo';


export default class RegisterCtrl {
    registerAction(req, res) {
        //rendre les données pr afficher
        res.render('index', {
            title: 'Registration'
        });
    }

    registerActionPost(req, res) {

        if (req.body.password == req.body.confirmPassword) {

            let newUser = new User({
                email: req.body.email,
                password: req.body.password,

            });

            newUser.save(function (err, newUser) {
                if (err) {
                    // return console.error(err);
                    res.render('index', {
                        error: 'Error user not insert in DB'
                    })
                }

                console.log(newUser);
            });

            User.find(function (err, users) {
                if (err) return console.error(err);
                console.log(users);
                res.render('generate', {
                    title: 'Adress Generator',
                    emailList: users

                });

            });
        } else {
            res.render('index', {
                title: 'Registration',
                error: 'Its not the same Password'
            });
            console.log('not the same Password');
        }


    }
}
