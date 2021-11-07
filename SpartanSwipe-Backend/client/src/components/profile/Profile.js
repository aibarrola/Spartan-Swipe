import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';


const Profile = ({ 
    getProfileById, 
    profile: { profile, loading }, 
    auth, 
    match
 }) => {
    useEffect(() => {
        // Match Id and URL
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);


    // "When the Profile component first renders profile in state is null. It's only after the render that useEffect runs.
    // So the component tries to render Profile and ProfileTop with no profile in state which causes the app to error out 
    // before the useEffect runs to actually fetch a profile. So you only want to render the component if there is a profile"
    // Since, we are not using Spinner while loading, we'll have to add 'profile ?' after our return and ' : null;' at the end
    // of the return statement. 
    return profile ? (
        <Fragment>
            <Link to='/profiles' className='btn btn-light'>Back to StudyBuddies</Link>
            <div class="profile-grid my-1">
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
            </div>
        </Fragment>
    ) : null;
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
