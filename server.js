const express = require('express');
const authRouter = require('./routes/authRoutes');
const employerRouter = require('./routes/employerRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/employers', employerRouter);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
