import React, { Fragment, useEffect, useParams } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ChatDetails.css';
import { getProfileById } from '../../actions/profile';


export default function ChatDetails() {
    return (
        <div className='chatOnline'>
            <div className='chatOnlineBuddy'>
                <div className='chatOnlineProfilePicContainer'>
                    <img className='chatOnlineProfilePic' src='http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=200&r=pg&d=mm' alt=''/>
                    {/* <div className='chatOnlineStatus'></div> */}
                </div>
            </div>
            <div className="chatOnlineDetails">
                <p className='chatOnlineName'>Test User</p>
                <p className='chatOnlineDepartment'>Charles W. Davidson College of Engineering</p>
                <ul className='chatOnlineDegrees'>
                    <li className=''>
                        <i className='fas fa-check' aria-hidden='true'/> B: Software Engineering 
                    </li>
                    <li>
                        <i className='fas fa-check' aria-hidden='true'/> C: Cybersecurity
                    </li>
                </ul>
            </div>
        </div>
    )
}

// const ChatDetails = ({ 
//     profile: { 
//         user: { _id, name, avatar }, 
//         department, 
//         degrees 
// } }) => {

//     return (
    //     <div className='chatOnline'>
    //         <div className='chatOnlineBuddy'>
    //             <div className='chatOnlineProfilePicContainer'>
    //                 <img className='chatOnlineProfilePic' src={avatar} alt=''/>
    //                 {/* <div className='chatOnlineStatus'></div> */}
    //             </div>
    //         </div>
    //         <div className="chatOnlineDetails">
    //             <p className='chatOnlineName'>{name}</p>
    //             <p className='chatOnlineDepartment'>{department}</p>
    //             <ul className='chatOnlineDegrees'>
    //                     {degrees.slice(0, 5).map((degree, index) => (
    //                         <li key={index} className=''>
    //                             <i className='fas fa-check' aria-hidden='true'/> {degree}
    //                         </li>
    //                     ))}
    //                 </ul>
    //         </div>
    //     </div>
    // )
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
// export default ChatDetails;
