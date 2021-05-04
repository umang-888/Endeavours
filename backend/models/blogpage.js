const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogPage_Schema = new Schema({
  blogGroupName: {
    type: String
  },
  blogTitle: {
    type: String
  },
  blogContent: {
    type: String
  },
  blogUsername: {
    type: String
  }
});

module.exports = mongoose.model("BlogDetail", BlogPage_Schema);
