import React,{ useContext } from 'react'
import ReactPlayer from 'react-player';
import UserContext from '../../UserContext';
import './Pages.css';

function Home() {
  const {user, isAuthenticated, LogIn, LogOut} = useContext(UserContext);
  return (
    <div className='home'>
      {!isAuthenticated && <h1>Hello Guset - Watch This Video For Extra Motivation!</h1>}
      {isAuthenticated && <h1>Hello {user.userName} - Get Some Extra Motivation!</h1>}
      <div className='home-video'><ReactPlayer playing={true} width='1300px' height='800px' controls url='https://www.youtube.com/watch?v=ZlfKYEG-eXk'/></div>
    </div>
  )
}

export default Home