import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

const App =() => {
    const user = false;

    
return (
    <BrowserRouter>
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/post/:id"
          element={user ? <Task /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  </BrowserRouter>
);
};

export default App;
