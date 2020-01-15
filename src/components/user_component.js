import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    console.log(props);
    return (
        <div>
            PROP TYPES TEST
        </div>
    );
};

UserTemplate.PropTypes = {
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
    rollNumber : PropTypes.number.isRequired
}

export default UserTemplate;