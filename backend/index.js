const express=require('express')
const app=express()
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
const port=process.env.PORT
const mongodb=require("./db")

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

mongodb();
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use(express.json());
app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`) 
}) 