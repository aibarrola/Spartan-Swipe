import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChatlistItems = ({ 
    profile: { 
        user: { _id, name, avatar }, 
} }) => {
    
    // Need to implement a way to direct message users
    return (
        <div className='profile bg-light'>
            <img className='chatListProfilePic' src={avatar} alt=''/>
            <span className='chatListName'>{name}</span>
        </div>
    )
}

ChatlistItems.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ChatlistItems;
