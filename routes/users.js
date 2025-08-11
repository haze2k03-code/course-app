const { Router } = require('express');
const { useReducer } = require('react');

const userRouter = require();


userRouter.post('/signup', (req, res) => {
    res.json({
        message: "sign up end point "
    })
})
userRouter.post('/signin', (req, res) => {
    res.json({
        message: "sign in end point "
    })
})
userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "sign up end point "
    })
})


module.exports={
    userRouter:userRouter
}
