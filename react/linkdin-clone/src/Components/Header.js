import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from './Linkdin-icon.png'; 
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from '../features/userSlice';
function Header() {
   const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutApp = () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header_left">

        <img src={logo} alt="" />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>

      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} Title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} Title="MyNetwork"/>
        <HeaderOption Icon={BusinessCenterIcon} Title="Jobs"/>
        <HeaderOption Icon={ChatIcon} Title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} Title="Notifications"/>
        <HeaderOption avatar={true} Title="Me" onClick={logoutApp}/>
      </div>
    </div>
  );
}

export default Header;