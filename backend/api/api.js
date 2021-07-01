// Incubetee portal
const Router = require("express").Router();
const IncubeteeDetail = require("../models/Incubeetes");
const IncubatorDetail = require("../models/Incubator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const JWT_SECRET = "efennvbhsagehkfkgghaeufbakewfrghusragh1u437wt4q940t5y-";

// Registering the incubetee in the portal
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himanshu.sharma11199@gmail.com",
    pass: "18bec1119",
  },
});

Router.route("/register_incubeete").post(async (req, res) => {
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
    role: "Non Admin",
  };

  const mailOptions = {
    from: "himanshu.sharma11199@gmail.com",
    to: req.body.email,
    subject: "You are registered",
    html: `<header style="border-bottom: 2px solid rgb(36, 36, 36);">
              <h1 style="oblique;">The Endeavours</h1>
              
          </header>
          <div>
              <div style="font-size:17px;">
                  <p>Hello teams Endeavour,<br> here we like to inform you successfully registered in the portal and please compose the idea in the daily update section in the dashboard and incubator will respond in a short time</p>
                  <p>For further query:) </p>
                  
                  <p style="color: rgb(43, 43, 226);">9784618853</p>
                  <p style="color: rgb(43, 43, 226);">himanshu.sharma11199@gmail.com</p>
                  
                  <p>Thanks for registering</p>
              </div>
          </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  const incubetee = new IncubeteeDetail(data);
  incubetee.save();
  return res.status(200).json(incubetee);
});

// login the incubetee in the portal
Router.route("/login_incubetee").post(async (req, res) => {
  const { groupName, password } = req.body;
  const incubetee = await IncubeteeDetail.findOne({ groupName }).lean();
  if (!incubetee) {
    return res.json({ status: "error", error: "Invalid Groupname/Password" });
  }
  if (await bcrypt.compare(password, incubetee.password)) {
    mailId = incubetee.email;
    const token = jwt.sign(
      {
        id: incubetee._id,
        groupName: incubetee.groupName,
      },
      JWT_SECRET
    );
    console.log(incubetee.groupName);

    console.log(token);

    return res.json({ status: "ok", data: token });
  }
  res.json({ status: "error", data: "Invalid Groupname/Password" });
});

Router.route("/login_incubetee/:team_name").get((req, res) => {
  IncubeteeDetail.findOne({ groupName: req.params.team_name })
    .then((team) => {
      mailId = team.email;
      return res.send(team);
    })
    .catch((err) => {
      res.json({ status: "error", data: "Invalid Groupname" });
    });
});

// Incubator portal
// Registering the incubator in the portal
Router.route("/register_incubator").post(async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const data = {
    incubator_name: req.body.incubator_name,
    email: req.body.email,
    password: hashPassword,
    role: "Admin",
  };
  const incubator = new IncubatorDetail(data);
  incubator.save();
  return res.status(200).json(incubator);
});

exports = module.exports = Router;
