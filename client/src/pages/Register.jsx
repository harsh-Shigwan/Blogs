import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Backend_API from "../../Backend_API";
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handlechange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      await axios.post(
        `${Backend_API}/api/auth/register`,
        input);
      navigate("/login");
    } catch (err) {
      // Log detailed error information
     setErr(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handlechange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          onChange={handlechange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handlechange}
        />

        <button onClick={handleSubmit}>Register</button>
      {err && <p>This is a error !</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
