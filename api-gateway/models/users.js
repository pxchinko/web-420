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
module.exports = mongoose.model('User', userSchema);
// Database queries