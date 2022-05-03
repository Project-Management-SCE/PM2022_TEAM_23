import axios from 'axios';
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Pages.css';

class EditSports extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {
            Sports: [],
        }
    }

    refreshPage() {
        window.location.reload(false);
      }

    async deleteSport(name)
    {
        await axios.delete(`http://localhost:8080/sports/deleteSport/${name}`).
        then(this.componentDidMount());
    }

    async FetchSports() {
        await axios.get("http://localhost:8080/sports/getSports")
        .then((res) => {
            this.setState({
                Sports: res.data
            })
        });
    }

    componentDidMount(){
        this.FetchSports();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='sports'>
            <h1>System Sports:</h1>
            <br/>
            <div className='sports-container' align="center">
                <table border="1" >
                    <tr>
                        <th><b>Name</b></th>
                        <th><b>Description</b></th>
                        <th><b>Coach</b></th>
                        <th><b>Options</b></th>
                    </tr>
                        {this.state.Sports.map(sport => (
                        <>
                        <tr>
                        <th>{sport['name']}</th>
                        <th>{sport['description']}</th>
                        <th>{sport['coach']}</th>
                        <th><button>Edit</button> <button onClick={() => this.deleteSport(sport['name']) && this.refreshPage()}>Delete</button></th>
                        </tr>
                        </> ))}
                </table>
                <br/>
                <br/>
                <br/>

                <Link to="../sportsForm" > Add Sports</Link>
            </div>

        </div>
        

    )
    }
}

EditSports.contextType = UserContext

export default EditSports