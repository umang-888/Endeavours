const mongoose = require('mongoose');
const { Schema } = mongoose;

const Incubetee_Detail_Schema = new Schema({
    groupName: {
        type: String
    },
    no_of_team_members: {
        type: String
    },
    name_of_members: {
        type: Array
    },
    authorization_status: {
        type: Boolean
    },
    deadline: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    deadlineStatus: {
        type: Boolean
    },
    role: {
        type: String
    }
});

module.exports = mongoose.model('IncubeteeDetail', Incubetee_Detail_Schema);