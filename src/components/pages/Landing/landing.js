import {Link} from 'react-router-dom'

import './landing.css'
import Navbar from '../../Navbar'

import landingImage from '../Landing/landingImage.svg'
import step1Image from '../Landing/step1Image.svg'
import step2Image from '../Landing/step2Image.svg'
import step3Image from '../Landing/step3Image.svg'

function Landing(){
    return(
        <div className="landing">
            <Navbar />

            <div className="landingSect1">
                <div className="sect1left">
                    <h1 className="heroTitle"> Find your  <br /> Study Buddy. </h1> 
                    <Link to="/register">
                        <button className="createAccountBtn"> Create Account </button>
                    </Link>
                </div>
                <img src={landingImage} />
            </div>

            <div className="landingSect2">
                <h2>How it works</h2>

                <div className="threeSteps">
                    <div className="threeStepsRow">
                        <div className="threeStepsCell step1">
                            <h3>Create</h3>
                            <img style={{maxWidth: '80%', height: '200px'}} src={step1Image} />
                            <p>Create your profile by adding interests, classes, and more</p>
                        </div>

                        <div className="threeStepsCell step2">
                            <h3>Swipe</h3>
                            <img style={{maxWidth: '80%', height: '200px'}} src={step2Image} />
                            <p>Look through potential study buddies</p>
                        </div>

                        <div className="threeStepsCell step3">
                            <h3>Study</h3>
                            <img style={{maxWidth: '80%', height: '200px'}} src={step3Image} />
                            <p>Connect with other students and chat with them</p>

                            <p>lol</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Landing;
