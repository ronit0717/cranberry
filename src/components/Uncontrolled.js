import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {
        firstName : '',
        lastName : ''
    }

    updateFirstNameChange = (event) => {
        this.setState({
            firstName:event.target.value
        })
    }

    updateLastNameChange = (event) => {
        this.setState({
            lastName:event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Enter First Name</label><br/>
                        <input type='text' value={this.state.firstName} onChange={this.updateFirstNameChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Enter Last Name</label><br/> 
                        <input type='text' value={this.state.lastName} onChange={this.updateLastNameChange}/>
                    </div>
                </form>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
    }
}

export default Uncontrolled;