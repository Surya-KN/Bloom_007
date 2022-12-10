const mongoose= require('mongoose')

const {Schema} = require('mongoose')

const eventSchema = new Schema({
    name: String,
    participants:[{
        name:String,
        email:String,
        age:Number,
        transactionID:String
    }]
})

module.exports = mongoose.model('Event',eventSchema)