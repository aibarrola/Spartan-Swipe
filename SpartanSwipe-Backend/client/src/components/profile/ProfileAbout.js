import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ 
    profile: {
        bio,
        degrees,
        user: { name }
    } 
}) => 

<div class="profile-about bg-light p-2">
{bio && (
    <Fragment>
        <h2 class="text-primary">Hi, I'm {name.trim().split(' ')[0]} and here's something about me!</h2>
        <p>
            {bio}
        </p>
    <div class="line"></div>
    </Fragment>
)}

    <h2 class="text-primary">Degrees I'm working towards</h2>
    <div class="degrees">
        {degrees.map((degree, index) => (
            <div key={index} className='p-1'>
                <i className='fas fa-check' /> {degree}
            </div>
        ))}
    </div>
</div>

    


ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileAbout;
