import '../components/Navbar.css'

function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <a href="/" className="navbarTitle"> Spartan Swipe </a>
                <a href="/login" className = "navbarLogin"> Login </a>
            </div>
        </nav>
        
    )
}

export default Navbar;