const mongoose = require('mongoose')
const detailSchema = require('./schema')

const MODEL_NAME = 'roomDetailProfiles'
const COLLECTION_NAME = 'detail-profiles'
const model = mongoose.model(
    MODEL_NAME,
    detailSchema,
    COLLECTION_NAME
)

module.exports = model