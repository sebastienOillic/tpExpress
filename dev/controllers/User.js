// User.js

const fs = require('fs');
const os = require('os');

export default class User{
	constructor(firstname,lastname,domaine){
		this.firstname = firstname.toLowerCase();
		this.lastname = lastname.toLowerCase();
		this.domaine = domaine.toLowerCase();
	}

	creeradresse(){
		var tab = [
			`${this.firstname}.${this.lastname}@${this.domaine}`.replace(' ',''),
			`${this.firstname}${this.lastname}@${this.domaine}`.replace(' ',''),
			`${this.firstname}.${this.lastname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.firstname}${this.lastname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.firstname.charAt(0)}.${this.lastname}@${this.domaine}`.replace(' ',''),
			`${this.firstname.charAt(0)}${this.lastname}@${this.domaine}`.replace(' ',''),
			`${this.firstname.charAt(0)}.${this.lastname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.firstname.charAt(0)}${this.lastname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.lastname}.${this.firstname}@${this.domaine}`.replace(' ',''),
			`${this.lastname}${this.firstname}@${this.domaine}`.replace(' ',''),
			`${this.lastname}.${this.firstname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.lastname}${this.firstname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.lastname.charAt(0)}.${this.firstname}@${this.domaine}`.replace(' ',''),
			`${this.lastname.charAt(0)}${this.firstname}@${this.domaine}`.replace(' ',''),
			`${this.lastname.charAt(0)}.${this.firstname.charAt(0)}@${this.domaine}`.replace(' ',''),
			`${this.lastname.charAt(0)}${this.firstname.charAt(0)}@${this.domaine}`.replace(' ','')
		];

		fs.writeFileSync('usermail.csv', `${this.firstname.replace(this.firstname.charAt(0),this.firstname.charAt(0).toUpperCase())} ${this.lastname.toUpperCase()}`+os.EOL, 'utf8');

		tab.forEach( (item,index,array) => {
			fs.appendFileSync('usermail.csv', item+os.EOL, 'utf8');
		});
	}
}
