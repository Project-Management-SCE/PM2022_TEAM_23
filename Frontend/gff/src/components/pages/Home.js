import React,{ useContext } from 'react'
import ReactPlayer from 'react-player';
import UserContext from '../../UserContext';
import './Pages.css';

function Home() {
  const {user, isAuthenticated, LogIn, LogOut} = useContext(UserContext);
  return (
    <div className='home'>
      <h1>{isAuthenticated? "Hello " + user['userName']:"Hello Guset - Watch This Video For Extra Motivation!"}</h1>
      <div className='home-video'><ReactPlayer width='1300px' height='800px' controls url='https://www.youtube.com/watch?v=ZlfKYEG-eXk'/></div>
    </div>
  )
}

export default Home