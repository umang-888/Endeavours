import { ChatEngine } from 'react-chat-engine';

import './Chat.css';
import ChatFeed from './ChatFeed';
import LoginForm from '../Login/Incubetee_signin';

const projectID = 'df5005e2-f3ab-4398-ac75-b090411fa2c9';

const Chat = () => {

    // let register_incubetee_name = localStorage.getItem('groupName');
    // let register_incubetee_password = localStorage.getItem('password');
    // let login_incubetee_name = localStorage.getItem('clientname');
    // let login_incubetee_password = localStorage.getItem('clientpassword');

    // console.log(register_incubetee_name, register_incubetee_password, login_incubetee_name, login_incubetee_password);


    // if (!localStorage.getItem('username')) return <LoginForm />;

    // userName = { localStorage.getItem('username') }
    // userSecret = { localStorage.getItem('password') }

    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID={projectID}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default Chat;