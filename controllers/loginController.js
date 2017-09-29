var express = require('express');
var router = express.Router();

/*Get the login form and process it */
exports.login = function(req, res) {
    res.render('login_form', {title:'Login Form'});
};

