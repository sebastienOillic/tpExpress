import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/group2');
//group 2 nom de la base de donnée
mongoose.connect('mongodb://162.243.195.173:27017/group2');
//27017 pr server mongod
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log ('we are connected!');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

},
    {collection:'user'});

//Documents are instances of our model.
var User = mongoose.model('user', userSchema);
// user nom de la table
module.exports = User;



// app.post('/index', (req, res)=>{
//     console.log(req.body);
//
//
// });


//     var newUser = mongoose.model('newUser', userSchema);
//     newUser.create(user, function(err, nUser) {
//         if(err) return next(err);
//         if(q.body.pw != req.body.pw2){
//             return res.flash('not the same');
//         }
//         req.session.user = email;
//         return res.send('Logged In!');
//     });
// });




// app.post('/login', function (req, res, next) {
//     var email = req.body.email;
//     var pass = req.body.pass;
//
//     User.findOne({Email: email, Pass: pass}, function(err, user) {
//         if(err) return next(err);
//         if(!user) return res.send('Not logged in!');
//
//         req.session.user = email;
//         return res.send('Logged In!);
//     });
// });
//
// app.get('/logout', function (req, res) {
//     req.session.user = null;
// });
//








// var newUser = new User();
// // set the user's local credentials
//
// newUser.password = createHash(password);
// newUser.email = req.param('email');
//
//
// // save the user
// newUser.save(function(err) {
//     if (err){
//         console.log('Error in Saving user: '+err);
//         throw err;
//     }
//     console.log('User Registration succesful');
//     return done(null, newUser);
// });
//
//
