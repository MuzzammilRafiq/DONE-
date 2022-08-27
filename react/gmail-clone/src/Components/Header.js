import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import TuneIcon from '@material-ui/icons/Tune';
function Header() {
return(<div className="header">

    <div className="header_left">
        <IconButton> <MenuIcon/> </IconButton>
        <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt="Gmail" />
    </div>

    <div className="header_middle">
        <IconButton> <SearchIcon/> </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton> <TuneIcon className="header_inputCaret"/> </IconButton> 
    </div>

    <div className="header_right">
        <IconButton> <HelpOutlineIcon/> </IconButton>
        <IconButton>  <SettingsIcon/>   </IconButton>
        <IconButton>    <AppsIcon/>     </IconButton>
        <IconButton>     <Avatar/>      </IconButton>
    </div>
</div>)}
export default Header
