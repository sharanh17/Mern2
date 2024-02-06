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
    const {gender ,age }=req.query;

    if(gender && age){
        const result=data.find((item)=>item.gender===gender &&Number(item.dob.age)>=Number(age));

        res.json(result)
    }else if(gender){
        const result=data.filter((item)=>item.gender===gender);
        res.json(result)
    }else if(age){
        const result=data.filter((item)=>Number(item.dob.age)>=Number(age))
        res.json(result)
    }

}


 module.exports ={getUsers,getUserById,getbyQuery}