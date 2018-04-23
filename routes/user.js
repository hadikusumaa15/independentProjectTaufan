var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Profile = require('../models/profile');
var Login = require('../models/login');

var csrfProtection = csrf();
router.use(csrfProtection);

 ///////lihat data profil
 router.get('/profile', Login.isLoggedIn, function(req, res, next) {
  Profile.find(req.params.email, function(err, doc) {
    console.log(doc.length);

    var jj=[];
    for(var i = 0; i<doc.length; i++){
    console.log(doc[i].email)

    

    if (doc[i].email === req.user.email){
      console.log(doc[i].email+' sama');
      var print = true;
     //arrBol.push(true);
      console.log(print);
      console.log(doc[i].email);
     
      jj.push(doc[i]);
      //res.render('user/profile', {items: doc[jj], emaile: req.user.email, emailv: print});
      console.log(jj);
    }
    else{
    print = false;
     //arrBol.push(false);
      console.log(print);
      //res.render('user/profile', {items: doc[0], emaile: req.user.email, emailv: print});
    }
    
    }
    
    console.log(print);
    console.log(jj);
    res.render('user/profile', {items: jj, emaile: req.user.email, emailv: print});
        
      });
});

  ////LOGOUT
router.get('/logout', Login.isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/');
    failureFlash: true;
    successFlash: 'anda telah logout';
});

router.use('/', notLoggedIn, function(req, res, next){
next();
});

//////////////SIGNUP, seharusnya kalu gagal login balik ke sign up tetapi sekarang belom udah tau caranya cuman entar aja lah.
router.get('/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
  });
  
  router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true,
    successFlash: 'Anda Telah Terdaftar'
  }));
  


  
  /////////////SIGNIN, butuh retreive email hmm tetapi baru progress gitu 
  router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
  });
  
  router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true,
    successFlash: 'Sekarang anda Signed-In'
  }), function(req, res){
});




  ///////////EXPORT
  module.exports = router;


//// INI MAU DIGANTI DENGAN REQUIRE MODEL/LOGIN
/*  function Login.isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
} */

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}