import React from 'react'
import "../styles/Sidebar.css"
import Navbar from './Navbar';
import Search from './Search'
import List from './List'


function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <Navbar/>
      <Search/>
     
    </div>
       
    
    
    
    </>

  );
}

export default Sidebar