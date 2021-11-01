const express = require('express')
const router = express.Router()
const StatusController = require('../controllers/StatusController')
router.get('/',StatusController.indexStatus)
router.post('/storeStatus',StatusController.storeStatus)

module.exports = router