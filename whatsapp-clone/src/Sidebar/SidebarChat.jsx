import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
function SidebarChat() {
  return (
    <div className='sidebarchat'>
        <Avatar/>
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>This is the last Name</p>
        </div>
    </div>
  )
}

export default SidebarChat