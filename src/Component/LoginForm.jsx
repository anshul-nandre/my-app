import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default function LoginForm() {

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Log the input values
    console.log("Email or Phone:", emailOrPhone);
    console.log("Password:", password);
    // Get saved data from local storage
    const savedData = JSON.parse(localStorage.getItem("formData"));

    // Check if saved data exists and if email/phone and password match
    if (savedData && (savedData.email === emailOrPhone || savedData.phoneNumber === emailOrPhone) && savedData.password === password) {
      // Set authentication flag in localStorage
      localStorage.setItem("isAuthenticated", "true");

      // Redirect to the welcome page
      navigate("/welcome");
    } else {
      alert("Invalid email/phone or password. Please try again.");
    }
  }

  return (<>
    <div className="wrapper">
      <div className="title"><span>Login Form</span></div>
      <form onSubmit={handleSubmit} >
        <div className="row">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Email or Phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)} // Update state when input changes
            required
          />
        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state when input changes
            required
          />
        </div>
        <div className="pass"><a href="#">Forgot password?</a></div>
        <div className="row button">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">Not a member? <Link to="/signin">Signup now</Link></div>
      </form>
    </div>
  </>)
}