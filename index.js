const express =require('express');
const {data}=require('./DB/currency.json')

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

   app.get('/currencies/:symbol',(req,res)=>{
    const {symbol}=req.params;
    const result=data.find((elem)=>elem.id.toLocaleLowerCase()===symbol.toLocaleLowerCase())
    console.log(req.params)
    if(result){
        res.json(result)
    }else{
        res.sendStatus(404);
    }
   })

   app.get("*",(req,res)=>{
    res.send("BKC")
   })

app.listen(PORT,()=>{
    console.log('..Listening')
})