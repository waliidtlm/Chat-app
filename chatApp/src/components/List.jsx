import React, { useContext, useEffect, useState } from 'react'
import "../styles/List.css"
import { FcAddImage } from "react-icons/fc";
import { AuthContext } from '../context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';


function List() {

  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats(); 
  }, [currentUser.uid]);
  
  return (
    <div className="list">
      {Object.entries(chats)?.map((chat) => (
        <div className="user" key={chat[0]}>
          <div className="icon">
            <img src={chat[1].userInfo.photoURL} alt="" />
          </div>
          <div className="username">
            <h3>{chat[1].userInfo.displayName}</h3>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
         </div>
        </div>
      ))}
    </div>
  );
}

export default List