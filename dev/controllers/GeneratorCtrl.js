<<<<<<< HEAD
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
=======

import User from "./User";

export default class GeneratorCtrl {
	
    generatorAction(req, res) {
		res.render('generate', {
			title: "Adress' generator",
			firstname: req.params.firstname,
			lastname: req.params.lastname,
			domaine: req.params.domaine
		});
    }
    
    generatorActionPost(req, res) {
    	console.log(req.body);
		res.render('generate', {
			title: "Adress' generator",
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			domaine: req.body.domaine
		});
		const user = new User(req.body.firstname,req.body.lastname,req.body.domaine);
		user.creeradresse();
		res.download('usermail.csv', `${req.body.firstname}.${req.body.lastname}.csv`);
    }
}



>>>>>>> e7742cd5e3b399aa7761f2709b82491465fddbc7
