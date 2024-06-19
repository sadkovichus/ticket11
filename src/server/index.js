require('dotenv').config({ path: './assets/modules/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.post('/admin', async (req, res) => {
  const { email, password } = req.body;
  console.log(password)
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { email, password},
    });
    res.json({ message: "User saved successfully" });
  } catch (error) {
    console.log("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});