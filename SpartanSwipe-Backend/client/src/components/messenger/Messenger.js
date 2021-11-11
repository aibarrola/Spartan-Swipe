import React from 'react';
import './Messenger.css';
import Chatlist from '../chatlist/Chatlist';
import Chat from '../chat/Chat';
import ChatDetails from '../chatdetails/ChatDetails';

export default function Messenger()
{
    return (
        <div className='messenger'>
            <div className='chatlist'>
                <div className='chatlistWrapper'>
                    <input placeholder='Search for StudyBuddy' className='chatlistInput' />
                    <Chatlist/>
                    <Chatlist/>
                    <Chatlist/>
                </div>
            </div>
            <div className='chatbox'>
                <div className='chatboxWrapper'>
                    <div className='chatboxTop'>
                        <Chat />
                        <Chat own={true}/>
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />

                    </div>
                    <div className='chatboxBottom'>
                        <textarea className='chatboxInput' placeholder='Type a message...'></textarea>
                        <button className='chatboxSubmitButton'>Send</button>
                    </div>
                </div>
            </div>
            <div className='chatDetails'>
                <div className='chatDetailsWrapper'>
                    <ChatDetails/>
                </div>
            </div>
        </div>
    );
}