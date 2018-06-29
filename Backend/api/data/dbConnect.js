var mongoose = require("mongoose")
var dbURL = 'mongodb://localhost:27017/cityRaise';

mongoose.Promise = global.Promise;
var connection = mongoose.connect(dbURL);

mongoose.connection.on("connected", function() {
    console.log("mongoose connected to " + dbURL);
});

mongoose.connection.on("disconnected", function() {
    console.log("mongoose disconnected");
});

mongoose.connection.on("error", function(err) {
    console.log("mongoose connection error " + err);
});

require("./publicWork.model.js");

module.exports.get = function()
{
    return connection;
};
