import React, { useContext } from 'react'
import "../styles/Navbar.css"
import { IoIosLogOut } from "react-icons/io";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="logo">
        <h3>TALK</h3>
      </div>
      <div className="info">
        <div className="img-container">
          <img
            src={currentUser.photoURL}
            alt="profil-pic"
          />
        </div>
        <h3>{currentUser.displayName}</h3>
        {/* <button className="logout"><IoIosLogOut /></button> */}
        <a href="#" onClick={()=>signOut(auth)}>
          <IoIosLogOut size={30} color='white' />
        </a>
      </div>
    </div>
  );
}

export default Navbar