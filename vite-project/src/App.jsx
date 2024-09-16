
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './authcomponent/signup/SignUp'
import SignIn from './authcomponent/signin/SignIn';
import Home from './Maincomponent/home/Home';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
