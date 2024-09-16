import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
 navigate("/signup");
    }
    const handleSignIn = () => {
      navigate("/signin");
    };
  return (
      <div className="home">
          <h2>Home</h2>
          <button onClick={handleSignUp}>SignUp</button>
          <button onClick={handleSignIn}>SignIn</button>
    </div>
  )
}

export default Home