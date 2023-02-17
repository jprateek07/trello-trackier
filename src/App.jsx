import React, { useState } from "react";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import 'antd/dist/antd.css';
import Protected from "./PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Protected screen="dashboard">
            <Dashboard />
          </Protected>} />
          
        <Route exact path="/sign-in" element={  <Protected screen='login'><Login/></Protected>} />
        <Route exact path="/sign-up" element={  <Protected screen='login'><Signup/></Protected>} />
        <Route path="*" element={<Protected screen='others'><Login/></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}