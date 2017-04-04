export default class login 
{
   loginAction(req, res)
   {
      res.render('login', {
         title: "Authentification",
         email:req.params.email,
         password:req.params.password
    });
  }; 
  loginActionPost(req, res)
   {
      res.render('login', {
         title: "Authentification",
         email:req.params.email,
         password:req.params.password
    });
  };   
}
