
const router=require('express').Router();
const {getUsers ,getUserById,getbyQuery} =require('../controllers/users.controller')



router.get('/search',getbyQuery)

router.get('/',getUsers);



router.get("/:uuid",getUserById);




module.exports= router;