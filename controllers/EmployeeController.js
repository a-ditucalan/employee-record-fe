const { response } = require('express')
const Employee = require('../models/Employee')

//show the list of employees
const index = (req,res,next) => {
  const {page = 1, limit = 2, search= ''} = req.query;
  Employee.find(search ? {name: search} : {}).limit(limit *1).skip((page -1) * limit).then(response => {
    res.json({count: response.length,response})
  }).catch(error => {
    res.json({message: 'An error Occured!'})
  })
}

//all employee with pagination

const indexPagination = (req,res,next) => {
  Employee.find().then(response => {
    res.json({count: response.length,response})
  }).catch(error => {
    res.json({message: 'An error Occured!'})
  })
}

// show single employee
const show = (req,res,next) => {
  let employeeID = req.body.employeeID
  Employee.findById(employeeID).then(response=> {
    res.json({
      response
    })
  }).catch(error => {
    response.json({
      message: "An error Occured"
    })
  })
}
// store new employee
const store = (req,res,next)=> {
  let employee = new Employee({
  name: req.body.name,
  designation: req.body.designation,
  email: req.body.email,
  phone: req.body.phone,
  age: req.body.age
})
employee.save().then(response => {
  res.json({message: 'Employee Added Successfully!'})
}).catch(error => {
  res.json({message: 'An Error Occured'})
})
}

//update employee by employee id
const update = (req,res,next)=> {
  let employeeID = req.body.employeeID
  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age
  }

  Employee.findByIdAndUpdate(employeeID, {$set: updateData}).then(
    ()=> {
      res.json({message: 'Employee updated succesully!'}).catch(error => {
        res.json({message: 'An error Occured'})
      })
    }
  )
}

//delete an employee

const destroy = (req,res,next)=> {
  let employeeID = req.body.employeeID
  employeeID
  
  Employee.findByIdAndRemove(employeeID).then(()=>{
    req.json({message: 'Employee deleted successfully!'})
    }).catch(error => {
      req.json({ message: 'An error Occured'})
  })
}
module.exports = {
  index,show, store,update,destroy,indexPagination
}