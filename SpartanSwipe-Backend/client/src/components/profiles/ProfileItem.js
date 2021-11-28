import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Profiles.css'

const ProfileItem = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        department, 
        degrees 
} }) => {
    
    // Need to implement a way to direct message users
    return (
        <div className='profile bg-light'>
            <img src={avatar} alt='' className='round-img'/>
            <div>
                <h2>{name}</h2>
                <p>{department}</p>
                <Link to={`/profile/${_id}`} className='viewProfileBtn'>View Profile</Link>
            </div>
            <ul>
                {degrees.slice(0, 5).map((degree, index) => (
                    <li key={index} className='text-primary'>
                        <i className='fas fa-check' /> {degree}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
