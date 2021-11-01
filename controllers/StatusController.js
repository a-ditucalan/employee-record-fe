const { response } = require('express')
const Status = require('../models/Status')

//show the list of status
const indexStatus = (req,res,next) => {
  Status.find().then(response => {
    res.json({count: response.length,response})
  }).catch(error => {
    res.json({message: 'An error Occured!'})
  })
}

const storeStatus = (req,res,next) => {
  let status = new Status({
    itemStatus: req.body.status
  })
  status.save().then(response => {
    res.json({message: 'Status Added Successfully!'})
  }).catch(error => {
  
  res.json({message: 'An Error Occured',error:error})
})
}

module.exports = {indexStatus, storeStatus}