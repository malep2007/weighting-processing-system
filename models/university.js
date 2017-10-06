var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UniversitySchema = Schema({
    name: {type: String, required: true},
    location : {type: String, requred: true},
    web_url:{type: String, required:true}
});

UniversitySchema.virtual('url').get(function () {
    return '/university/' + this._id;
});

//export model
module.exports = mongoose.model("University", UniversitySchema);