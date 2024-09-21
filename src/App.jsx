import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './maincomponent/homeComponent/Home'
import SignUp from './authcomponent/signup/SignUp'
import SignIn from './authcomponent/signin/SignIn'
import Navbar from './maincomponent/Navbar/Navbar'
// import Logout from './authcomponent/logout/Logout'
import TodoMain from './maincomponent/todoComponent/todoMain/TodoMain'



const App = () => {
  const [isLoggedInorNot, setIsLoggedInorNot] = useState(false)
  const login = () => setIsLoggedInorNot(true);
  const logOut = () => setIsLoggedInorNot(false);
  return (
    <Router>
      <div>
        <Navbar isLoggedInorNot={ isLoggedInorNot} logout ={logOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn login={login} />} />
          {/* <Route path="/logout" element={<Logout login={logOut} />} /> */}
          <Route path='/todomain' element={ <TodoMain/>} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App