const verifyAuth=(req,res,next)=>{

    const {authorization}=req.headers;
    console.log(req.headers,authorization)
    if(!authorization){
        console.log('executed')
        
     return res.status(403).json({message:'Unauthorized request'})
    }
    console.log(process.env.ROUTE_PASSWORD)
     if(authorization!==process.env.ROUTE_PASSWORD){
        return   res.status(403).json({message:'Unauthorized request'})
     }
     next();
    }

    module.exports={verifyAuth}