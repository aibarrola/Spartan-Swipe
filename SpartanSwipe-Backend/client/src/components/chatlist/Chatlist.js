import React from 'react';
import './Chatlist.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Chatlist = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        department, 
        degrees 
} }) => {

    return (
        <Link to={`/messenger/${_id}`} className=''>
            <div className='chatList'>
                <img className='chatListProfilePic' src={avatar} alt=''/>
                <div>
                    <p className='chatListName'>{name}</p> 
                    <p className='chatListMessagePreview'>Message</p>
                </div>
            </div>
        </Link>
    )
}



Chatlist.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Chatlist;


