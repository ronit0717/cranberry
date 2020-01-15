import React, { Component } from 'react';
import UserTemplate from './user_component';

class User extends Component {

    state = {
        firstName : 100,
        lastName : 'Chattopadhyay',
        age : '26',
        hobbies : ['singing', 'dancing'],
        Indian : true,
        message() {console.log('test message')},
        attribute : {
            'weight' : '76 Kg',
            'height' : '183 cm'
        },
        company : 'Quikr',
        dummyAttr : 500,
        hobbies2 : ['singing', 'dancing'],
        rollNumber : 123
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state} />
            </div>
        );
    }
}

export default User;