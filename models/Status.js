const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
  itemStatus: {
    type: [String],
    default: ['Guangzhou warehouse','Yiwu warehouse','Shishi warehouse', 'In Transit to PH', 'Custom Clearance', 'Bulacan Warehouse']
  },
},{timestamps: true})

const Status = mongoose.model('Status',userSchema)
module.exports = Status