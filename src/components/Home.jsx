import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyApp
          </a>

          <div className="ms-auto">
            <button onClick={handleLogout} className="btn btn-outline-light">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div
          className="card shadow-lg p-4 text-center"
          style={{ width: "350px", borderRadius: "15px" }}
        >
          <h3 className="mb-3">Welcome 🎉</h3>

          <p className="text-success fw-bold">
            You are successfully logged in!
          </p>

          <button onClick={handleLogout} className="btn btn-danger mt-3">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
