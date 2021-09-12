import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Swipe.css';
import './SwipeButtons'

function Swipe() {
    const [buddies, setBuddies] = useState([
        {
            name: 'Test Name',
            profPic: 'https://as1.ftcdn.net/v2/jpg/01/17/42/38/500_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg',
        },
        {
            name: 'Nest Tame',
            profPic: 'https://thumbs.dreamstime.com/z/happy-university-college-student-thumbs-up-15010463.jpg',
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + 'left the screen!');
    };
    
    return (
        <div>
            <div className='swipeCards'>
                {buddies.map((buddy) => (
                <TinderCard
                    className='swipe'
                    //Always give keys in React because it allows React to efficiently re-render lists making apps quicker
                    key={buddy.name}
                    preventSwipe={['up', 'down']}
                    //these two functions might not be needed
                    onSwipe={(dir) => swiped(dir, buddy.name)}
                    onCardLeftScreen={() => outOfFrame(buddy.name)}
                >
                    <div
                    style={{ backgroundImage: `url(${buddy.profPic})` }}
                    className='card'
                    >
                        <h3>{buddy.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default Swipe;