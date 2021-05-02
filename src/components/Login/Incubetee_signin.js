import React from 'react';
import axios from 'axios';

const projectID = 'df5005e2-f3ab-4398-ac75-b090411fa2c9';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    };

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.username, this.state.password);
        const authObject = { 'Project-ID': projectID, 'User-Name': this.state.username, 'User-Secret': this.state.password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);

            window.location.reload();
            alert("Successfully passed");
        } catch (err) {
            alert('Oops, incorrect credentials.');
        };
    };

    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label> User Name </label>
                    <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                </div>
                <div className="field">
                    <label> Password </label>
                    <input type="text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <button className="ui button" onSubmit={this.onSubmit}>
                    Submit
                </button>
            </form>
        );
    };
};

export default LoginForm;