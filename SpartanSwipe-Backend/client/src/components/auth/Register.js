import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './Register.css'

//import axios from 'axios';

const Register = ({ setAlert, register, isAuthenticated }) => {
    // formData will be the state in the useState hook, setFormData is equivalent to something like this.setFormData etc.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    
    // pull name, email, password, and confirmpassword without having to set formData.name etc.
    const { name, email, password, confirmpassword } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== confirmpassword)
        {
            setAlert('Passwords do not match!', 'danger');
        }
        else
        {
            register({ name, email, password });
        }
    }

    if(isAuthenticated)
    {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="register">
        <div className="registerBox">
            <h1 className="registerTitle"> Let's get started! </h1>
            <h2 className="registerDesc"> Register with your school email </h2>

            <form className="registerForm" onSubmit={e=>onSubmit(e)}>

                <div className="registerInputContainer">
                    <p className="inputLabel">Name</p> 
                    <input type="text" name="name" className="signUpInput" placeholder="Bob" required value={name} onChange={e=>onChange(e)} />


                    <p className="inputLabel">Email</p> 
                    <input type="email" name="email" className="signUpInput" placeholder="bob.ross@sjsu.edu" required value={email} onChange={e=>onChange(e)} />

                    <p className="inputLabel"> Password </p>
                    <input type="password" name="password" className="signUpInput" placeholder="Enter Password" required value={password} onChange={e=>onChange(e)}  />

                    <p className="inputLabel"> Confirm Password </p>
                    <input type="password" name="confirmpassword" className="signUpInput" placeholder="Renter Password" required value={confirmpassword} onChange={e=>onChange(e)}  />

                    <input type="submit" className="registerButton" value="Register"  />
                </div>

            </form>

            <p className="loginDesc">
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </div>
    </div>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({ 
    isAuthenticated: state.auth.isAuthenticated
 });

export default connect(mapStateToProps, { setAlert, register })(Register);
