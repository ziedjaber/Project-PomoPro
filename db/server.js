// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', {
  fullname: String,
  email: String,
  password: String,
});

app.post('/signup', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullname, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
