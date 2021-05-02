const Router = require('express').Router();
const IncubeteeDetail = require('../models/Incubeetes');
const IncubatorDetail = require('../models/Incubator');
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


exports = module.exports = Router;