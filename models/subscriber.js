// const mongoose = require('mongoose')

// const subscriberSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   subscribedToChannel: {
//     type: String,
//     required: true
//   },
//   subscribeDate: {
//     type: Date,
//     required: true,
//     default: Date.now
//   }
// })

// module.exports = mongoose.model('Subscriber', subscriberSchema)



const express =  require('express')
const router = express.Router()


//Geating All
router.get ('/', (req,res)=>{
    rest.send ('Hello World')

})
// Geating One 
router.get ('/:id', (req,res)=>{
    
})
// Creating one
router.post('/', (req,res)=>{
    
})
// Updating one
router.patch       ('/:id', (req,res)=>{
    
})
//Deleting one
router.delete ('/:id', (req,res)=>{
    
})


module.exports = router
