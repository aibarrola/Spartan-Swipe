import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types'

//import axios from 'axios';

const Register = ({ setAlert }) => {
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
            /*
            const newUser = {
                name,
                email,
                password
            }
            try
            {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser);
                // axios returns a promise; it sends the name, email, and password to our proxy which sends it to 
                // /api/users (not that we can send it to /api/users because of our proxy), adds it to the database, 
                // and our backend returns a token
                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            }
            catch(error)
            {
                console.error(error.response.data);
            }    
            */
           console.log('Success!');
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={e => onChange(e)} 
                    required />
                </div>
                <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    value={email} 
                    onChange={e => onChange(e)} 
                    required />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} 
                    onChange={e => onChange(e)} 
        
                />
                <small className="form-text">
                    Minimum password length: 8
                </small>
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    minLength="6"
                    value={confirmpassword} 
                    onChange={e => onChange(e)} 
                    
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);
