const crypto = require('crypto');
const employers = require('../../data/employers');

module.exports = (req, res) => {
  const { email } = req.body;

  const id = crypto.randomBytes(4).toString('hex');

  const employer = employers.find((employer) => employer.email === email);

  if (employer) {
    return res.status(400).json({
      status: 'fail',
      message: 'Email already exists. Please use a different email.',
    });
  }

  req.body.id = id;
  employers.push(req.body);

  delete req.body.password;

  res
    .status(201)
    .json({ status: 'success', data: { employer: req.body, token: 'xxxxx' } });
};
