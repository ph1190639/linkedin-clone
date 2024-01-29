import React from 'react';
import "./Post.css";
import Avatar from 'react-avatar';
import InputOption from './InputOption';
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

function Post({name, description, message, photoUrl, avatarSize=40 }) {
  return (
    <div className='post' >
      <div className='post__header'>
        <Avatar src={photoUrl} size={avatarSize} round={true}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
        
      </div>

      <div className='post__button'>
        <InputOption Icon={SlLike} title="Like" color="gray" />
        <InputOption Icon={AiOutlineComment} title="Comment" color="gray" />
        <InputOption Icon={ BiRepost} title="Repost" color="gray" />
        <InputOption Icon={BsSend} title="send" color="gray" />
        
      </div>

    </div>
  )
};

export default Post;