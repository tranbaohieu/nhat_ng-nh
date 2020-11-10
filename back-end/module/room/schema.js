const mongoose = require('mongoose')
const model = require('../auth/model')

const schema = new mongoose.Schema({
    // roomTypes:{
    //     type:String,
    //     required:true
    // },

    // roomSize:{
    //     type:String,
    //     required:true
    // },

    // roomStyle:{
    //     type:String,
    //     required:true
    // },

    // roomColor:{
    //     type: String,
    //     required:true
    // }
    roomImg:{
        type:String,
        required:true
    },
    roomDescription:{
        type:String,
        required:true
    },
    roomRating:{
        type:Number,
        required:true,
        default:0
    },
    roomArea:{
        type:String,
        required:true
    }

})

module.exports = schema