require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const path = require("path");
const app = express();
const cors = require("cors");
const Incubeetes = require("./models/Incubeetes");
const Router = require("express").Router();
const IncubeteeDetail = require("./models/Incubeetes");
const IncubatorDetail = require("./models/Incubator");
const apiRoute = require("./api/api");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himanshu.sharma11199@gmail.com",
    pass: "18bec1119",
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

// IDEAS
const Idea_Schema = new mongoose.Schema({
  teamName: String,
  ideaProblemStatement: String,
  ideaProblemDescription: String,
  ideaContent: String,
  ideaEnvironment: String,
});
const IdeaDetail = mongoose.model("IdeaDetail", Idea_Schema);

app.route("/idea").get((req, res) => {
  IdeaDetail.find({}, function (err, ideas) {
    if (!err) {
      res.send(ideas);
    } else {
      res.send(err);
    }
  });
});

app.route("/idea/compose").post((req, res) => {
  const idea = new IdeaDetail({
    teamName: req.body.teamName,
    ideaProblemStatement: req.body.ideaProblemStatement,
    ideaProblemDescription: req.body.ideaProblemDescription,
    ideaContent: req.body.ideaContent,
    ideaEnvironment: req.body.ideaEnvironment,
  });

  const mailSubject = `New idea has been posted by Team ${req.body.teamName}`;
  const mailtext = `${req.body.ideaProblemDescription} approve it from here: http://localhost:3000/approve`;
  const mailOptions = {
    from: "himanshu.sharma11199@gmail.com",
    to: "himanshu.sharma11199@gmail.com",
    subject: mailSubject,
    text: mailtext,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  idea.save();
});
app.route("/Idea/:Id").get((req, res) => {
  const Id = req.params.Id;
  IdeaDetail.find(
    {
      _id: Id,
    },
    function (err, foundList) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundList);
      }
    }
  );
});

app.route("/deleteIdeas").delete((req, res) => {
  IdeaDetail.deleteMany({}, (err) => {
    if (!err) {
      res.send("successfully deleted");
    } else {
      res.send(err);
    }
  });
});

const BlogPage_Schema = new mongoose.Schema({
  blogGroupName: String,
  blogTitle: String,
  blogContent: String,
  blogUsername: String,
});
const BlogDetail = mongoose.model("BlogDetail", BlogPage_Schema);

app.route("/compose").post((req, res) => {
  const blogPost = new BlogDetail({
    blogGroupName: req.body.blogGroupName,
    blogTitle: req.body.blogTitle,
    blogContent: req.body.blogContent,
    blogUsername: req.body.blogUsername,
  });
  blogPost.save();
  return res.status(200).json(blogPost);
});
app.route("/posts").get((req, res) => {
  BlogDetail.find({}, function (err, posts) {
    res.send(posts);
  });
});
app.route("/deleteposts").delete((req, res) => {
  BlogDetail.deleteMany({}, (err) => {
    if (!err) {
      res.send("successfully deleted");
    } else {
      res.send(err);
    }
  });
});
app.route("/posts/:blogGroupName").get((req, res) => {
  const givenBlogGroupName = req.params.blogGroupName;
  BlogDetail.find(
    {
      blogGroupName: givenBlogGroupName,
    },
    function (err, foundList) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundList);
      }
    }
  );
});

app.route("/posts/:postId").get((req, res) => {
  const requestedId = req.params.postId;
  BlogDetail.findOne(
    {
      _id: requestedId,
    },
    function (err, blogPost) {
      if (err) {
        console.log(err);
      } else {
        console.log(blogPost);
      }
    }
  );
});
app.use("/api", apiRoute);
app.listen(8080, () => console.log("Server started at http://localhost:8080"));
