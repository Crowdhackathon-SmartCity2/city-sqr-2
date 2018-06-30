var dbConnect = require('../data/dbConnect.js');
var ObjectId = require('mongodb').ObjectId;
var mongoose = require("mongoose");
var PublicWork = mongoose.model("PublicWork");
//var cars_data = require('../data/data_100.json');


module.exports.publicWorksGetAll = function (req, res) {
    var db = dbConnect.get();
    // var collection = db.collection('car');
    // var start = 0;
    // var number = 6;

    // if (req.query && req.query.lng && req.query.lat)
    // {
    // 	runGeoQuery(req, res);
    // 	return;
    // }

    // if (req.query && req.query.start) {
    //     start = parseInt(req.query.start);
    // }
    // if (req.query && req.query.number) {
    //     number = parseInt(req.query.number);
    // }
    console.log("BLABLA");
    PublicWork
        .find()
        // .sort({"brand": 1})
        // .skip(start)
        // .limit(number)
        .exec(function (err, docs) {
            console.log("Retrieved data for " + docs.length + " public works" /*+ "(start = " + start + ", number = " + number + ")"*/);
            // console.log("PHOTO: " + docs[0].photos[0]);
            res
                .status(200)
                .json(docs);
        });
};

module.exports.publicWorksGetAllCoords = function (req, res) {
    var db = dbConnect.get();
    // var collection = db.collection('car');
    // var start = 0;
    // var number = 6;

    PublicWork
        .find({},{'coords':true,'_id':false})
        // .sort({"brand": 1})
        // .skip(start)
        // .limit(number)
        .exec(function (err, docs) {
            console.log("Retrieved data for " + docs.length + " coords" /*+ "(start = " + start + ", number = " + number + ")"*/);
            // console.log("PHOTO: " + docs[0].photos[0]);
            res
                .status(200)
                .json(docs);
        });
};