import axios from 'axios';
import React from 'react'
import './Pages.css';

class OurCoaches extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            Coach: [],
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

    componentDidMount(){
        this.FetchCoaches();
    }

    render() {
    return (
        <div className='coaches'>
            <div className='coaches-container'>
                <h1>GoForFit Coaches:</h1>
                <br/>
                {this.state.Coach.map(coach => (
                    <>
                    <div>Name: {coach['firstName']} {coach['lastName']}</div>
                    <div>User Name: {coach['userName']}</div>
                    <div>Email: {coach['email']}</div>
                    <div>Born In: {coach['dayOfBirth']}/{coach['monthOfBirth']}/{coach['yearOfBirth']}</div>
                    <div>Height: {coach['height']}</div>
                    <div>Weight: {coach['weight']}</div>
                    <div>Phone Number: {coach['phoneNumber']}</div>
                    <div>Profession: {coach['sportKind']} Coach</div>
                    <div>License Number: {coach['licenseNumber']}</div>
                    <div>Work Place ID: {coach['workPlaceId']}</div>
                    <br/>
                    <br/>
                    </>
                ))}
            </div>
        </div>
    )
    }
}

export default OurCoaches
