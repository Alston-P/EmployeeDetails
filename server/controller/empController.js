var empSchema = require('../model/empSchema')

const addAEmployee = async (req, res) => {
  console.log(req.body);
  var empDetails = new empSchema({
    ename: req.body.ename,
    id: req.body.id,
    designation: req.body.designation,
    salary: req.body.salary
  })
  await empDetails.save()
    .then(a => {
      res.json({
        status: 200,
        msg: "data saved"
      })
    })
    .catch(err => {
      res.json({
        status: 500,
        msg: "data not saved"
      })
    })
}

const showEmployee = async (req, res) => {
  const show = await empSchema.find()
    .then(a => {
      res.json({
        msg: "data recieved",
        data: a
      })
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "data not recieved"
      })
    })

}

const deleteEmployee = (req, res) => {
  const id = req.params.id
  empSchema.findByIdAndDelete(id)
    .then(a => {
      res.json({
        status: 200,
        msg: "data deleted",
        data: a
      })
    })
    .catch(err => {
      res.json({
        status: 500,
        msg: "data is not deleted"
      })
    })

}

const fetchEmployee = (req, res) => {
  const id = req.params.id
  empSchema.findById(id)
    .then(a => {
      res.json({
        status: 200,
        msg: "data is fetched",
        data: a
      })
    })
    .catch(err => {
      res.json({
        status: 500,
        msg: "data is not fetched"
      })
    })
}

const updateEmployee =  (req,res)=> {

  const empid= req.params.empid
  console.log(empid,"l");

  const {ename,id,designation,salary}= req.body
  console.log(ename,id,designation,salary,"o")

  empSchema.findByIdAndUpdate(empid,{ename,id,designation,salary},{new:true})
  .then(data=>{
    res.json({
      status: 200,
      msg:"data is updated",
      data:data
    })
  })
  .catch(err=>{
    res.json({
      status:500,
      msg:"data not updated"
    })
  })


}

module.exports = { addAEmployee, showEmployee, deleteEmployee, fetchEmployee, updateEmployee }