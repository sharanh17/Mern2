const router=require('express').Router()
const {getCurrencies ,getCurrencieseBySymbol}=require('../controllers/currency.controller')


router.get('/title',(req,res)=>{
    res.send('<h1>Currency Data Base</h1>')
    })
    router.get('/',getCurrencies)
    router.get("/:symbol",getCurrencieseBySymbol);

  module.exports=router;