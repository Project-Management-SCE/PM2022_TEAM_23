import axios from 'axios';
import React from 'react'
import UserContext from '../../UserContext';
import './Pages.css';

class SportsmanProfile extends React.Component {

    constructor(props){
        super(props);
        this.state =
        {
            bmi:'',
            weightFlag:0,
            weight:0
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

    async setWieght(userName,weight) {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        await axios.get(`http://localhost:8080/sportsman/updateWeight/${userName}/${weight}`)
        .then((res) => {
            LogIn(res.data)
            this.setState({
                weightFlag:0
            });
    });
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
                {this.state.weightFlag===0 &&
                <div>Weight: {user['weight']}&nbsp;<button onClick={() => this.setState({weightFlag:1})}>Update</button></div>}
                {this.state.weightFlag===1 &&
                <div><input 
                value={this.state.weight} 
                onChange={(e)=>this.setState({weight:e.target.value})} 
                type="text"
                id='weight'
                name='weight'
                placeholder="Enter your new weight"
                />&nbsp;<button onClick={() => this.setWieght(user.userName,this.state.weight)}>Submit</button></div>
                }
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