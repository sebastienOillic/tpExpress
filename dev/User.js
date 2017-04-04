import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default class UserGestion{
    connect(callback){
        mongoose.createConnection('mongodb://162.243.195.173:27017/group2');

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function callback () {
            console.log('Conntected To Mongo Database');
            let userSchema = mongoose.Schema({
                username: String,
                password: String
            });
            User = mongoose.model(('User', userSchema));
            callback(db, User);
        });
        
    }
    addUser(username, password){
        // mongoose.connect('mongodb://162.243.195.173:17027/group2');
        this.connect((bd, User)=>{
            User.find({name: username}, (err, user) => {
                if (err){
                    return console.error(err);
                }
                if (user != []){
                    return console.error('User already exists!')
                }
                else{
                    console.log("User creation...");
                    let newUser = new User({username: username, password, password});
                    newUser.save((err, newuser)=>{
                        if (err){
                            return console.error(err);
                        }
                    })
                }
            });
            mongoose.connection.close();
        });

    }
    checkPass(username, password){
        this.connect((bd, User)=>{
            User.find({name: username}, (err, user) => {
                if (err){
                    return console.error(err);
                }
                if (user.length != 1){
                    return console.error('User does not exists!');
                }
                else{
                    if (user[0].password != password){
                        return console.error("Bad credentials!");
                    }
                    else{
                        return console.log("Correct credentials!");
                    }
                }
            });
            mongoose.connection.close();
        });

    }
}