const crypto = require('crypto');
const employees = require('../../data/employees');

module.exports = (req, res) => {
  // Assume employer exists
  // Bulk upload is an option as well

  const { email } = req.body;

  const id = crypto.randomBytes(4).toString('hex');

  const employee = employees.find((employee) => employee.email === email);

  if (employee) {
    return res.status(400).json({
      status: 'fail',
      message: 'Email already exists. Please use a different email.',
    });
  }

  req.body.id = id;
  req.body.employerId = 'em001';
  employees.push(req.body);

  delete req.body.password;

  res
    .status(201)
    .json({ status: 'success', message: 'Employee successfully added.' });
};
