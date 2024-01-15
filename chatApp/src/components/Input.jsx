import React from 'react'
import "../styles/Input.css"
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdSend } from "react-icons/md";



function Input() {
  return (
    <div className="bottom">
      <input
        type="text"
        placeholder="Write Something"
        className="bottom-input"
      />

      <div className="input-icons">
        <input type="file" id="send-img" style={{ display: "none" }} />
        <label htmlFor="send-img" className="add-icon">
          <MdOutlineAddPhotoAlternate size={30} />
        </label>
        <MdSend size={30} />
      </div>
    </div>
  );
}

export default Input