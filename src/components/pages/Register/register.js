import './register.css'
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
//import Axios from 'axios';



function Register(){

    //React hooks to hold the value
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let history = useHistory();

    function handleSubmit(e){
        e.preventDefault(); //prevents page from reloading upon submission
        console.log("handle submit function is called")

        //saves user information into user
        const user = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(user);  //check what information is saved into user

        //I need to send to the backend using Axios when the backend is setup
    }


    function handleChange(e) {
        // Deconstruct e.target
        const { name, value} = e.target;
        console.log("handle change")
    
        // Switch statement to decide what value to change
        // Prevents having to create more than one handleChange function for multiple inputs
        switch (name) {
          case "firstName":
            setFirstName(value);  // Set firstName to value of field
            break;
          case "lastName":
            setLastName(value); 
            break;
          case "email":
            setEmail(value);   
            break;
          case "password":
            setPassword(value); 
          default:
              //no default

        }
    }

    

    return(
        <div className="register">
            <div className="registerBox">
                <h1 className="registerTitle"> Let's get started! </h1>
                <h2 className="registerDesc"> Register with your school email </h2>

                <form className="registerForm" onSubmit={handleSubmit}>

                    <div className="registerInputContainer">
                        <p className="inputLabel">First name</p> 
                        <input type="text" name="firstName" className="signUpInput" placeholder="Angelo" required value={firstName} onChange={handleChange} />

                        <p className="inputLabel">Last name</p> 
                        <input type="text" name="lastName" className="signUpInput" placeholder="Ibarrola" required value={lastName} onChange={handleChange}  />

                        <p className="inputLabel">Email</p> 
                        <input type="text" name="email" className="signUpInput" placeholder="angelo.ibarrola@sjsu.edu" required value={email} onChange={handleChange} />

                        <p className="inputLabel"> Password </p>
                        <input type="password" name="password" className="signUpInput" placeholder="Enter Password" required value={password} onChange={handleChange}  />

                        <input type="submit" className="registerButton" value="Register"  />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register