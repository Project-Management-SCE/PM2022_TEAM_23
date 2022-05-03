import axios from 'axios';
import React from 'react'
import UserContext from '../../UserContext';
import './Pages.css';

class MySportsmans extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            Sportsman: [],
        }
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
        this.FetchSportsmans();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='sportsmans'>
            <div className='sportsmans-container'>
                <h1>{user['firstName']} {user['lastName']} Sportsmans:</h1>
                <br/>
                {this.state.Sportsman.map(sportsman => (sportsman['sport']===user['sportKind'] && 
                    <>
                    <div>Name: {sportsman['firstName']} {sportsman['lastName']}</div>
                    <div>User Name: {sportsman['userName']}</div>
                    <div>Email: {sportsman['email']}</div>
                    <div>Born In: {sportsman['dayOfBirth']}/{sportsman['monthOfBirth']}/{sportsman['yearOfBirth']}</div>
                    <div>Height: {sportsman['height']}</div>
                    <div>Weight: {sportsman['weight']}</div>
                    <div>Phone Number: {sportsman['phoneNumber']}</div>
                    <div>Level: {sportsman['level']}</div>
                    <br/>
                    <br/>
                    </>
                ))}
            </div>
        </div>
    )
    }
}

MySportsmans.contextType = UserContext

export default MySportsmans
