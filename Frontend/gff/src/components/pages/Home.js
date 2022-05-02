import React,{ useContext } from 'react'
import UserContext from '../../UserContext';
import './Pages.css';

function Home() {
  const {user, isAuthenticated, LogIn, LogOut} = useContext(UserContext);
  return (
    <div className='home'>
      <h1>{isAuthenticated? user['userName']:"Hello Guset"}</h1>
      {/* <video className='home-vid' src='/public/vid1.mp4' type='video/mp4' controls loop autoPlay muted/> */}
    </div>
  )
}

// Home.contextType = UserContext;

export default Home