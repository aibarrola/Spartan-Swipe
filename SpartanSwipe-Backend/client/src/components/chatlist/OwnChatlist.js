import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import './OwnChatlist.css';

const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return profile ? (
        <div className='ownChatList'>
            <img className='ownChatListProfilePic' src='https://as1.ftcdn.net/v2/jpg/01/17/42/38/500_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg' alt=''/>
            <span className='ownChatListName'>{user && user.name}</span>
            
        </div>
    ) : null;
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);