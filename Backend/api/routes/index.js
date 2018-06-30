var express = require("express");
var router = express.Router();


var publicWorksController = require('../controllers/publicWorks.controllers.js');
// var reviewsController = require('../controllers/reviews.controllers.js');
// var dealersController = require('../controllers/dealers.controller.js');
// console.log("aaaaaaa");

router
    .route('/publicWorks')
    .get(publicWorksController.publicWorksGetAll);

router
    .route('/coords')
    .get(publicWorksController.publicWorksGetAllCoords);


module.exports = router;
