const express = require("express");
const app = express();

const firstMiddleware=(req,res,next)=>{
    console.log(" executing the firstMiddleware function.")
    next()
}

const secondMiddleware=(req,res,next)=>{
    console.log("this is the second middleware.")
    next()
}

app.use(firstMiddleware);

app.get('/home',secondMiddleware, function(req, res){
    res.send({message: "Home page"});
})
app.get('/about', function(req, res){
    res.send({message: "about page"});
})
app.get('/courses',secondMiddleware, function(req, res){
    res.send({message: "course page."});
})

app.listen(5000, function(){
    console.log("Server is started at port 5080");
});