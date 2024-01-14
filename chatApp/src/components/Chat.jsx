import React from 'react'
import "../styles/Chat.css"
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlinePersonAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import Conversation from './Conversation';
import Input from "./Input"




function Chat() {
  return (
    <div className='chat'>
      <div className="top-bar">
        <h2>John Q</h2>
        <div className="icons">
        <BsCameraVideoFill size={25} color='white'/>
        <MdOutlinePersonAdd size={25} color='white' />
        <IoMdMore size={25} color='white'/>
        </div>
      </div>
      <Conversation/>
      <Input/>
    </div>
  )
}

export default Chat