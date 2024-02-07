
const router=require('express').Router();
const {getUsers ,getUserById,getbyQuery} =require('../controllers/users.controller')
const {validateSearchQuery}=require('../middleware/validators/users.validators')



router.get('/search',validateSearchQuery,getbyQuery)

router.get('/',getUsers);



router.get("/:uuid",getUserById);




module.exports= router;