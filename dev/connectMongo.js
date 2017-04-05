import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/group2');
//group 2 nom de la base de donnée
mongoose.connect('mongodb://162.243.195.173:27017/group2');
//27017 pr server mongod
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({

        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},

    },
    {collection: 'user'});

//Documents are instances of our model.
var User = mongoose.model('user', userSchema);
// user nom de la table
module.exports = User;


