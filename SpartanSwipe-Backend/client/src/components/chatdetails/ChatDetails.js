import React, { Fragment, useEffect, useParams } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ChatDetails.css';
import { getProfileById } from '../../actions/profile';


const ChatDetails = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        department, 
        degrees 
} }) => {

    return (
        <div className='chatOnline'>
            <div className='chatOnlineBuddy'>
                <div className='chatOnlineProfilePicContainer'>
                    <img className='chatOnlineProfilePic' src={avatar} alt=''/>
                    {/* <div className='chatOnlineStatus'></div> */}
                </div>
            </div>
            <div className="chatOnlineDetails">
                <p className='chatOnlineName'>{name}</p>
                <p>{department}</p>
                <p>{degrees}</p>
            </div>
        </div>
    )
 }

//  ChatDetails.propTypes = {
//     getProfileById: PropTypes.func.isRequired,
//     profile: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     profile: state.profile,
//     auth: state.auth
// });

// export default connect(mapStateToProps, { getProfileById })(ChatDetails);
export default ChatDetails;
