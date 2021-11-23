import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css'

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated)
    {
        return <Redirect to='/dashboard'/>;
    }
    return (
        <section className="landing">
            <div className="landingSect1">
                <div className="sect1Left">
                    <h1 className="heroTitle"> Find your <br /> Study Buddy. </h1>
               
                    <Link to='/register' 
                        className="createAccountBtn"> Create Account 
                    </Link>
                </div>

            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
