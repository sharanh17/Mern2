const {data} =require('../DB/users.json')



const getUsers=(req,res)=>{
    res.json(data);

   
};

const getUserById=(req,res)=>{
    const {uuid}=req.params;

    const result=data.find((item)=>item.login.uuid===uuid)

    if(result){
        res.json(result)
    }else{
        res.sendStatus(404);
    }
}


const getbyQuery=(req,res)=>{

    console.log(req.query)
    console.log("Inside getUserByQuery")
    const {gender,age }=req.query;

    // const error=getQueryError({age,gender});
    // if(error){
    //     res.status(422).json(error)
    // }

    if(gender && age){
        const result=data.filter((item)=>item.gender==gender && Number(item.dob.age)>=Number(age)
        );

        res.json(result)
    }else if(gender){
        const result=data.filter((item)=>item.gender==gender);
        res.json(result)
    }else if(age){
        const result=data.filter((item)=>Number(item.dob.age)>=Number(age))
        res.json(result)
    }else{
        res.sendStatus(404);
    }

}


 module.exports ={getUsers,getUserById,getbyQuery}