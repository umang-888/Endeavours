const mongoose = require('mongoose');
const { Schema } = mongoose;

const Incubator_Detail_Schema = new Schema({
    incubator_name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    role: {
        type: String
    }
});

module.exports = mongoose.model('IncubatorDetail', Incubator_Detail_Schema);