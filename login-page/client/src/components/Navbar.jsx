import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">SP Solutions</Link></span>
            <span className="signin"><Link className="signin" to="/login">Login</Link></span>
        </div>
    );
};

export default Navbar