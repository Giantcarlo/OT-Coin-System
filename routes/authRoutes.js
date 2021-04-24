const express = require('express');
const employerSignUp = require('../controllers/auth/employerSignUp');
const employerLogin = require('../controllers/auth/employerLogin');
const employeeLogin = require('../controllers/auth/employeeLogin');

const router = express.Router();

router.post('/employers/sign-up', employerSignUp);
router.post('/employers/login', employerLogin);
router.post('/employees/login', employeeLogin);

module.exports = router;
