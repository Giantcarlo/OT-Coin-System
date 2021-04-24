const employees = require('../../data/employees');

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid credentials.',
    });
  }

  const employee = employees.find((employee) => employee.email === email);
  const isValidPassword = employees.some(
    (employee) => employee.password === password
  );

  if (!employee || !isValidPassword) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid credentials.',
    });
  }

  delete employee.password;

  res
    .status(200)
    .json({ status: 'success', data: { employee, token: 'xxxxx' } });
};
