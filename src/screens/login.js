import React, { Component } from 'react';
import { connect } from 'react-redux';

import { auth } from '../Store/actions';


class Auth extends Component {
    state ={
            phone_number: "",
            password: ""
           }     
       
    handleSignIn = (e) => {
        console.log(this.state.phone_number, this.state.password);
        const values ={
            phone_number: this.state.phone_number,
            password: this.state.password
        }
        this.props.auth(this.state, values);
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});        
    }

    handlePhoneNumber = (e) => {
        this.setState({phone_number: e.target.value})        
    }

    render () {
        return (
    <div>
        <h1> Login Page</h1>
            <form>
                    <input 
                        type="text"
                        name="phone_number"
                        placeholder= "Mobile No."
                        onChange={(e) => this.handlePhoneNumber(e)}
                        />
                     <input 
                        type="password" 
                        name = "password"
                        placeholder= "Password"
                        onChange={(e) => this.handlePassword(e)}             
                        />
                    <button 
                        type="button" 
                        onClick={(e) => this.handleSignIn(e)} >Sign In
                    </button>
                    
            </form>
    </div>
                );
       
             }
}


const mapDispatchToProps = dispatch => {
    return {
        auth: (values) => dispatch(auth(values))
    };
};

export default connect (null, mapDispatchToProps) (Auth);
