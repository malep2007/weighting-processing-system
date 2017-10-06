var express = require('express');
var router = express.Router();
var async = require("async");
var University = require('../models/university');
var expressValidator = require('express-validator');

/*Get the login form and process it */
exports.get_university_list = function(req, res, next) {
    University.find()
    // .sort([['university_name', 'ascending']])
    .exec(function (err, university_name) {
        if (err){ return next (err);}
        res.render('university_list', {title:'University List', universities:university_name})
    });
};

/* create university controller */
exports.create_university_get = function (req, res) {
    res.render('university_create_form', {title: 'Create University'});
}

exports.create_university_post = function (req, res, next) {
    req.checkBody('name', 'Title must not be empty').notEmpty()
    req.checkBody('location').escape();
    req.checkBody('web_url').escape();

    var errors = req.validationErrors();
    var university = new University({
        name:req.body.university_names,
        location:req.body.location,
        web_url:req.body.web_url
    });

    if (errors) {
        async.parallel({
            universities: function (callback) {
                University: find(callback);
            }, function (err, results) {
                if (err, results) {
                    return next(err);
                }
                res.render('university_create_form', {title: 'Create University', errors: errors});
            }
        });
    }
    else{
        university.save( function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/university/create');
        });
    }
};

