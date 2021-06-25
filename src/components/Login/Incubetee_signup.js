import React from 'react';
import axios from 'axios';

import './Incubetee.css';

class RegisterForm extends React.Component {

    state = {
        groupName: '',
        no_of_members: 0,
        member1: '',
        member2: '',
        member3: '',
        member4: '',
        deadline: '',
        email: '',
        password: ''
    };

    project_id = 'df5005e2-f3ab-4398-ac75-b090411fa2c9';
    private_key = 'fae722fb-0093-47b4-8627-7fd16719780f';

    onSubmit = (e) => {
        e.preventDefault();
        let data = {
            groupName: this.state.groupName,
            no_of_team_members: this.state.no_of_members,
            name_of_members: [this.state.member1, this.state.member2, this.state.member3, this.state.member4],
            authorization_status: false,
            deadline: this.state.deadline,
            email: this.state.email,
            password: this.state.password,
            deadlineStatus: false,
            role: "Non Admin"
        };
        axios.post(`http://localhost:8080/api/register_incubeete`, data)
            .then((incubetee) => {
                alert("Successfully Registered");
                console.log(data);
                localStorage.setItem("groupName", incubetee.data.groupName);
                localStorage.setItem("no_of_team_members", incubetee.data.no_of_team_members);
                localStorage.setItem("clientdeadline", incubetee.data.deadline);
                localStorage.setItem("clientemail", incubetee.data.email);
                localStorage.setItem("clientpassword", this.state.password);
                axios({
                    method: 'POST',
                    url: 'https://api.chatengine.io/chats/',
                    headers: {
                        'Project-ID': this.project_id,
                        'User-Name': 'Lakshy',
                        'User-Secret': 'Welcome@123'
                    },
                    data: {
                        "title": this.state.groupName,
                        "admin_username": 'Lakshy'
                    }
                });
                if (this.state.member1 !== '') {
                    console.log(this.state.member1);
                    axios({
                        method: 'POST',
                        url: 'https://api.chatengine.io/users/',
                        headers: {
                            'PRIVATE-KEY': this.private_key
                        },
                        data: {
                            "username": this.state.member1,
                            "secret": this.state.password
                        }
                    });
                }
                if (this.state.member2 !== '') {
                    console.log(this.state.member2);
                    axios({
                        method: 'POST',
                        url: 'https://api.chatengine.io/users/',
                        headers: {
                            'PRIVATE-KEY': this.private_key
                        },
                        data: {
                            "username": this.state.member2,
                            "secret": this.state.password
                        }
                    });
                }
                if (this.state.member3 !== '') {
                    console.log(this.state.member3);
                    axios({
                        method: 'POST',
                        url: 'https://api.chatengine.io/users/',
                        headers: {
                            'PRIVATE-KEY': this.private_key
                        },
                        data: {
                            "username": this.state.member3,
                            "secret": this.state.password
                        }
                    });
                }
                if (this.state.member4 !== '') {
                    console.log(this.state.member4);
                    axios({
                        method: 'POST',
                        url: 'https://api.chatengine.io/users/',
                        headers: {
                            'PRIVATE-KEY': this.private_key
                        },
                        data: {
                            "username": this.state.member4,
                            "secret": this.state.password
                        }
                    });
                }

            })
            .catch((err) => {
                console.log("Error while registering the customer");
            })
    };


    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label> Group Name </label>
                    <input type="text" value={this.state.groupName} onChange={(e) => this.setState({ groupName: e.target.value })} />
                </div>
                <div className="field">
                    <label> Number of Members </label>
                    <input type="Number" value={this.state.no_of_members} onChange={(e) => this.setState({ no_of_members: e.target.value })} />
                </div>
                <div className="field">
                    <label> Member1 </label>
                    <input type="text" value={this.state.member1} onChange={(e) => this.setState({ member1: e.target.value })} />
                    <label> Member2 </label>
                    <input type="text" value={this.state.member2} onChange={(e) => this.setState({ member2: e.target.value })} />
                    <label> Member3 </label>
                    <input type="text" value={this.state.member3} onChange={(e) => this.setState({ member3: e.target.value })} />
                    <label> Member4 </label>
                    <input type="text" value={this.state.member4} onChange={(e) => this.setState({ member4: e.target.value })} />
                </div>
                <div className="field">
                    <label> Deadline </label>
                    <input type="text" value={this.state.deadline} onChange={(e) => this.setState({ deadline: e.target.value })} />
                </div>
                <div className="field">
                    <label> Email </label>
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="field">
                    <label> Password </label>
                    <input type="text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <button className="ui button" onSubmit={this.onSubmit}>
                    Submit
                </button>
            </form>
        )
    }
}

export default RegisterForm;