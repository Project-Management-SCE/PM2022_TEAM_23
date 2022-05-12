import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import UserContext from '../../UserContext';
import './Pages.css';

class CoachProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {
            Coaches: [],
        }
    }

    FetchCoaches() {
        axios.get("http://localhost:8080/coach/getCoach")
        .then((res) => {
            this.setState({
                Coaches: res.data
            })
        });
    }

    componentDidMount(){
        this.FetchCoaches();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        user['type']==="Coach" && 
        <div className='coach-private' align="center">
            <br/>
            <h1>{user.firstName}&thinsp;{user.lastName}</h1>
            <br/>
            <div className='coach-private-container' align="center">
                <div className='coach-private-details1' align="center">
                <b>User Name:</b>&thinsp;&thinsp;<p>{user.userName}</p>&emsp;
                <b>Email:</b>&thinsp;&thinsp;<p>{user.email}</p>&emsp;
                <b>Born In:</b>&thinsp;&thinsp;<p>{user.dayOfBirth}/{user.monthOfBirth}/{user.yearOfBirth}</p>&emsp;
                <b>Height:</b>&thinsp;&thinsp;<p>{user.height}&thinsp;M</p>&emsp;
                <b>Weight:</b>&thinsp;&thinsp;<p>{user.weight}&thinsp;KG</p>&emsp;</div>
                <div className='coach-private-details2' align="center">
                <b>Phone Number:</b>&thinsp;&thinsp;<p>{user.phoneNumber}</p>&emsp;
                <b>Profession:</b>&thinsp;&thinsp;<p>{user.sportKind}</p>&emsp;
                <b>License Number:</b>&thinsp;&thinsp;<p>{user.licenseNumber}</p>&emsp;
                <b>Work Place ID:</b>&thinsp;&thinsp;<p>{user.workPlaceId}</p></div>
                <br/>
                <br/>
                <div className='coach-private-videos' align="center">
                    <h1><u>My Uploads:</u></h1>
                    <br/>
                {user.weeklyMotivation!="url?" &&
                 <div className='motivation-vid'>
                    <p>Weekly Motivation:</p>
                    <br/>
                    <ReactPlayer height='600px' width='900px' controls url={user.weeklyMotivation}/>
                    <br/>
                    <br/>
                </div>}
                <table border="1">
                    <tr>
                        <th>Beginner Weekly Session</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={user.beginnerWeeklySession[0]}/></th>
                        <th><p><b>Description: </b>{user.beginnerWeeklySession[1]}</p></th>
                    </tr>
                    <tr>
                        <th>Semi-Pro Weekly Session</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={user.semiproWeeklySession[0]}/></th>
                        <th><p><b>Description: </b>{user.semiproWeeklySession[1]}</p></th>
                    </tr>
                    <tr>
                        <th>Professional Weekly Session</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={user.professionalWeeklySession[0]}/></th>
                        <th><p><b>Description: </b>{user.professionalWeeklySession[1]}</p></th>
                    </tr>
                </table>
                </div>
                <div align="center"><Link className='uploadlink' to="../coach/uploadVideo" >Upload Weekly Video</Link></div>
            </div>
        </div>
        ||
        user['type']==="Sportsman" && 
        <div className='coach-private' align="center">
            <br/>
            {this.state.Coaches.map(coach => (
            coach['sportKind']===user.sport && 
            <>
            <h1>Coach {coach['firstName']}&thinsp;{coach['lastName']}</h1>
            <br/>
            <div className='coach-private-container' align="center">
                <div className='coach-private-details1' align="center">
                <b>User Name:</b>&thinsp;&thinsp;<p>{coach['userName']}</p>&emsp;
                <b>Email:</b>&thinsp;&thinsp;<p>{coach['email']}</p>&emsp;
                <b>Born In:</b>&thinsp;&thinsp;<p>{coach['dayOfBirth']}/{coach['monthOfBirth']}/{coach['yearOfBirth']}</p>&emsp;
                <b>Height:</b>&thinsp;&thinsp;<p>{coach['height']}&thinsp;M</p>&emsp;
                <b>Weight:</b>&thinsp;&thinsp;<p>{coach['weight']}&thinsp;KG</p>&emsp;</div>
                <div className='coach-private-details2' align="center">
                <b>Phone Number:</b>&thinsp;&thinsp;<p>{coach['phoneNumber']}</p>&emsp;
                <b>Profession:</b>&thinsp;&thinsp;<p>{coach['sportKind']}</p>&emsp;
                <b>License Number:</b>&thinsp;&thinsp;<p>{coach['licenseNumber']}</p>&emsp;
                <b>Work Place ID:</b>&thinsp;&thinsp;<p>{coach['workPlaceId']}</p></div>
                <br/>
                <br/>
                {coach['weeklyMotivation']!="url?" &&
                 <div className='motivation-vid'>
                    <p>Weekly Motivation:</p>
                    <br/>
                    <ReactPlayer height='600px' width='900px' controls url={coach['weeklyMotivation']}/>
                    <br/>
                    <br/>
                </div>}
                <div className='coach-private-videos' align="center">
                    <h1><u>My {user.level} Weekly Session:</u></h1>
                    <br/>
                <table border="1">
                    {user.level === "Beginner" && 
                    <>
                    <tr>
                        <th>Hello {user.firstName}&thinsp;{user.lastName},&thinsp;Here Is Your Weekly Session!</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={coach['beginnerWeeklySession'][0]}/> Please Click <button className='doneButton'>Here</button> When You're Done</th>
                        <th><p><u>Description:</u>&thinsp;{coach['beginnerWeeklySession'][1]}</p></th>
                    </tr>
                    </>}
                    {user.level === "Semi-Pro" && 
                    <>
                    <tr>
                        <th>Hello {user.firstName}&thinsp;{user.lastName},&thinsp;Here Is Your Weekly Session! Please Click <button className='doneButton'>Here</button> When You're Done</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={coach['semiproWeeklySession'][0]}/></th>
                        <th><p><u>Description:</u>&thinsp;{coach['semiproWeeklySession'][1]}</p></th>
                    </tr>
                    </>}
                    {user.level === "Professional" && 
                    <>
                    <tr>
                        <th>Hello {user.firstName}&thinsp;{user.lastName},&thinsp;Here Is Your Weekly Session! Please Click <button className='doneButton'>Here</button> When You're Done</th>
                        <th><ReactPlayer height='600px' width='900px' controls url={coach['professionalWeeklySession'][0]}/></th>
                        <th><p><u>Description:</u>&thinsp;{coach['professionalWeeklySession'][1]}</p></th>
                    </tr>
                    </>}
                </table>
                </div>
            </div>
            </>))}
        </div>
    )
    }
}

CoachProfile.contextType = UserContext;

export default CoachProfile;