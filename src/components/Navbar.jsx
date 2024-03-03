// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
    const isLoggedIn = !!localStorage.getItem('access_token');

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/login'; // Redirect to login after logout
    };

    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <h1>Clothify</h1>
                </div>
                <div className="center-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        {/* <li><Link to="/about">About Us</Link></li> */}
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                    </ul>
                </div>
                <div className="right-links">
                    <ul>
                        <li><Link to="/cart">Cart</Link></li>
                        {isLoggedIn ? (
                            <li><button onClick={handleLogout}>Logout</button></li>
                        ) : (
                            <li><Link to="/login">Login</Link></li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
