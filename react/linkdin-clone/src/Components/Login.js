import React, { useState } from 'react';
import './Login.css';
import Images from './images.png';
import {auth} from './firebase';
import {login} from '../features/userSlice';
import { useDispatch } from 'react-redux';
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilepic, setProfilepic] = useState("");
    const dispatch = useDispatch()
    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoUrl:userAuth.user.photoUrl,
          }));
        }).catch(error => alert(error));
    };

    const register = () => {
        if(!name){
            return alert("Please Enter Full Name!");
        }
        auth.createUserWithEmailAndPassword(email, password)
          .then((userAuth) => { 
            userAuth.user
            .updateProfile({
              displayName: name,
              photoUrl: profilepic,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilepic,
                })
              );
            });
        }).catch(error => alert(error));
    };

    return (
      <div className="login">
        <img src={Images} alt="ll" />
        <form>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter full name"
          />

          <input
            value={profilepic}
            onChange={(e) => setProfilepic(e.target.value)}
            type="text"
            placeholder="profile picture URL(optional)"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button type="submit" onClick={loginToApp}>Sign in</button>

        </form>
        <p>
          Not a member?{" "}
          <span className="login_register" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    );
}

export default Login
