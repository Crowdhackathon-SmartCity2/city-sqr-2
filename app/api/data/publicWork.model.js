var mongoose = require("mongoose");
//
// var votesSchema = new mongoose.Schema({
//     funny: Number,
//     useful: Number,
//     cool: Number
// });
//
// var reviewsSchema = new mongoose.Schema({
//     username: String,
//     votes: votesSchema,
//     // user_id: String,
//     // review_id:String,
//     text: String,
//     // car_id:String,
//     stars: Number,
//     date: {
//         type: Date,
//         default: Date.now
//     }
//     // type: String
// });
//
// var dealersSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     website: String
// });

var publicWorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    coords: [Number],

    municipality: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    images_now: [String],
    images_after: [String],

    date_published: String,

    current_funds: [Number],
    required_funds: Number

    // review_count: Number,
    // reviews: [reviewsSchema],
    // dealers: [dealersSchema]
});

// var reviewSchema = new mongoose.Schema({
//  username : String,
//  votes : votesSchema,
//  text : String,
//  stars : Number,
//  date : {
//  type : Date,
//  default : Date.now
//  }
// });
// carSchema.index({
//     brand: 'text',
//     model: 'text',
//     year: 'text',
//     color: 'text',
//     type: 'text'
//     //'profile.something': 'text'
// });

mongoose.model("PublicWork", publicWorkSchema, "publicWorks");

