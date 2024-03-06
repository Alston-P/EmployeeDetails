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

const updateEmployee = (req,res)=> {
  ename=req.body.ename,
  id=req.body.id,
  designation=req.body.designation,
  salary=req.body.salary
  console.log(ename);
}

module.exports = { addAEmployee, showEmployee, deleteEmployee, fetchEmployee, updateEmployee }