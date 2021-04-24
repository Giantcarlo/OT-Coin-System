const express = require('express');
const addEmployee = require('../controllers/employer/addEmployee');

const router = express.Router();

router.post('/add-employee', addEmployee);

module.exports = router;
