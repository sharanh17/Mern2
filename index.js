
require('dotenv').config()
const express =require('express');

const currencyRoutes=require('./routes/currency.route')
const userRoutes=require('./routes/users.route')
const mongoose=require('mongoose')
const {verifyAuth}=require('./middleware/verifyAuth')
const app=express();
const PORT=7000;  

const DB_URl="mongodb://localhost:27017/test"
     
 mongoose.connect(DB_URl).then(()=>console.log("DB Connected")).catch((err)=>console.log(err))
   
   app.use('/users',userRoutes)
   app.use(verifyAuth);
   app.use('/currencies',currencyRoutes)

   app.get("*",(req,res)=>{
    res.send("BKC")
   })


app.listen(PORT,()=>{
    console.log('..Listening')
})