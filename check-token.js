/*
============================================
; Title: check-token.js
; Author: Professor Krasso
; Date: December 4 2020
; Modified By: Sarah Massie
; Description: Making a REST API
;===========================================
*/

var jwt = require('jsonwebtoken');
var config = require('./config');

// Check the HTTP head for a valid JSON web token
function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

module.exports = checkToken;