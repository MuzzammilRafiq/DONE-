import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import Img from './avatar.jpeg';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) =>(
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (<div className="sidebar">
        {/* Sidebartop */}
        <div className="sidebar_top">
            <img src={Img} alt="" />
            <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            {/* <h4>{user.email}</h4> */}
            <h4>Student at NIT Srinagar || Training and <br></br>Placement Cell</h4>
        </div>

        {/* Sidebar stats */}
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Connections</p>
                <p className="sidebar_statNumber">90</p>
            </div>
            <div className="sidebar_stat">
                <p>Who viewed your profile</p>
                <p className="sidebar_statNumber">37</p>
            </div>
        </div>
        {/* sidebarButton */}
        <div className="sidebar_button">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('rea')}
        </div>

        {/* sidebar buttom */}
        <div className="sidebar_buttom"></div>

    </div>);
}

export default Sidebar
