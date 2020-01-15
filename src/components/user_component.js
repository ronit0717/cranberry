import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserTemplate extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>USER DETAILS</h3>
            </div>
        );
    }
}

UserTemplate.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    hobbies : PropTypes.array,
    Indian : PropTypes.bool,
    message : PropTypes.func,
    attribute : PropTypes.object,
    company: PropTypes.oneOf(['Oracle', 'Ubsilon', 'Quikr']),
    dummyAttr : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([123,321])
    ]),
    hobbies2 : PropTypes.arrayOf(PropTypes.string),
    rollNumber : PropTypes.number.isRequired,
    motherTounge : function(props, propName, componentName) {
        if(props[propName] !== 'Bangla'){
            return new Error(`Mother toungue ${props[propName]} is incorrect for Ronit`);
        }
    }
}


export default UserTemplate;