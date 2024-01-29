import React, {useState, useEffect} from 'react'
import { IoMdCreate } from "react-icons/io";
import "./Feed.css"
import InputOption from './InputOption';
import { FaRegImage } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import Post from './Post';
import { db, firebase } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Feed() {

  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);




const sendPost = (e) => {
  e.preventDefault();

  db.collection('posts').add({
    name: user.displayName,
    description: user.email,
    message: input,
    photourl: user.photoUrl || "",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  });
  setInput('');

} 

  return (
    <div className='feed'>
      <div className='feed__inputConatianer'>
        <div className='feed__input'>
          <IoMdCreate />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post' />
            <button onClick={sendPost} type='submit' >Send</button>

          </form>
        </div>

        <div className='feed__inputOption'>
          <InputOption Icon={FaRegImage} title='Media' color= "#70B5F9" />
          <InputOption Icon={MdEventNote} title='Event' color= "#C0CBCD" />
          <InputOption Icon={TfiWrite} title='Write article'  color= "#7FC15E" />
        </div>
      </div>

      {posts.map(({ id, data: {name, description, message, photourl}}) => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photourl={photourl}

        />
      ))}
      

      {/* posts */}

    </div>
  )
}

export default Feed;