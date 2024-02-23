var empSchema= require('../model/empSchema')
const addAEmployee=(req,res)=>{
    console.log(req.body);
    var empDetails= new empSchema({
        ename:req.body.ename,
        id:req.body.id,
        designation:req.body.designation,
        salary:req.body.salary
       })
       empDetails.save()
       .then(a=>{
        res.json({
          status:200,
          msg:"data saved"
        })
       })
      .catch(err=>{
        res.json({
          status:500,
          msg:"data not saved"
        })
      })
}

module.exports= {addAEmployee}