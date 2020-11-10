const mongoose = require('mongoose')
const roomSchema = require('./schema')

const MODEL_NAME = 'roomProfiles'
const COLLECTION_NAME = 'user-profiles'
const model = mongoose.model(
    MODEL_NAME,
    roomSchema,
    COLLECTION_NAME
)

module.exports = model