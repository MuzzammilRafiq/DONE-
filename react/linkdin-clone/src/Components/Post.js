import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Post({name,description,message,photourl}) {
    const user = useSelector(selectUser);
    return (<div className="post">
        <div className="post_header">
            <Avatar src={user?.photoUrl}>{user.email[0]}</Avatar>
            <div className="post_info"> 
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOption icon={CommentOutlinedIcon} title="Comment" color="gray"/>
            <InputOption icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption icon={SendSharpIcon} title="Send" color="gray"/>
        </div>
    </div>)
}

export default Post;
