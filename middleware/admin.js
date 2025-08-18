const {JWT_ADMIN_SECRET} = require("../config")
const jwt = require('jsonwebtoken');
const admin = require("../routes/admin");

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_SECRET);
    
    if(decoded){
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message:"You are not signed in !"
        })
    }
}

module.exports = {
    adminMiddleware:adminMiddleware
}
