import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Pages.css';

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {
            Coach: [],
            Sportsman: [],
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    async deleteCoach(userName)
    {
        await axios.delete(`http://localhost:8080/coach/deleteCoach/${userName}`).
        then(this.componentDidMount());
    }
    async deleteSportsman(userName)
    {
        await axios.delete(`http://localhost:8080/sportsman/deleteSportsman/${userName}`).
        then(this.componentDidMount());
    }


    FetchCoaches() {
        axios.get("http://localhost:8080/coach/getCoach")
        .then((res) => {
            this.setState({
                Coach: res.data
            })
        });
    }

    FetchSportsmans() {
        axios.get("http://localhost:8080/sportsman/getSportsman")
        .then((res) => {
            this.setState({
                Sportsman: res.data
            })
        });
    }

    componentDidMount(){
        this.FetchCoaches();
        this.FetchSportsmans();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='users'>
            <h1 align="center"><u>System Users:</u></h1>
            <br/>
            <div className='users-container' align="center">
                <h2 align="center">Coaches:</h2>
                <br/>
                <table border="1">
                    <tr>
                        <th>Name:</th>
                        <th>User Name:  </th>
                        <th>Email:</th>
                        <th>License Number:</th>
                        <th>Work Place ID:</th>
                        <th>Options</th>

                    </tr>
                    {this.state.Coach.map(coach => (
                    <>
                    <tr>
                    
                    <th>{coach['firstName']} {coach['lastName']}</th>
                    <th>{coach['userName']}</th>
                    <th>{coach['email']}</th>
                    <th>{coach['licenseNumber']}</th>
                    <th>{coach['workPlaceId']}</th>
                    <th><button onClick={() => this.deleteCoach(coach['userName']) && this.refreshPage()}>Delete</button></th>
                    </tr>
                    </> ))}

                   
               
                </table>
                
                <br/><br/>
                <h2 align="center">Sportsman:</h2>
                <table border="1">
                    <tr>
                        <th>Name:</th>
                        <th>User Name:  </th>
                        <th>Email:</th>
                        <th>Options</th>
                    </tr>
                    {this.state.Sportsman.map(sportsman => (
                    <>
                    <tr>
                    
                    <th>{sportsman['firstName']} {sportsman['lastName']}</th>
                    <th>{sportsman['userName']}</th>
                    <th>{sportsman['email']}</th>
                    <th><button onClick={() => this.deleteSportsman(sportsman['userName']) && this.refreshPage()}>Delete</button></th>

                    </tr>
                    </> ))}

                   
               
                </table>
                <br/>
                <br/>
                <br/>

                <Link to="../addCoach" >Add New Coach</Link>&emsp;&emsp;
                <Link to="../addSportsman" >Add New Sportsman</Link>&emsp;&emsp;               
            </div>
        </div>
    )
    }
}

Users.contextType = UserContext

export default Users