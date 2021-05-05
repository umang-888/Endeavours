import React from "react";

import "../Login/Incubetee.css";

class About extends React.Component {
  render() {
    return (
      <div className="fake-body">
        <div className="container-client" id="container-client">
          <div className="form-container-client sign-up-container-client"></div>
          <div className="form-container-client sign-in-container-client">
            <h1 className="client-h2" style={{ color: "black" }}>
              About Us
            </h1>
            <p
              style={{
                color: "#706C61",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontSize: "25px",
                marginTop: "70px",
                letterSpacing: "1px",
              }}
            >
              Virtual Incubation is the platform for startups and college
              student to come and present their ideas to the incubator and form
              their ideas into reality
            </p>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="client-h1">Made By</h1>
                <br />
                <h2> Mehul </h2>
                <br />
                <h2> Himanshu </h2>
                <br />
                <h2> Lakshy </h2>
                <br />
                <button className="ghost btn-client" id="signUp">
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
