var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Profile = require('../models/profile');

var csrfProtection = csrf();
router.use(csrfProtection);

 ///////lihat data profil

 router.get('/profile', isLoggedIn, function(req, res, next) {
  Profile.find()
      .then(function(doc) {
        res.render('user/profile', {items: doc});
      });
});
  ////LOGOUT
router.get('/logout', isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/')
});

router.use('/', notLoggedIn, function(req, res, next){
next();
});

//////////////SIGNUP
router.get('/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
  });
  
  router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  }));
  


  
  /////////////SIGNIN
  router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
  });
  
  router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
  }));
  




  ///////////EXPORT
  module.exports = router;

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}