import React from 'react'
import { IoSearch } from "react-icons/io5";
import './Header.css';
import HeaderOption from './HeaderOption';
import { IoHomeSharp } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout,  } from '../features/userSlice';


function Header() {

  //const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      

      <div className='header__left'>
        <img src="/images/ln.png" alt="" />
        <div className='header__search'>
          <IoSearch />
          <input placeholder='Search' type="text" />
        </div>
       

      </div>

      <div className='header__right'>
        <HeaderOption Icon={IoHomeSharp } title='Home'/>
        <HeaderOption Icon={MdSupervisorAccount} title='My Network'/>
        <HeaderOption Icon={MdBusinessCenter } title='Job'/>
        <HeaderOption Icon={BsChatDotsFill } title='Message'/>
        <HeaderOption Icon={IoNotificationsSharp } title='Notifications'/>
        <HeaderOption avatar={true}   title="Me" onClick={logoutOfApp} />
      </div>

    </div>
    
  )
};

export default Header;