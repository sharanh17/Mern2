const express =require('express');
// const {data}=require('./DB/currency.json')
// const {data}=require('../DB/users.json');
const getCurrenciesBySymbol =require('./controllers/currency.controller')
const {getUsers ,getUserById,getbyQuery} =require('./controllers/users.controller')


const app=express();

const PORT=7000;

app.get('/',(req,res)=>{
 console.log("Currebt Route: /")
 res.end()
})

app.get('/currencies',(req,res)=>{
    
    res.json(data)
    res.end();
   })

   app.get("/currencies/:symbol",getCurrenciesBySymbol);

   app.get('/users',getUsers);

   app.get("/users/:uuid",getUserById);

   app.get('/users/search',getbyQuery)

   app.get("*",(req,res)=>{
    res.send("BKC")
   })

app.listen(PORT,()=>{
    console.log('..Listening')
})