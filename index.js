
require('dotenv').config()
const express =require('express');

const currencyRoutes=require('./routes/currency.route')
const userRoutes=require('./routes/users.route')
const {verifyAuth}=require('./middleware/verifyAuth')
const app=express();
const PORT=7000;  
     

   
   app.use('/users',userRoutes)
   app.use(verifyAuth);
   app.use('/currencies',currencyRoutes)

   app.get("*",(req,res)=>{
    res.send("BKC")
   })


app.listen(PORT,()=>{
    console.log('..Listening')
})