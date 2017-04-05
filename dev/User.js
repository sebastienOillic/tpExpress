import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
export default class UserGestion{
    constructor(){
        var userSchema = new Schema({
            username: String,
            password: String
        }, {collection: 'user'});
        this.User = mongoose.model('user', userSchema);
    }
    connect(callback){
        // mongoose.createConnection('mongodb://162.243.195.173:27017/group2');
        var db = mongoose.createConnection('mongodb://localhost:27017/account');
        // let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () =>{
            console.log('Connected To Mongo Database');
            callback(db)
        });
        
    }
    addUser(username, password){
        // mongoose.connect('mongodb://162.243.195.173:17027/group2');
        this.connect((db)=>{
            console.log("add user");
            let query = this.User.find({username: username})
            query.exec((err, user) => {
                console.log("test");
                if (err){
                     
                    console.log(err);
                    return 0;
                }
                if (user != []){
                     
                    console.log('User already exists!')
                    return 0;
                }
                else{
                    console.log("User creation...");
                    let newUser = new this.User({username: username, password: password});
                    newUser.save((err, newUser)=>{
                        if (err){
                             
                            console.log(err);
                            return 0;
                        }
                        else{
                             
                            console.log("User created!");
                            return 1;
                        }
                    })
                }
            });
        });
        mongoose.disconnect();
    }
    checkPass(username, password){
        this.connect((db)=>{
            console.log("checkPass");
            // console.log(this);
            // console.log(this.User.find());
            let query = this.User.find({username: username});
            // console.log(query);
            query.exec((err, user) => {
                console.log("test");
                if (err){
                     
                    console.log(err);
                    return 0;
                }
                if (user.length != 1){
                     
                    console.log('User does not exists!');
                    return 0;
                }
                else{
                    if (user[0].password != password){
                         
                        console.log("Bad credentials!");
                        return 0;
                    }
                    else{
                        console.log("Correct credentials!");
                         
                        return 1;
                    }
                }
            });
            // console.log(result);
            // console.log("loooool Nope!");
        });
        mongoose.disconnect();
    }
}