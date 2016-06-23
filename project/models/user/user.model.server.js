// module.exports = function(){
//     var mongoose = require("mongoose");
//
//     var UserSchema = require("./user.schema.server")();
//     var User= mongoose.model("ProjectUser", UserSchema);
//
//     var api = {
//         createUser: createUser,
//         findUserById: findUserById,
//         findUserByCredentials: findUserByCredentials,
//         deleteUser: deleteUser,
//         findUserByUsername:findUserByUsername,
//         updateUser: updateUser
//         // findFacebookUser: findFacebookUser
//     };
//     return api;
//
//     // function findFacebookUser(id) {
//     //     return User.findOne({"facebook.id" : id});
//     // }
//
//     function createUser(user){
//         return User.create(user);
//     }
//
//     function findUserById(userId){
//         return User.findById({_id: userId});
//     }
//
//     function findUserByUsername(username) {
//         return User.findOne({username:username});
//     }
//
//     function findUserByCredentials(username , password){
//         return User.findOne({username: username, password: password});
//     }
//
//     function updateUser(userId , user){
//         delete user._id;
//
//         return User
//             .update({_id: userId},{
//                 $set: user
//             });
//     }
//
//     function deleteUser(userId){
//         return User.remove({_id: userId});
//     }
// }


module.exports = function() {

    var mongoose = require("mongoose")
    var UserSchema = require("./user.schema.server.js")();
    var User = mongoose.model("ProjectUser", UserSchema);

    var api = {
        createUser: createUser,
        findUserByCredentials:findUserByCredentials,
        updateUser:updateUser,
        findUserById:findUserById,
        findUserByUsername:findUserByUsername,
        findUserByGoogleId:findUserByGoogleId
    };
    return api;


    function createUser(user) {
        return User.create(user);
    }
    function findUserByCredentials(username, password) {
        return User.findOne({username: username, password: password});
    }
    function updateUser(userId, user) {
        delete user._id;
        return User
            .update({_id: userId},{
                $set: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender:user.gender,
                    dob:user.dob
                }
            });
    }

    function findUserById(userId) {
        return User.findById(userId);
    }
    function findUserByUsername(username) {
        return User.findOne({username:username});
    }

    function findUserByGoogleId(googleId) {
        return User.findOne({'google.id': googleId});
    }


};