import React from "react";
import './Form.css';
import axios from "axios";
import UserContext from "../../UserContext";
import { Navigate } from "react-router-dom";


class UploadVideo extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            level:'Beginner',
            url: '',
            description: '',
            uploaded: false
        }
    }

    async submit(event,userName,level,url,description) {
        event.preventDefault();
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        if(!(description==='' && url==='')){
            if(level==="Beginner")
            {
                await axios.get("http://localhost:3000/coach/uploadBeginnerWeeklySessions",userName,url,description)
                .then(
                    this.setState({
                        uploaded:true
                    })
                )
            }
            else if(level==="Semi-Pro")
            {
                await axios.get("http://localhost:8080/coach/uploadSemiProWeeklySessions",userName,url,description)
                .then(
                    this.setState({
                        uploaded:true
                    })
                )
            }
            else if(level==="Professional")
            {
                await axios.post(`http://localhost:8080/coach/uploadProfessionalWeeklySessions/${userName}/${description}`,url)
                .then((res) => {
                    LogIn(res.data)
                    this.setState({
                        uploaded:true
                    })
                })
            }
        }
    }

    render(){
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        return (
            <div className='upload-vid-form-content'>
                {/* {this.state.uploaded && (<Navigate to="/coach/profile" replace={true} />)} */}
            <form className="upload-vid-form" onSubmit={(e)=>this.submit(e,user.userName,this.state.level,this.state.url,this.state.description)}>
                <h1>
                   Hey {user['userName']}! Upload Weekly Video:  
                </h1>
                <div className="form-inputs">
                    <label htmlFor="usertype" 
                    className="form-label">
                        Choose Level
                    </label>
                    <select
                        value={this.state.level} onChange={(e)=>this.setState({level:e.target.value})} type="text"
                        id='level'
                        name='level'
                        className='form-input'>
                        <option value="Beginner">Beginner</option>
                        <option value="Semi-Pro">Semi-Pro</option>
                        <option value="Professional">Professional</option>
                    </select>
                    </div>
                <div className="form-inputs">
                    <label htmlFor="usertype" 
                    className="form-label">
                        Url
                    </label>
                        <input
                        value={this.state.url} onChange={(e)=>this.setState({url:e.target.value})} type="text"
                        id='url'
                         name='url'
                         className='form-input'
                         placeholder="Url"
                    />  
                </div>  
                <div className="form-inputs">
                    <label htmlFor="usertype" 
                    className="form-label">
                        Description
                    </label>
                    <input
                    value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})} type="text"
                        id='description'
                         name='description'
                         className='form-input'
                         placeholder="Please Add A Description/Explanation"
                    />
                </div>                     
                <button className="form-input-btn"
                    type='submit'>
                    Upload
                </button>
            </form>
            </div>
        );
    }
}

UploadVideo.contextType = UserContext;

export default UploadVideo;