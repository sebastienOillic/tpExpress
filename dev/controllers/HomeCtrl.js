export default class HomeCtrl {
  homeAction(req, res) {
      res.render('home', {
         title: "HomePage"
      });
    } 
}