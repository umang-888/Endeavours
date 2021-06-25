const Router = require('express').Router();
const IncubeteeDetail = require('../models/Incubeetes');
const IncubatorDetail = require('../models/Incubator');
const BlogDetail = require("../models/blogpage");
const IdeaDetail = require("../models/IdeaPage");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "efennvbhsagehkfkgghaeufbakewfrghusragh1u437wt4q940t5y-";

// Incubetee portal

// Registering the incubetee in the portal
Router.route('/register_incubeete')
    .post(async (req, res) => {
        console.log("hello world");
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            groupName: req.body.groupName,
            no_of_team_members: req.body.no_of_team_members,
            name_of_members: req.body.name_of_members,
            authorization_status: false,
            deadline: req.body.deadline,
            email: req.body.email,
            password: hashPassword,
            deadlineStatus: false,
            role: "Non Admin"
        };
        const incubetee = new IncubeteeDetail(data);
        incubetee.save();
        return res.status(200).json(incubetee);
    })

// login the incubetee in the portal
Router.route('/login_incubetee')
    .post(async (req, res) => {
        const { groupName, password } = req.body;
        const incubetee = await IncubeteeDetail.findOne({ groupName }).lean();
        if (!incubetee) {
            return res.json({ status: "error", error: "Invalid Groupname/Password" });
        }
        if (await bcrypt.compare(password, incubetee.password)) {
            const token = jwt.sign({
                id: incubetee._id,
                groupName: incubetee.groupName
            }, JWT_SECRET);
            console.log(incubetee.groupName);
            console.log(token);
            return res.json({ status: 'ok', data: token });
        }
        res.json({ status: "error", data: "Invalid Groupname/Password" });
    })

Router.route('/login_incubetee/:team_name')
    .get((req, res) => {
        IncubeteeDetail.findOne({ groupName: req.params.team_name })
            .then((team) => {
                return res.send(team);
            })
            .catch((err) => {
                res.json({ status: "error", data: "Invalid Groupname" });
            })
    })

// Incubator portal
// Registering the incubator in the portal
Router.route('/register_incubator')
    .post(async (req, res) => {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            incubator_name: req.body.incubator_name,
            email: req.body.email,
            password: hashPassword,
            role: "Admin"
        };
        const incubator = new IncubatorDetail(data);
        incubator.save();
        return res.status(200).json(incubator);
    })

Router.route("/compose").post((req, res) => {
    const blogPost = new BlogDetail({
        blogGroupName: req.body.blogGroupName,
        blogTitle: req.body.blogTitle,
        blogContent: req.body.blogContent,
        blogUsername: req.body.blogUsername,
    });
    blogPost.save();
    return res.status(200).json(blogPost);
});

Router.route("/posts").get((req, res) => {
    BlogDetail.find({}, function (err, posts) {
        res.send(posts);
    });
});

Router.route("/deleteposts").delete((req, res) => {
    BlogDetail.deleteMany({}, (err) => {
        if (!err) {
            res.send("successfully deleted");
        } else {
            res.send(err);
        }
    });
});

Router.route("/posts/:blogGroupName").get((req, res) => {
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


// Giving the empty array
Router.route("/posts/:postId").get((req, res) => {
    BlogDetail.findById(
        {
            _id: req.params.postId,
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


Router.route("/idea").get((req, res) => {
    IdeaDetail.find({}, function (err, ideas) {
        if (!err) {
            res.send(ideas);
        } else {
            res.send(err);
        }
    });
});

Router.route("/idea/compose").post((req, res) => {
    const idea = new IdeaDetail({
        ideaProblemStatement: req.body.ideaProblemStatement,
        ideaProblemDescription: req.body.ideaProblemDescription,
        ideaContent: req.body.ideaContent,
        ideaEnvironment: req.body.ideaEnvironment,
    });
    // console.log(idea);
    idea.save();
    return res.status(200).json(idea);
});

// CASE1 - register - email_id
// Case2 - login - team name - email_id
Router.route("/idea/:email_id").post((req, res) => {
});

Router.route("/Idea/:Id").get((req, res) => {
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

Router.route("/deleteIdeas").delete((req, res) => {
    IdeaDetail.deleteMany({}, (err) => {
        if (!err) {
            res.send("successfully deleted");
        } else {
            res.send(err);
        }
    });
});

exports = module.exports = Router;