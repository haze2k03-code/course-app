const { Router } = require('express');
const { userMiddleware } = require('../middleware/user');
const { purchaseModel, courseModel } = require('../database/db');
const courseRouter = Router();

courseRouter.post('/purchase',userMiddleware,async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;
    //   payment check should be here 
    const purchase = await purchaseModel.creat({
        userId:userId,
        courseId:courseId
    })
    const course = await courseModel({
        courseId:courseId
    })
    res.json({ 
        message: "Course purchase complete",
        coursename:course.title
     });
});

courseRouter.get('/preview',async (req, res) => {
    const course = await courseModel.find({});
    res.json(course);
    res.json({ message: "Course preview endpoint" });
});

module.exports = {courseRouter:courseRouter};
