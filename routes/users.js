const { Router } = require('express');
const userRouter = Router();
const { userModel } = require('../database/db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "thefallenleavestellastory"

userRouter.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    let errorthrown = false;
    try {
        const hashedpass = await bcrypt.hash(password, 5);

        await userModel.create({
            name: name,
            email: email,
            password: hashedpass
        })



    } catch (e) {
        res.json({
            message: "user not signed up"
        }
        )
        errorthrown = true;
    }

    if (!errorthrown) {
        res.json({
            message: "User signed in !"
        })
    }


});

userRouter.post('/signin', async (req, res) => {
    const { username, password, email } = req.body;
    const user = await userModel.findOne({
        email: email
    })
    if (!user) {
        res.json({ message: "user DNE" })
    }

    const matchpassword = await bcrypt.compare(password, user.password);
    if (matchpassword) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({
            token: token,
            message: "You're signed in !"
        })
    } else {
        res.status(403).json({ message: "incorrect cred" });

    }
});

userRouter.get('/purchases', (req, res) => {
    res.json({ message: "User purchases endpoint" });
});

module.exports = { userRouter: userRouter };
