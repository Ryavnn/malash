import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('access_token'); // Adjust this condition based on your auth logic

    const handleLogout = () => {
        localStorage.removeItem('access_token'); // Remove the token from local storage (or clear auth state)
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <h1>Clothify</h1>
                </div>
                <div className="center-links">
                    <ul>
                        {/* <li><Link to="/">Home page</Link></li> */}
                        {/* <li><Link to="/products">Products</Link></li> */}
                        {/* <li><Link to="/about">About us</Link></li> */}
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                    </ul>
                </div>
                <div className="left-links">
                    <ul>
                        <Link className="nav-links" to="/cart">Cart</Link>
                        {isLoggedIn ? (
                            <li><button onClick={handleLogout} className="nav-links">Logout</button></li>
                        ) : (
                            <Link className="nav-links" to="/login">Login</Link>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
