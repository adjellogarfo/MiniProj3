const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

/*
const sponsorSchema = new Schema({
    name: String,
    type: String,
    active: {
        type: Boolean,
        default: true
    }
});
*/

const sponsorSchema = new Schema({
    name: String,
    type: String,
    email: String,
    address: String,
    creation_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);