var express = require('express');
var router = express.Router();
var loginController = require("../controllers/loginController");
var universityController = require("../controllers/universitiesController");



router.get("/university", universityController.get_university_list);

/* GET university_create */
router.get('/university/create', universityController.create_university_get);

/* POST university_create */
router.post('/university/create', universityController.create_university_post);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weighing Information System' });
});

//router.get('/university', universityController.get_university_list);

router.get('/login', loginController.login);

module.exports = router;
