import React from 'react';
import './Chat.css';


export default function Chat({own, msg}) {
    return (
        <div className={own ? 'chat own' : 'chat'}>
            <div className='chatTop'>
                <img className='chatProfilePic' src='https://as1.ftcdn.net/v2/jpg/01/17/42/38/500_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg' alt=''/>
                <p className='chatMessage'> {msg} </p>
            </div>
            <div className='chatBottom'>1 hour ago</div>
        </div>
    )
}