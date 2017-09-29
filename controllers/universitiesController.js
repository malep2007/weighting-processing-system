var express = require('express');
var router = express.Router();
var async = require("async");
var University = require('../models/university');
var expressValidator = require('express-validator');

/*Get the login form and process it */
exports.get_university_list = function(req, res, next) {
    University.find()
    .sort([['university_name', 'ascending']])
    .exec(function (err, university_names) {
        if (err){ return next (err);}
        res.render('university_list', {title:'University List', universities:university_names})
    });
};

/* create university controller */
exports.create_university_get = function (req, res) {
    res.render('university_create_form', {title: 'Create University'});
}

exports.create_university_post = function (req, res, next) {
    req.checkBody('university_name', 'Title must not be empty').notEmpty()
    req.checkBody('location').escape();
    req.checkBody('web_url').escape();

    var errors = req.validationErrors();
    var university = new University({
        univerity_name:req.body.university_names
    });

    if (errors) {
        res.render('university_create_form', {title: 'Create University', errors: errors});
        return;
    }
    else{
        university.save( function (err) {
            res.redirect('/university/create');
        })
    }
};

