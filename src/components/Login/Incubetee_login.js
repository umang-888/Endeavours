import React from "react";
import axios from "axios";
import CryptoJs from "crypto-js";

const projectID = "df5005e2-f3ab-4398-ac75-b090411fa2c9";

const secretKey = "_zefdsuh123";
let groupName = CryptoJs.AES.encrypt(
  localStorage.getItem("groupName"),
  secretKey
).toString();
let teamname = CryptoJs.AES.encrypt(
  localStorage.getItem("teamname"),
  secretKey
).toString();

class Incubetee_Login extends React.Component {
  state = {
    path: "http://localhost:3000/incubetee",
    path1: "http://localhost:3000/incubetee",
  };

  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container-client");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  state = {
    groupName: "",
    no_of_members: 0,
    member1: "",
    member2: "",
    member3: "",
    member4: "",
    deadline: "",
    email: "",
    clientpassword: "",
    username: "",
    password: "",
    teamname: "",
    role: ""
  };

  project_id = "df5005e2-f3ab-4398-ac75-b090411fa2c9";
  private_key = "fae722fb-0093-47b4-8627-7fd16719780f";

  onSubmit1 = (e) => {
    e.preventDefault();
    let data = {
      groupName: this.state.groupName,
      no_of_team_members: this.state.no_of_members,
      name_of_members: [
        this.state.member1,
        this.state.member2,
        this.state.member3,
        this.state.member4,
      ],
      authorization_status: false,
      deadline: this.state.deadline,
      email: this.state.email,
      password: this.state.password,
      deadlineStatus: false,
      role: "Non Admin",
    };
    axios
      .post(`http://localhost:8080/api/register_incubeete`, data)
      .then((incubetee) => {
        alert("Successfully Registered");
        console.log(data);
        localStorage.clear();
        localStorage.setItem("groupName", incubetee.data.groupName);
        localStorage.setItem(
          "no_of_team_members",
          incubetee.data.no_of_team_members
        );
        localStorage.setItem("member1", incubetee.data.name_of_members[0]);
        localStorage.setItem("member2", incubetee.data.name_of_members[1]);
        localStorage.setItem("member3", incubetee.data.name_of_members[2]);
        localStorage.setItem("member4", incubetee.data.name_of_members[3]);
        localStorage.setItem("clientdeadline", incubetee.data.deadline);
        localStorage.setItem("clientemail", incubetee.data.email);
        localStorage.setItem("clientpassword", this.state.password);
        localStorage.setItem("role", incubetee.data.role);
        localStorage.setItem("type", "signup");
        sessionStorage.setItem("clientemail", incubetee.data.email);
        axios({
          method: "POST",
          url: "https://api.chatengine.io/chats/",
          headers: {
            "Project-ID": this.project_id,
            "User-Name": "Lakshy",
            "User-Secret": "Welcome@123",
          },
          data: {
            title: this.state.groupName,
            admin_username: "Lakshy",
          },
        });
        if (this.state.member1 !== "") {
          console.log(this.state.member1);
          axios({
            method: "POST",
            url: "https://api.chatengine.io/users/",
            headers: {
              "PRIVATE-KEY": this.private_key,
            },
            data: {
              username: this.state.member1,
              secret: this.state.clientpassword,
            },
          });
        }
        if (this.state.member2 !== "") {
          console.log(this.state.member2);
          axios({
            method: "POST",
            url: "https://api.chatengine.io/users/",
            headers: {
              "PRIVATE-KEY": this.private_key,
            },
            data: {
              username: this.state.member2,
              secret: this.state.clientpassword,
            },
          });
        }
        if (this.state.member3 !== "") {
          console.log(this.state.member3);
          axios({
            method: "POST",
            url: "https://api.chatengine.io/users/",
            headers: {
              "PRIVATE-KEY": this.private_key,
            },
            data: {
              username: this.state.member3,
              secret: this.state.clientpassword,
            },
          });
        }
        if (this.state.member4 !== "") {
          console.log(this.state.member4);
          axios({
            method: "POST",
            url: "https://api.chatengine.io/users/",
            headers: {
              "PRIVATE-KEY": this.private_key,
            },
            data: {
              username: this.state.member4,
              secret: this.state.clientpassword,
            },
          });
        }
        alert("Successfully passed");
        //this.setState({ path1: `http://localhost:3000/dashboard/${groupName}` });
        this.setState({ path1: "http://localhost:3000/dashboard" });
      })
      .catch((err) => {
        alert("error while registering");
        console.log("Error while registering the customer");
      });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
    const authObject = {
      "Project-ID": projectID,
      "User-Name": this.state.username,
      "User-Secret": this.state.password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.clear();

      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      localStorage.setItem("teamname", this.state.teamname);
      localStorage.setItem("type", "login");

      // window.location.reload();
      alert("Successfully passed");
      //this.setState({ path: `http://localhost:3000/dashboard/${teamname}` });
      this.setState({ path: "http://localhost:3000/dashboard" });
      localStorage.setItem("approved",true);
    } catch (err) {
      alert("Oops, incorrect credentials.");
    }
  };

  render() {
    return (
      <div className="fake-body">
        <div className="container-client" id="container-client">
          <div className="form-container-client sign-up-container-client">
            <form className="client-form" onSubmit={this.onSubmit1}>
              <h1 className="client-h1">Create Account</h1>
              <div class="social-container">
                <a href="#" className="social anker-client">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social anker-client">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social anker-client">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="client-span">
                or use your email for registration
              </span>
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.groupName}
                onChange={(e) => this.setState({ groupName: e.target.value })}
                placeholder="Group Name"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.no_of_members}
                onChange={(e) =>
                  this.setState({ no_of_members: e.target.value })
                }
                placeholder="Number of team members"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.member1}
                onChange={(e) => this.setState({ member1: e.target.value })}
                placeholder="Member 1 name"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.member2}
                onChange={(e) => this.setState({ member2: e.target.value })}
                placeholder="Member 2 name"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.member3}
                onChange={(e) => this.setState({ member3: e.target.value })}
                placeholder="Member 3 name"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.member4}
                onChange={(e) => this.setState({ member4: e.target.value })}
                placeholder="Member 4 name"
                className="signup-input"
              />
              <input
                type="email"
                style={{ color: "black" }}
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Team Leader Email"
                className="signup-input"
              />
              <input
                type="password"
                style={{ color: "black" }}
                value={this.state.clientpassword}
                onChange={(e) =>
                  this.setState({ clientpassword: e.target.value })
                }
                placeholder="Password"
                className="signup-input"
              />
              <button className="btn-client" onSubmit={this.onSubmit1}>
                <a href={this.state.path1}>Sign Up</a>
              </button>
            </form>
          </div>
          <div className="form-container-client sign-in-container-client">
            <form className="client-form" onSubmit={this.onSubmit}>
              <h1 className="client-h1" style={{ color: "black" }}>
                Sign in
              </h1>
              <div className="social-container">
                <a href="#" className="social anker-client">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social anker-client">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social anker-client">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="client-span">or use your account</span>
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                placeholder="Username"
                className="signup-input"
              />
              <input
                type="text"
                style={{ color: "black" }}
                value={this.state.teamname}
                onChange={(e) => this.setState({ teamname: e.target.value })}
                placeholder="Groupname"
                className="signup-input"
              />
              <input
                type="password"
                style={{ color: "black" }}
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Password"
                className="signup-input"
              />
              <a className="anker-client" href="#">
                Forgot your password?
              </a>
              <button className="btn-client" onSubmit={this.onSubmit}>
                <a href={this.state.path}>Sign In</a>
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="client-h1">Welcome Back!</h1>
                <p className="client-para">
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost btn-client" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="client-h1">Hello, Friends!</h1>
                <p className="client-para">
                  Enter your personal details and start journey with us
                </p>
                <button className="ghost btn-client" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Incubetee_Login;
