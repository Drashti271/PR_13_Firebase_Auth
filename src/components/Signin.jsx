import React, { useState } from "react";
import { auth, provider } from "../firebase/config.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signin = ({ setIsLogin }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLogin(true);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
    setUser({});
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        setIsLogin(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card px-4 py-5">
            <h2 className="text-center">Sign In</h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="form-control mb-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="form-control mb-3"
            />

            <button className="btn btn-primary mb-2">Sign In</button>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline-secondary mb-3"
            >
              Login with Google
            </button>

            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
