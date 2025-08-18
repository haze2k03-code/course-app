const express = require('express');
const app = express();
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const JWT_SECRET = "thefallenleavestellastory"
const bcrypt = require('bcrypt')

const { userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/course');
const  { adminRouter } = require('./routes/admin')

app.use(express.json()); 

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

async function main() {
    // use dotenv here afterwards
    await mongoose.connect("mongodb+srv://Haze2k03:92fPfNf9ciAs8nev@cluster0.dwb4p1i.mongodb.net/coursera-app")
    app.listen(3000)
    console.log("Listening on port 3000")
}


main()
