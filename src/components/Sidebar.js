import React from 'react'
import Avatar from 'react-avatar';
import "./Sidebar.css"
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

  
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>

  )

  return (
    
    
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='./images/eye.jpg' alt='eye' />
        <Avatar src={user.photoUrl} className='sidebar__avatar' round={true} >{user.email ? user.email[0] : 'A'}</Avatar>
        

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
           <p>Who viewed you</p>
           <p className='sidebar__statNumber'>1,056</p>
        </div>

        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,150</p>
        </div>


      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Programming')}
        {recentItem('Data structure')}
        {recentItem('javaScript')}
        {recentItem('Bootstrap')}
        {recentItem('HTML')}

      </div>

    </div>
    
   
  )
}

export default Sidebar;