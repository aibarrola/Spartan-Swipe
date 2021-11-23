import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './Login.css'

const Login = ({ login, isAuthenticated }) => {
    // formData will be the state in the useState hook, setFormData is equivalent to something like this.setFormData etc.
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    // pull email and password without having to set formData.name etc.
    const { email, password } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in
    if(isAuthenticated)
    {
        return <Redirect to='/dashboard' />
    }

    return (
            <div className="login">
                <div className="loginBox">       
                        <h1 className="loginTitle"> Welcome back!</h1>
                        <p className="loginDesc"> Login to your account</p>
                       
                        <form className="loginForm" onSubmit={e => onSubmit(e)}>

                            <div className="loginInputContainer">
                                <p className="inputLabel"> Name </p>
                                <input 
                                    className="loginInput"
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email" 
                                    value={email} 
                                    onChange={e => onChange(e)} 
                                    required />

                                <p className="inputLabel"> Password </p>
                                <input
                                    className="loginInput"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    minLength="6"
                                    value={password} 
                                    onChange={e => onChange(e)} 
                                />
        
                                <input type="submit" className="loginButton" value="Login" />
                            </div>
                        </form>

                        <p className="loginDesc">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                </div>
            </div>
    )
};

Login.propTypes = { 
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({ 
    isAuthenticated: state.auth.isAuthenticated
 });

export default connect(mapStateToProps, { login })(Login);
