import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./maincomponent/homeComponent/Home";
import SignUp from "./authcomponent/signup/SignUp";
import SignIn from "./authcomponent/signin/SignIn";
import Navbar from "./maincomponent/Navbar/Navbar";
import TodoMain from "./maincomponent/todoComponent/todoMain/TodoMain";
import CreateTodo from "./maincomponent/todoComponent/createTodo/CreateTodo";
import Cookies from "js-cookie";

const App = () => {
  const [isLoggedInorNot, setIsLoggedInorNot] = useState(false);

  const login = () => setIsLoggedInorNot(true);
  const logOut = () => setIsLoggedInorNot(false);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsLoggedInorNot(!!accessToken); // Check if the token exists
  }, []);

  return (
    <Router>
      <div>
        <Navbar isLoggedInorNot={isLoggedInorNot} logout={logOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn login={login} />} />
          <Route path="/todomain" element={<TodoMain />} />
          <Route path="/createTodo" element={<CreateTodo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
