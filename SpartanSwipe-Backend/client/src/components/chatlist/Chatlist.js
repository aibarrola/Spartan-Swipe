import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ChatlistItems from './ChatlistItems';
import { getProfiles } from '../../actions/profile';
import './Chatlist.css';


const Chatlist = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <div className='chatList'>
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ChatlistItems key={profile._id} profile={profile} />
                    ))
                ) : <h4>No profiles found...</h4>}
        </div>
    )
}

Chatlist.propTypes = {
    getChatlist: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Chatlist);
