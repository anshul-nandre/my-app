
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Component/LoginForm';  // Ensure the correct import path
import SignupForm from './Component/SignupForm'; // Ensure the correct import path
import NoPage from './Component/NoPage'; // Ensure the correct import path
import Welcome from './Component/Welcome';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signin" element={<SignupForm />} />
      <Route
        path="/welcome"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
