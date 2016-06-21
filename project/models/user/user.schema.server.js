module.exports = function () {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: Number,
        // facebook: {
        //     token: String,
        //     id: String,
        //     displayName: String
        // },
        dob: Date,
        dateCreated: {type: Date, default: Date.now()}
    },{collection: "project.user"});

    return UserSchema;
};