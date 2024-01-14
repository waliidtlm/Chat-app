import React from 'react'
import "../styles/List.css"
import { FcAddImage } from "react-icons/fc";


function List() {
  return (
    <div className='list'>
      <div className="user">
        <div className="icon">
          <img src="Profil.jpg" alt="" />
        </div>
        <div className="username">
          <h3>leo messi</h3>
          <p>Hello my friend</p>
        </div>
      </div>
      <div className="user">
        <div className="icon">
          <img src="Profil.jpg" alt="" />
        </div>
        <div className="username">
          <h3>leo messi</h3>
          <p>Hello my friend</p>
        </div>
      </div>
      <div className="user">
        <div className="icon">
          <img src="Profil.jpg" alt="" />
        </div>
        <div className="username">
          <h3>leo messi</h3>
          <p>Hello my friend</p>
        </div>
      </div>
      <div className="user">
        <div className="icon">
          <img src="Profil.jpg" alt="" />
        </div>
        <div className="username">
          <h3>leo messi</h3>
          <p>Hello my friend</p>
        </div>
      </div>
    </div>
  );
}

export default List