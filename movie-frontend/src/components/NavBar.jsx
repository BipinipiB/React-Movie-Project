import { Link} from "react-router-dom";
import '../css/Navbar.css'

function NavBar(){
    return  <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/"> Movie App</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/home" className="nav-link"> Home</Link>
                    <Link to="/favorites" className="nav-link"> Favorites</Link>
                </div>

                <div className="navbar-user-links">
                    <Link to="/Login" className="nav-link"> Login</Link>
                    <Link to="/Register" className="nav-link"> Register</Link>
                </div>
    </nav>
}

export default NavBar