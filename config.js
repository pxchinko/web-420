/*
============================================
; Title:  config.js
; Author: Sarah Massie
; Date:   2 November 2020
; Description: Configuring the port and secret
;===========================================
*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

// public key
config.web.secret = 'topsecret'