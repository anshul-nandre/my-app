
import { useState } from "react";
export default function SignupForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });


    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
     // Save form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Verify data saved in local storage
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    // Redirect to the home page
    window.location.href = "/"; // Replace '/home' with your actual home page route
  }


    
    // Log the form data to the console
    console.log("Full Name:", formData.fullName);
    console.log("Username:", formData.username);
    console.log("Email:", formData.email);
    console.log("Phone Number:", formData.phoneNumber);
    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);
    console.log("Gender:", formData.gender);

    // You can now process the form data or send it to a server
  };


  return (
    <>
      <div className="container">

        <div className="title">Registration</div>
        <div className="content">

          <form onSubmit={handleSubmit}>
            <div className="user-details">

              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="gender-details">

            <label>
  <input 
    type="radio" 
    name="gender" 
    value="Male" 
    checked={formData.gender === 'Male'} 
    onChange={handleInputChange} 
  />
  <span className="gender">Male</span>
</label>
<label>
  <input 
    type="radio" 
    name="gender" 
    value="Female" 
    checked={formData.gender === 'Female'} 
    onChange={handleInputChange} 
  />
  <span className="gender">Female</span>
</label>
<label>
  <input 
    type="radio" 
    name="gender" 
    value="Prefer not to say" 
    checked={formData.gender === 'Prefer not to say'} 
    onChange={handleInputChange} 
  />
  <span className="gender">Prefer not to say</span>
</label>

            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}