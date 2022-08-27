import React ,{useEffect, useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timstamp','desc').onSnapshot((snapshot) =>
         setPosts(
                snapshot.docs.map(doc =>({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photourl: user.photourl || '',
            timstamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    return (<div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
                    {/* <input type="submit" value="Send"/> */}
                </form>
            </div>

            <div className="feed_inputOptions">
                <InputOption icon={ImageIcon} title="Photo" color="#70b5f9"/>
                <InputOption icon={YouTubeIcon} title="Video" color="#7fc15e"/>
                <InputOption icon={EventIcon} title="Event" color="#f1ce98"/>
                <InputOption icon={CalendarViewDayIcon} title="Write article" color="#f1ce98"/>
            </div>
        </div>
        {posts.map(({id,data:{name,description,message,photourl}})=>(
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}
            />
        ))}

        {/* <Post name="Mzml Rafiq" description="Description is" message="message is" photourl="nnnn"/> */}
    </div>)
}

export default Feed
