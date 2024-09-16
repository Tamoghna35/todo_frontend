import React, {useState} from 'react'

const SignUp = () => {
const [name, setName] =useState("")
const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // console.log("Sign Up Form submitted:", { name, email, password });
        const userData = {
          name,
          email,
          password,
        };
        try {
           const response = await fetch("http://localhost:8080/api/v1/users/registerUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
           });
            if (!response.ok) {
                 throw new Error("Failed to register. Please try again.");
            }
            console.log("response==>", response);
            
            const result = await response.json()
            console.log("result ==>", result);
            
            
        } catch (error) {
            console.log("Unable to Register", error);
            
        }

    }
    
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default SignUp