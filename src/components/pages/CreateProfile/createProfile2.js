import './createProfile.css'
import progressLine2 from './progressLine2.svg'

function createProfile2(){
    return(
        <div>
 <div className="progressText">
                    <p className="progressTextInactive"> Personal Info</p>  <p className="progressTextActive"> Profile Picture </p>
                </div>
                <img className="progressLine" src={progressLine2} alt="progressLine" />


                <form className="createProfileForm">

                    <div className="createProfileInputContainer">
                        <p className="inputLabel">Profile picture </p> 
                        <input className="createProfileInput" placeholder="Computer Engineer" />


                        <button className="createProfileButton"> Finish </button>
                    </div>

                </form>
        </div>
    )
}

export default createProfile2;