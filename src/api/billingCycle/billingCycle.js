const restful = require ('nodule-restful')
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema ({
  name : {type: String, required: true },
  value: {type: Number, min: 0}
})
const debtSchema = new mongoose.Schema ({
  name : {type: String, required: true },
  value: {type: Number, min: 0},
  status: {type: String, required: false, uppercase: true,
            enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})
const billingCycleSchema = new mongoose.Schema ({
  name : {type: String, required: true },
  month: {type: Number, min: 1, max: 12, required true},
  year: {type: Number, min:1970, max: 2100, required: true},
  debts: [debSchema]
})
module.exports = restful.model('BillingCycle', billingCycleSchema)
