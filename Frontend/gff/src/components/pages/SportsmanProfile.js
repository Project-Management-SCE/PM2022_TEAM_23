import React from 'react'
import UserContext from '../../UserContext';
import './Pages.css';

class SportsmanProfile extends React.Component {

    constructor(props){
        super(props);
        this.state =
        {
            bmi:'',
        }
    }

    bmi() {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        var weight_int = parseInt(user['weight'],10);
        var height_int = parseFloat(user['height'],10);
        var bmi = weight_int/(height_int*height_int);
        console.log(weight_int);
        console.log(height_int);
        console.log(bmi);
        this.setState({bmi: String(bmi)})
    }


    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='sportsman-profile'>
            <div className='sportsman-profile-container'>
                <h1>{user['firstName']} {user['lastName']}</h1>
                <br/>
                <br/>
                <div>User Name: {user['userName']}</div>
                <br/>
                <div>Email: {user['email']}</div>
                <br/>
                <div>Born In: {user['dayOfBirth']}/{user['monthOfBirth']}/{user['yearOfBirth']}</div>
                <br/>
                <div>Height: {user['height']}</div>
                <br/>
                <div>Weight: {user['weight']}</div>
                <br/>
                <div>
                <button type='submit' onClick={() => this.bmi()}>Calc BMI:</button>
                <label>{this.state.bmi}</label>
                </div>
                <br/>
                <div>Phone Number: {user['phoneNumber']}</div>
                <br/>
                <div>Sport: {user['sport']}</div>
                <br/>
                <div>Level: {user['level']}</div>
            </div>
        </div> 
    )
    }
}

SportsmanProfile.contextType = UserContext;

export default SportsmanProfile;