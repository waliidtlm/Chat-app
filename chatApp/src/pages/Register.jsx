import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import React from 'react'
import "../styles/RegisterLogin.css"
import { FcAddImage } from "react-icons/fc";



function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error.message, "error uploading image");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(response.user,{
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", response.user.uid),{
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          });
        }
      );
    } catch (error) {
      console.log(error.message, "something went wrong");
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
          <button className="sign">Sign Up</button>
          <p>You have an account ? Login Here </p>
        </form>
      </div>
    </div>
  );
}

export default Register
