const employers = require('../../data/employers');

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid credentials.',
    });
  }

  const employer = employers.find((employer) => employer.email === email);
  const isValidPassword = employers.some(
    (employer) => employer.password === password
  );

  if (!employer || !isValidPassword) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid credentials.',
    });
  }

  delete employer.password;

  res
    .status(200)
    .json({ status: 'success', data: { employer, token: 'xxxxx' } });
};
