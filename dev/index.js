import User from './User';

let user = new User;

user.checkPass('titip', 'titip');

user.addUser('titip', 'titip');

user.checkPass('titip', 'pitit');

user.checkPass('titip', 'titip');