import React from 'react';
import './ChatDetails.css';

export default function ChatDetails() {
    return (
        <div className='chatOnline'>
            <div className='chatOnlineBuddy'>
                <div className='chatOnlineProfilePicContainer'>
                    <img className='chatOnlineProfilePic' src='https://as1.ftcdn.net/v2/jpg/01/17/42/38/500_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg' alt=''/>
                    <div className='chatOnlineStatus'></div>
                </div>
                <span className='chatOnlineName'>John Doe</span>
            </div>
        </div>
    )
}
