import axios from 'axios';
import React from 'react'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Pages.css';

class Messages extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {
            messages_fromMe:[],
            messages_toMe:[]
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    async fetchMessages_toMe()
    {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        await axios.get(`http://localhost:8080/messages/getReceiver/${user.userName}`)
        .then((res) => {this.setState({
            messages_toMe:res.data
        })})
    }

    async fetchMessages_fromMe()
    {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        await axios.get(`http://localhost:8080/messages/getSender/${user.userName}`)
        .then((res) => {this.setState({
            messages_fromMe:res.data
        })})
    }

    async deleteMessage()
    {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        await axios.delete(`http://localhost:8080/messages/deleteMessage/${user.userName}`).
        then(this.componentDidMount())
    }

    componentDidMount()
    {
        this.fetchMessages_toMe();
        this.fetchMessages_fromMe();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='messages-container' align="center">
        <div className='newMessage'>
            <Link to='/newMessage'>Send Message</Link>
        </div>
        <div className='messages-container1' align="center">
                <br/>
                <h1>Inbox</h1>
                <br/>
                {this.state.messages_toMe.map(message => (
                <>
                    <u>From: {message.from}</u>
                    <br/>
                    <br/>
                    {message.content}
                    <br />
                    <br/>
                </>))}
                <button onClick={() => this.deleteMessage()}>Empty</button>
                </div>
                <div className='messages-container2' align="center">
                <br/>
                <h1>Sent</h1>
                <br/>
                {this.state.messages_fromMe.map(message => (
                !message.to.includes("Forum")  && <>
                    <u>To: {message.to} </u>
                    <br/>
                    <br/>
                    {message.content}
                    <br/>
                    <br/>
                    <br/>
                </>))}
                </div>
    </div>
        )
    }
}

Messages.contextType = UserContext;

export default Messages;
