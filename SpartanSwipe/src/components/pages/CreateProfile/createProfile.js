import React, {useState} from 'react'
import './createProfile.css'
import CreateProfile1 from './createProfile1'
import CreateProfile2 from './createProfile2'

function CreateProfile(){

    const [prog1Active, setProg1Active] = useState(true);

function handleSubmit(e){
    e.preventDefault();
    setProg1Active(false);

}

    return(
        <div className="createProfile">
            <div className="createProfileBox">
                <h1 className="createProfileTitle"> Create your profile </h1>

               {prog1Active ? <CreateProfile1 handleSubmit={handleSubmit} /> : <CreateProfile2 />}
                
               
            </div>
        </div>
    )
}

export default CreateProfile