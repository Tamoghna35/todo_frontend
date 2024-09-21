// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";

// const Logout = ({ logOut }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleLogout = async () => {
//       try {
//         await axios.post("http://localhost:8080/api/v1/users/logout");
//         // Clear cookies or any other authentication data
//         Cookies.remove("accessToken");
//         Cookies.remove("refreshToken");
//         logOut(); // Call the logOut function passed as a prop
//         navigate("/signin"); // Redirect to the sign-in page
//       } catch (error) {
//         console.error("Error while logging out:", error);
//       }
//     };

//     handleLogout();
//   }, [logOut, navigate]);

//   return <div>Logging out...</div>;
// };

// export default Logout;
