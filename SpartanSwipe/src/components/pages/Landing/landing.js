import {Link} from 'react-router-dom'

import './landing.css'
import Navbar from '../../Navbar'

import landingImage from '../Landing/landingImage.svg'

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
        </div>
    )
}

export default Landing;