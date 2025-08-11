const { Router } = require('express');
const adminRouter = Router();



adminRouter.post('/signup', (req, res) => {
    res.json({ message: "Sign up endpoint" });
});

adminRouter.post('/signin', (req, res) => {
    res.json({ message: "Sign in endpoint" });
});
adminRouter.post('/createcourse', (req, res) => {
    res.json({ message: "Sign in endpoint" });
});
adminRouter.put('/changecourse', (req, res) => {
    res.json({ message: "Sign in endpoint" });
});
adminRouter.get('/course/bulk', (req, res) => {
    res.json({ message: "Sign in endpoint" });
});






module.exports = { adminRouter };