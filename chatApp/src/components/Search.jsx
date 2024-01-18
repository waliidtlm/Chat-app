import React, { useState } from 'react'
import "../styles/Search.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase"
 
function Search() {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
      )
      console.log(q, "q")
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log("querySnapshot",querySnapshot)
  });
    }catch(error){
     console.log(error.message)
    }
  }

  const handleKey = e => {
    e.code == "Enter" && handleSearch()
  }
  // const handleSelect = 

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Find user by name..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
        

        {user && <div className="user" >
          <div className="icon">
            <img src={user.photoURL}alt="" />
          </div>
          <div className="username">
            <h3>{user.displayName}</h3>
            <p>Hii there!!</p>
          </div>
        </div>}
      </div>
    </>
  );
}

export default Search