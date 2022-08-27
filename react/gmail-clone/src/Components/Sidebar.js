import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
function Sidebar() {
return (<div className="sidebar">

    <Button 
        className="sidebar_compose" 
        startIcon={<AddIcon fontSize="large"/>}
    > Compose</Button>

    <SidebarOptions Icon = {InboxIcon} title="Inbox" number={54} selected={true}/>
    <SidebarOptions Icon = {StarIcon} title="Starred" number={54}/>
    <SidebarOptions Icon = {WatchLaterIcon} title="Snoozed" number={54}/>
    <SidebarOptions Icon = {SendIcon} title="Sent" number={54}/>
    <SidebarOptions Icon = {NoteIcon} title="Drafts" number={54}/>
    <SidebarOptions Icon = {ExpandMoreIcon} title="More"/>

    <div className="sidebar_footer">
        <div className="sideabar_footerIcons">
            <IconButton> <PersonIcon/> </IconButton>
            <IconButton> <DuoIcon/> </IconButton>
            <IconButton> <PhoneIcon/> </IconButton>
        </div>
    </div>
</div>)}

export default Sidebar
