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
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// POST request for logging in a user
router.post('/auth/login', auth_controller.user_login);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;