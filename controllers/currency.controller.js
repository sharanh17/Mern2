const {data}=require("../DB/currency.json");


const getCurrencieseBySymbol=(req,res)=>{
    const {symbol}=req.params;
    const result=data.find((elem)=>elem.id.toLocaleLowerCase()===symbol.toLocaleLowerCase())
    console.log(req.params)
    if(result){
        res.json(result)
    }else{
        res.sendStatus(404);
    }
   }

   const getCurrencies=(req,res)=>{
    
    res.json(data)
    res.end();
   }

   module.exports ={getCurrencieseBySymbol,getCurrencies}  ;
