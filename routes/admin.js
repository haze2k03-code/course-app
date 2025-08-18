const { Router } = require('express');
require('dotenv').config();
const adminRouter = Router();
const bcrypt = require('bcrypt')
const {adminModel} = require("../database/db")
const {courseModel} = require("../database/db")
const jwt = require('jsonwebtoken')
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET
const {adminMiddleware} = require("../middleware/admin");
const admin = require('../middleware/admin');



adminRouter.post('/signup', async (req, res) => {
    const {name , email , password} = req.body;
    let errorthrown = false;
    try{
        const hashedpass = await bcrypt.hash(password,5);

        await adminModel.create({
            name:name,
            email:email,
            password:hashedpass
        })

        

    }catch(e){
        res.json({
            message:"user not signed up"}
        )
        errorthrown = true;
        console.log(e);
    }

    if(!errorthrown){
        res.json({
            message:"Admin signed in !"
        })
    }
     
    
});

adminRouter.post('/signin', async (req, res) => {
    const adminId = req.userId;
    const { password, email } = req.body;
    const admin = await adminModel.findOne({
        email: email
    })
    if (!admin) {
        res.json({ message: "user DNE" })
    }

    const matchpassword = await bcrypt.compare(password, admin.password);
    if (matchpassword) {
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_SECRET);
        res.json({
            token: token,
            message: "You're signed in !"
        })
    } else {
        res.status(403).json({ message: "incorrect cred" });

    }
});
adminRouter.post('/course', adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const { title , description , price , imageUrl } = req.body;

    const course  = await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId
    })

    res.json({
        message:"course created",
        courseId:course._id
    })
   
});
adminRouter.put('/course',adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const { title , description, imageUrl,price,courseId } = req.body;
    const course = await courseModel.updateOne({
        _id:courseId, // if any other admin sends other admins courses id
        creatorId:adminId // this field will miss match 
    },{
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl
    })

    res.json({
        message:"course updated",
        courseId : course._id
    })

});
adminRouter.get('/course/bulk',adminMiddleware, async  (req, res) => {
    const adminId = req.userId;
    const course = await courseModel.find({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })

});






module.exports = { adminRouter:adminRouter };