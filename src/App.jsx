import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './maincomponent/homeComponent/Home'
import SignUp from './authcomponent/signup/SignUp'
import SignIn from './authcomponent/signin/SignIn'
import Navbar from './maincomponent/Navbar/Navbar'
import TodoMain from './maincomponent/todoComponent/todoMain/TodoMain'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/todomain' element={ <TodoMain/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App