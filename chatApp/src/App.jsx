import React, { useContext } from 'react'
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';







function App() {

  const{currentUser} = useContext(AuthContext)

  const SecureRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/Login"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route
          index
          element={
            <SecureRoute>
              <Home />
            </SecureRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App