import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'
import {login,logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login';
import { auth } from './Components/firebase';
import Widgets from './Components/Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }));
      }else{
        //user logged out
        dispatch(logout());
        
      }
    })

  }, [])

  return (
    <div className="app"> 
        <Header/>
      {!user ? (
        <Login/>
        ):(
        <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widgets></Widgets>
        </div>
      )}
    </div>
  );
}

export default App;
