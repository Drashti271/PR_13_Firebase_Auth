import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin setIsLogin={setIsLogin} />} />
        <Route
          path="/home"
          element={isLogin ? <Home /> : <Signin setIsLogin={setIsLogin} />}
        />
      </Routes>
    </>
  );
};

export default App;
