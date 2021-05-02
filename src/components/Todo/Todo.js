import React from 'react';

import Lock from '../../images/lock.png';

class Todo extends React.Component {
    render() {
        return (
            <img src={Lock} style={{ height: '500px', alignItems: 'center', textAlign: 'center', justifyContent: 'center', 'marginLeft': '490px', marginTop: '120px' }} />
        )
    }
}

export default Todo;