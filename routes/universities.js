var express = require('express');
var router = express.Router();
var universityController = require('../controllers/universitiesController');

/* GET university list */
router.get('/university', universityController.get_university_list);

/* GET university_create */
router.get('/university/create', universityController.get_university_list);

/* POST university_create */
router.post("/university/create", universityController.create_university_post);
module.exports = router;
