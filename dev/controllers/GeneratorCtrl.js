import User from '../connectMongo';
import GeneratorService from '../services/GeneratorService';

const generatorService = new GeneratorService();

export default class GeneratorCtrl {
    indexAction(req, res) {
        res.render('gen', {
            title: 'Check your email'
        });

    }

    indexActionPost(req, res) {

        var userModel = {};

        userModel.firstname = req.body.firstname;
        userModel.lastname = req.body.lastname;
        userModel.domain = req.body.domain;

        let list = generatorService.generateMail(userModel);

        res.render('listGen', {
            title : 'Email Generator',
            list: list

            // email: req.params.email,
            // pw: req.params.pw,
            // pw2: req.params.pw2,
        });
    }
}