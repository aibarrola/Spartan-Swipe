import React, { Fragment, useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../../App.css';

import Spinner from '../layout/Spinner';
import Card from './Card';
import { getProfiles } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Hardcoded test
const Swipe = () => {
    const [buddy, setBuddy] = useState([
        { name: "Toby", imgUrl: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Willem", imgUrl: "https://images.pexels.com/photos/5537546/pexels-photo-5537546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Sebastian", imgUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    // person in map is a temporary variable, you can name it anything
    return (
        <div className='swipeCards'>
            <div className='tinderCard__container'>
                {buddy.map(person => (
                    <TinderCard
                        className='swipe' 
                        key={person.name} 
                        preventSwipe={['up', 'down']} 
                        onSwipe={(dir) => swiped(dir, person.name)} 
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
*/

const Swipe = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <Fragment>
            { loading ? <Spinner /> : <Fragment> 
                <p className="lead">
                    <i className="header"></i> Swipe Left: Sorry, Buddy. ||| Swipe Right: Let's Study Buddy!
                </p>
                <div className="swipeCards">
                    <div className='tinderCard__container'>
                        {profiles.length > 0 ? (
                            profiles.map(profile => (
                                <TinderCard
                                    className='swipe' 
                                    key={profile.name} 
                                    preventSwipe={['up', 'down']} 
                                    onSwipe={(dir) => swiped(dir, profile.name)} 
                                    onCardLeftScreen={() => outOfFrame(profile.name)}
                                >
                                    <Card key={profile._id} profile={profile} />
                                </TinderCard>
                            ))
                            ) : <h4>No StudyBuddies found...</h4>}
                    </div>
                </div>
                </Fragment> }
        </Fragment>
    );
};

Swipe.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Swipe);
