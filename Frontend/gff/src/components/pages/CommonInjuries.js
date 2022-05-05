import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Pages.css';

class CommonInjuries extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            injuries: [],
            sportType:''
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    async FetchInjuries() {
        const {user, isAuthenticated, LogIn, LogOut} = this.context;
        if(user.type === "Sportsman")
        {
            await axios.get("http://localhost:8080/coach/getCoach")
            .then((res) => {
                res.data.map(coach => (
                    coach['sportKind']===user.sport && this.setState({injuries: coach['commonInjuries'],sportType: user.sport})
                ))
            });
        }
        else if(user.type === "Coach")
        {
            this.setState({injuries: user.commonInjuries,sportType: user.sportKind})
        }
    }

    componentDidMount(){
        this.FetchInjuries();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='injuries'>
            <h1>{this.state.sportType} Most Common Injuries:</h1>
            <br/>
            <div className='injuries-container' align="center">
                <table border="1" >
                        {this.state.injuries.map(row => (row!=null &&
                        <>
                        <tr>
                        <th>{row[0]}</th>
                        <th>{row[1]}</th>
                        <th>{row[2]}</th>
                        </tr>
                        </> ))}
                </table>
                <br/>
                <br/>
                {user.type==="Coach" &&
                <Link to="../addInjury" >Add/Update Injuries</Link>}
            </div>
        </div>
    )
    }
}

CommonInjuries.contextType = UserContext;

export default CommonInjuries;