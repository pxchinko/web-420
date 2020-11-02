/*
============================================
; Title:  authController.js
; Author: Sarah Massie
; Date:   2 November 2020
; Description: creating the user registration and token for REST
;===========================================
*/
var User = require('../models/users');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};