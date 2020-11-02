/*
============================================
; Title:  index.js
; Author: Sarah Massie
; Date:   2 November 2020
; Description: control page for the index
;===========================================
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST APIs' });
});

module.exports = router;
