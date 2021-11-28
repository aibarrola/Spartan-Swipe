import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        department, 
        degrees 
} }) => {

    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img class='card-image' src={avatar} alt=''/>
            </div>
            <div className='card-info'>
                <div className='card-info-items'>
                    <p className='card-name'>{name}</p>
                    <p className='card-department'>{department}</p>
                    <ul className='card-degrees'>
                        {degrees.slice(0, 5).map((degree, index) => (
                            <li key={index} className=''>
                                <i className='fas fa-check' aria-hidden='true'/> {degree}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Card;
