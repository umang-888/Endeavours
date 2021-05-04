const mongoose = require("mongoose");

const { Schema } = mongoose;

const Idea_Schema = new Schema({
    ideaProblemStatement: {
        type: String
    },
    ideaProblemDescription: {
        type: String
    },
    ideaContent: {
        type: String
    },
    ideaEnvironment: {
        type: String
    }
});

module.exports = mongoose.model("IdeaDetail", Idea_Schema);