import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        department, 
        degrees 
} }) => {

    return (
        <div style={{ backgroundImage: `url(${avatar})`}} className='card'>
            <h3>
                {name}
                <h1>{department}</h1>
                <ul>
                    {degrees.slice(0, 5).map((degree, index) => (
                        <li key={index} className='text-primary'>
                            <i className='fas fa-check' /> {degree}
                        </li>
                    ))}
                </ul>
            </h3>
        </div>
    )
}

Card.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Card;
