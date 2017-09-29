var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UniversitySchema = Schema({
    university_name: {type: String, require: true},
    university_location : {type: String},
    university_url:{type: String}
});

UniversitySchema.virtual('url').get(function () {
    return '/university/' + this._id;
});

//export model
module.exports = mongoose.model("University", UniversitySchema);