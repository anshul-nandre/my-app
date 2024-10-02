// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Import the routes

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
