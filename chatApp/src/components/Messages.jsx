import React from 'react'
import "../styles/Messages.css"




function Messages() {
  return (
    <>
    <div className='messages'>
      <div className="msg-avatar">
      <img src='avatar1.jpg' alt="" />
      </div>
      <div className="user-msg">
        <h3>Hello Again !!</h3>
      </div>
    </div>
    <div className='messages received'>
      <div className="msg-avatar">
      <img src='avatar1.jpg' alt="" />
      </div>
      <div className="user-msg received">
        <h3>hello again !!</h3>
      </div>
    </div>
    </>
  )
}

export default Messages