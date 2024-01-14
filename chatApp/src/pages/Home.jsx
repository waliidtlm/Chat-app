import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from "../components/Chat"
import "../styles/Home.css"
import Search from '../components/Search';



function Home() {
  return (
    <div className='home'>
     <div className="chat-container">
      <Sidebar />
      <Chat />
     </div>
    </div>
     
    
  );
}

export default Home