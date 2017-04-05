
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
    }
}



