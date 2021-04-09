import './register.css'

function Register(){
    return(
        <div className="register">
            <div className="registerBox">
                <h1 className="registerTitle"> Let's get started! </h1>
                <h2 className="registerDesc"> Register with your school email </h2>

                <form className="registerForm">

                    <div className="registerInputContainer">
                        <p className="inputLabel">Email</p> 
                        <input className="signUpInput" placeholder="angelo.ibarrola@sjsu.edu" />

                        <p className="inputLabel"> Password </p>
                        <input className="signUpInput" placeholder="Enter Password" />

                        <button className="registerButton"> Continue </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register