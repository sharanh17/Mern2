const mongoose=require('mongoose');

const blogSchema= new mongoose.Schema({
    title:String,
    authors:[String],
    content:String,
    
})


const blogModel=mongoose.model("Blogs",blogSchema)

module.exports=blogModel;