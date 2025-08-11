const Router = require('express');
const courseRouter = Router();






courseRouter.post('/course/purchase',(req,res)=>{
    res.json({
        message:"sign up end point "
    })
})
courseRouter.post('/course/preview',(req,res)=>{
    res.json({
        message:"courses "
    })
})


module.exports = {
    courseRouter:courseRouter
}