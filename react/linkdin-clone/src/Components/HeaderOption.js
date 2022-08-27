import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
function HeaderOption({avatar,Icon,Title,onClick }) {
  const user = useSelector(selectUser);
    return (
      <div onClick={onClick} className="headerOption">

        {Icon && <Icon className="headerOptions_icon" />}
        {avatar && <Avatar className="headerOptions_icon" src={user?.photoUrl}>{user?.email[0]}</Avatar> }
        <h3 className="headerOption_title">{Title}</h3>

      </div>
    );
}

export default HeaderOption
