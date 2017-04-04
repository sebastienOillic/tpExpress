import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
export default class UserGestion{
    connect(callback){
        // mongoose.createConnection('mongodb://162.243.195.173:27017/group2');
        let db = mongoose.createConnection('mongodb://localhost:27017/account');
        // let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () =>{
            console.log('Connected To Mongo Database');
            let userSchema = new Schema({
                username: String,
                password: String
            });
            mongoose.model(('User', userSchema));
            let User = mongoose.model('User');
            callback(db, User);
        });
        
    }
    addUser(username, password){
        // mongoose.connect('mongodb://162.243.195.173:17027/group2');
        this.connect((db, User)=>{
            User.find({name: username}, (err, user) => {
                if (err){
                    mongoose.disconnect();
                    console.log(err);
                    return 0;
                }
                if (user != []){
                    mongoose.disconnect();
                    console.log('User already exists!')
                    return 0;
                }
                else{
                    console.log("User creation...");
                    let newUser = new User({username: username, password: password});
                    newUser.save((err, newUser)=>{
                        if (err){
                            mongoose.disconnect();
                            console.log(err);
                            return 0;
                        }
                    })
                }
            });
        });
        return 1;

    }
    checkPass(username, password){
        this.connect((db, User)=>{
            User.find({name: username}, (err, user) => {
                if (err){
                    mongoose.disconnect();
                    console.log(err);
                    return 0;
                }
                if (user.length != 1){
                    mongoose.disconnect();
                    console.log('User does not exists!');
                    return 0;
                }
                else{
                    if (user[0].password != password){
                        mongoose.disconnect();
                        console.log("Bad credentials!");
                        return 0;
                    }
                    else{
                        console.log("Correct credentials!");
                        mongoose.disconnect();
                        return 1;
                    }
                }
            });
            
        });
    }
}