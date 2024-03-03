import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import your CSS file for Login styling

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function validateForm() {
        let valid = true;

        if (!formData.email.trim()) {
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            valid = false;
        }

        if (!formData.password.trim()) {
            valid = false;
        }

        return valid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log("Successfully logged in!");
    
                    localStorage.setItem('access_token', data.access_token);
    
                    navigate("/");
                } else {
                    const responseData = await response.json();
                    setError(responseData.error || "Failed to log in");
                    console.log("Details not found or incorrect");
                }
            } catch (error) {
                console.error('Error:', error);
                setError("An error occurred while trying to log in.");
            }
        } else {
            console.log("Invalid form data");
            setError("Invalid form data");
        }
    };


    const handleCreateAccountClick = () => {
        navigate("/signup");
    };
    

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className="log-in">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Log in</button>
                <p className="form-text">
                    Don't have an account?
                    <span id="create-account" onClick={handleCreateAccountClick}>Create account</span>
                </p>
            </form>
        </div>
    );
}

export default Login;
