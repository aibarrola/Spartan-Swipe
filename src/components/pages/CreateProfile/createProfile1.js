import './createProfile.css'
import progressLine1 from './progressLine1.svg'

function createProfile1({handleSubmit}){


    return(
        <div>
                <div className="progressText">
                    <p className="progressTextActive"> Personal Info</p>  <p className="progressTextInactive"> Profile Picture </p>
                </div>
                <img className="progressLine" src={progressLine1} alt="progressLine1" />


                <form className="createProfileForm" onSubmit={handleSubmit}>

                    <div className="createProfileInputContainer">
                        <p className="inputLabel">Your major</p> 
                        <input type="text" name="major" className="createProfileInput" placeholder="Computer Engineer" />

                        <p className="inputLabel"> About Me </p>
                        <input type="text" name="bio" className="createProfileInput" placeholder="Write a short bio about you..." />

                        <p className="inputLabel"> Your classes </p>
                        <input type="text" name="classes" className="createProfileInput" placeholder="CMPE 140, MUSC 120" />

                        <p className="inputLabel"> Your interests </p>
                        <input type="text" name="interests" className="createProfileInput" placeholder="Sports, hiking, raving" />

                        <p className="inputLabel"> I want to study</p>
                        <input type="text" name="studying" className="createProfileInput" placeholder="Data structures and Algorithms" />

                        <button className="createProfileButton"> Next </button>
                    </div>

                </form>
        </div>
    )
}

export default createProfile1;