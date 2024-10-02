import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to login page
  }

  // Otherwise, render the protected page
  return children;
}
