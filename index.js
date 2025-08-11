const express = require('express');
const app = express();


app.post('/user/signup',(req,res)=>{
    res.json({
        message:"sign up end point "
    })
})
app.post('/user/signin',(req,res)=>{
    res.json({
        message:"sign in end point "
    })
})
app.get('/user/purchases',(req,res)=>{
    res.json({
        message:"sign up end point "
    })
})
app.post('/course/purchase',(req,res)=>{
    res.json({
        message:"sign up end point "
    })
})
app.post('/courses',(req,res)=>{
    res.json({
        message:"courses "
    })
})

app.listen(3000);