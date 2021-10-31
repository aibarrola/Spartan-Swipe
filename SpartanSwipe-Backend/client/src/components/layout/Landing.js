import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
            <h1 className="x-large">SpartanSwipe</h1>
            <p className="lead">
                Find your study buddy and find success!
            </p>
            <div className="buttons">
                <Link to='/register' className="btn btn-primary">Register</Link>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Landing
