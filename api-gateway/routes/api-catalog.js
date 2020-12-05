/*
============================================
; Title:  api-catalog.js
; Author: Sarah Massie
; Date:   2 November 2020
; Description: routes for the authorization controller
;===========================================
*/
// API Routes
var express = require('express');
const checkToken = require('../check-token');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// POST request for logging in a user
router.post('/auth/login', auth_controller.user_login);

// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

// GET request for logging out
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;