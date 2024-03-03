import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function validateForm() {
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email address");
      return false;
    }

    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }

    if (!formData.password.trim()) {
      setError("Password is required");
      return false;
    }

    setError(null); // Clear any previous error
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/users", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        if (!response.ok) {
          setError(responseData.error || "Failed to sign up");
          setResponseMessage("");
        } else {
          setResponseMessage(responseData.message || "Successfully signed up!");
          setError("");
        }
      } catch (error) {
        console.error("Error signing up:", error.message);
        setError("An error occurred while signing up");
        setResponseMessage("");
      }
    }
  };

  useEffect(() => {
    if (responseMessage) {
      window.alert(responseMessage);
      navigate("/login");
    }
  }, [responseMessage, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="log-in">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
        {error && <p className="error-message">{error}</p>}
        <p className="form-text">
          Already have an account?{' '}
          <Link to="/login" id="create-account">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
