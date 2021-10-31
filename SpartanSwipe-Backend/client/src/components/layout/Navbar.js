import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
            <Link to='/'><i></i> SpartanSwipe</Link>
        </h1>
        <ul>
            <li><a href='!#'>About</a></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
        </nav>
    )
}

export default Navbar