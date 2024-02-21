var mongoose= require('mongoose')

var empSchema= new mongoose.Schema(
    {
        ename:String,
        id:String,
        designation:String,
        salary:Number
    }
)

module.exports= new mongoose.model('Employees',empSchema)