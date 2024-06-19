require('dotenv').config({ path: './assets/modules/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/admin', (req, res) => {
    const { gender, name, guiltyFrom, guiltyTill, person, clas, username, password } = req.body;
    const hashedPassword = bcrypt.hash(password, 10)
    try{
        prisma.user.create({
            data: { gender, name, guiltyFrom, guiltyTill, person, clas, username, hashedPassword },
        });
        res.json({message: "user saved succesfullt"})
    }catch(error){
        console.log("error saving data:", error)
        res.status(500).json({message: "Internal server error"})
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


app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
});