import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

// authLinks uses a font from fontawesome for the logout
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li><Link to='/swipe'>Swipe</Link></li>
            <li><Link to='/profiles'>Your StudyBuddies</Link></li>
            <li><Link to={'/messenger'}>Messenger</Link></li>
            <li><Link to='/dashboard'>
                <i className='fas fa-user'></i>{' '}
                <span className='hide-sm'>Dashboard</span>
            </Link></li>
            <li><a onClick={logout} href='#!'>  
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span></a></li>
        </ul>
    );
    
    const guestLinks = (
        <ul>
            <li><a href='#!'>About</a></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    );
    // { !loading && } basically means if not loading, then do this
    // { isAuthenticated ? authLinks : guestLinks } means if user is Authenticated show authLinks else show guestLinks
    return (
        <nav className="navbar bg-dark">
        <h1>
            <Link to='/'><i></i> SpartanSwipe</Link>
        </h1>
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);