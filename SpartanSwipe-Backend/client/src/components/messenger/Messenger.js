
import './Messenger.css';
import OwnChatlist from '../chatlist/OwnChatlist';
import Chatlist from '../chatlist/Chatlist';
import Chat from '../chat/Chat';
import ChatDetails from '../chatdetails/ChatDetails';
import ChatboxName from './ChatboxName';

import React, { Fragment, useEffect, Route, Search } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from '../profiles/ProfileItem';
import { getProfiles } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);

    return (
        <div className='messenger'>
            <div className='chatlist'>
                <div className='chatlistWrapper'>
                    <OwnChatlist />
                    {/* <input placeholder='Search for StudyBuddy' className='chatlistInput' /> */}
                    <p className='yourStudyBuddies'>Your Study Buddies</p>
                    <div className="profiles">
                        {profiles.length > 0 ? (
                            profiles.map(profile => (
                                    <Chatlist key={profile._id} profile={profile} />
                            ))
                        ) : <h4>No profiles found...</h4>}
                    </div>
                    {/* <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist /> */}
                </div>
            </div>
            <div className='chatbox'>
                <div className='chatboxWrapper'>
                    <ChatboxName />
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
                    {/* {profiles.length > 0 ? (
                        profiles.map(profile => ( */}
                            <ChatDetails />
                    {/*     ))
                    ) : <h4>No profiles found...</h4>} */}
                </div>
            </div>
        </div>
    );
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
