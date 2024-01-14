import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>TALK</h3>
      </div>
      <div className="info">
       <div className='img-container'>
        <img src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
        <h3>Walid Tlem</h3>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Navbar