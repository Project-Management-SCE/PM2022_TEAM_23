import React from "react";
import './Form.css';
import axios from "axios";

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            Admin: [],
            Coach: [],
            Sportsman: [],
            loggedUser: [],
            userType: 0,
            userName: '',
            password: '',
            login: false
        }
    }

    componentDidMount()
    {
        this.getAdmin();
        this.getCoach();
        this.getSportsman();
    }

    getAdmin = async() => {
        await axios.get("http://localhost:8080/admin/getAdmin")
        .then(res => {
            this.setState({
                Admin:res.data
            })
        })
    }

    getCoach = async() => {
        await axios.get("http://localhost:8080/coach/getCoach")
        .then(res => {
            this.setState({
                Coach:res.data
            })
        })
    }

    getSportsman = async() => {
        await axios.get("http://localhost:8080/sportsman/getSportsman")
        .then(res => {
            this.setState({
                Sportsman:res.data
            })
        })
    }

    submit(event,userName){
        event.preventDefault();
        if(!(userName==='')){
                if(this.state.userType===0)
                {
                    this.state.Admin.forEach(admin => {
                        if(admin.userName === this.state.userName && admin.password === this.state.password)
                        {
                            this.setState({
                                loggedUser: admin,
                                login: true
                            })
                        }
                    })
                }
                else if(this.state.userType===1)
                {
                    this.state.Coach.forEach(coach => {
                        if(coach.userName === this.state.userName && coach.password === this.state.password)
                        {
                            this.setState({
                                loggedUser: coach,
                                login: true
                            })
                        }
                    })
                }
                else if(this.state.userType===2)
                {
                    this.state.Sportsman.forEach(sportsman => {
                        if(sportsman.userName === this.state.userName && sportsman.password === this.state.password)
                        {
                            this.setState({
                                loggedUser: sportsman,
                                login: true
                            })
                        }
                    })
                }
        }
    }

    render(){
        return (
            <div className='form-content'>
            <form className="form" onSubmit={(e)=>this.submit(e,this.state.userName)}>
                <div className="logImg" />
                <h1>
                   Hey! Login to GoForFit
                </h1>
                <div className="form-inputs">
                    <label htmlFor="usertype" 
                    className="form-label">
                        User Type
                    </label>
                    <select
                    value={this.state.userType} onChange={(e)=>this.setState({userType:e.target.value})} type="text"
                        id='usertype'
                         name='usertype'
                         className='form-input'
                         placeholder="Choose Type"
                    >
                        <option value={0}>Admin</option>
                        <option value={1}>Coach</option>
                        <option value={2}>Sportsman</option>
                    </select>
                    </div>
                <div className="form-inputs">
                    <label htmlFor="username" 
                    className="form-label">
                        Username
                    </label>
                    <input
                    value={this.state.userName} onChange={(e)=>this.setState({userName:e.target.value})} type="text"
                        id='username'
                         name='username'
                         className='form-input'
                         placeholder="Enter your username"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                        Password
                    </label>
                        <input
                        value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} type="password"
                        id='password'
                         name='password'
                         className='form-input'
                         placeholder="Enter your password"
                    />  
                </div>                       
                <button className="form-input-btn"
                    type='submit'>
                    Login
                </button>
            </form>
            </div>
        );
    }
}

export default LoginForm;