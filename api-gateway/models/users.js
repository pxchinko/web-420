/*
============================================
; Title:  users.js
; Author: Sarah Massie
; Date:   2 November 2020
; Description: creating user schema for username, password, and email
;===========================================
*/
// fields: username, password, and email
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema)

// user.save is used to add a new user to our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};