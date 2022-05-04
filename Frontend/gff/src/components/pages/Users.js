import axios from 'axios';
import React from 'react'
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
            <h1>System Users:</h1>
            <br/>
            <div className='users-container'>
                <h2>Coaches:</h2>
                <br/>
                {this.state.Coach.map(coach => (
                    <>
                    <div>&emsp;<b>Name: </b>{coach['firstName']} {coach['lastName']}&emsp;<b>User Name: </b>{coach['userName']}&emsp;
                    <b>Email: </b>{coach['email']}&emsp;
                    <b>License Number: </b>{coach['licenseNumber']}&emsp;
                    <b>Work Place ID: </b>{coach['workPlaceId']}</div>
                    <br/>
                    </>
                ))}
                <h2>Sportsmans:</h2>
                <br/>
                {this.state.Sportsman.map(sportsman => (
                    <>
                    <div>&emsp;<b>Name: </b>{sportsman['firstName']} {sportsman['lastName']}&emsp;<b>User Name: </b>{sportsman['userName']}&emsp;
                    <b>Email: </b>{sportsman['email']}</div>
                    <br/>
                    </>
                ))}
            </div>
        </div>
    )
    }
}

Users.contextType = UserContext

export default Users