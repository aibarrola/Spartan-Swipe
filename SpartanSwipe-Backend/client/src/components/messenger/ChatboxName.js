import React, { Fragment, useEffect, useParams } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ChatboxName.css';
import { getProfileById } from '../../actions/profile';

export default function ChatboxName({own}) {
    return (
        <div className='chatboxName'>
            <p>Test User</p>
        </div>
    )
}

// var url = window.location.pathname;
// var id = url.substring(url.lastIndexOf('/') + 1);
// console.log(id);

// const ChatboxName = ({ 
//     profile: { 
//         user: { _id, name, avatar }, 
//         department, 
//         degrees 
// } }) => {
 
    
//     return (
//         <div className='chatboxName'>
//             <p>{_id === id ? name : null}</p>
//         </div>
//     )
//  }

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
// export default ChatboxName;
