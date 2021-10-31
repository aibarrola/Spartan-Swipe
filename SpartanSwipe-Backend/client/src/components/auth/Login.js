import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//import axios from 'axios';

const Login = () => {
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

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
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
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
};

export default Login;
