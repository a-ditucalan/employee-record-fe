const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')
const authenticate = require('../middleware/authenticate')
router.get('/',EmployeeController.index)
router.get('/all',EmployeeController.indexPagination)
router.post('/show', EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',authenticate,EmployeeController.destroy)

module.exports = router