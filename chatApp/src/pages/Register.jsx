import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import React from 'react'
import "../styles/RegisterLogin.css"
import { FcAddImage } from "react-icons/fc";
import {useNavigate, Link} from "react-router-dom"


function Register() {
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create a sanitized displayName for Firebase Storage
      const sanitizedDisplayName = displayName.replace(/\s+/g, '_');
      
      // Create user in Firebase Authentication
      const response = await createUserWithEmailAndPassword(auth, email, password);

      // Create storage reference
      const storageRef = ref(storage, sanitizedDisplayName);

      // Upload file to storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Handle upload completion
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error(error.message, "Error uploading image");
        },
        () => {
          // Get download URL after successful upload
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update user profile with displayName and photoURL
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Set user document in Firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", response.user.uid),{})
            navigate("/")

          });
        }
      );
    } catch (error) {
      console.error(error.message, "Something went wrong");
    }
  };




  return (
    <div className="register-page">
      <div className="container">
        <div className="banner"></div>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar" className="add-avatar">
            <FcAddImage size={50} /> Add Avatar
          </label>
          <button type="submit" className="sign">Sign Up</button>
          <p>You have an account ? Login <Link to="/login">Here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register
