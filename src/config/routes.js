cons express = require ('express')

module.exports = function (server) {
  //defining Base URL for all routes
  const router = express.Router()
  server.use ('/api', router)
  // Routes of Billing cycles
  const BillingCycle = require ('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
