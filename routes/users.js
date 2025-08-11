const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({ message: "Sign up endpoint" });
});

userRouter.post('/signin', (req, res) => {
    res.json({ message: "Sign in endpoint" });
});

userRouter.get('/purchases', (req, res) => {
    res.json({ message: "User purchases endpoint" });
});

module.exports = { userRouter };
