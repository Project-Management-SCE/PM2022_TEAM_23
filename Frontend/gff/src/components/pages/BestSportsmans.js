import React from 'react'
import axios from 'axios';
import ReactPlayer from 'react-player';
import UserContext from '../../UserContext';
import './Pages.css';

class BestSportsmans extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sportsmans:[],
        }
    }

    async fetchSportsmans()
    {
        await axios.get("http://localhost:8080/sportsman/getSportsman")
        .then((res) => {
            this.setState({sportsmans:res.data})
        })
    }

    componentDidMount(){
        this.fetchSportsmans();
    }

    render() {
    const {user, isAuthenticated, LogIn, LogOut} = this.context;
    return (
        <div className='sportsman-workouts' align="center">
            <br/>
            <h1>Best Sportsmans:</h1>
            <br/>
            <div className='best-sportsmans-container' align="center">
                {this.state.sportsmans.sort((a,b) => {
                                                        if (a.doneWorkouts.length < b.doneWorkouts.length) {
                                                            return 1;
                                                        } else if (b.doneWorkouts.length < a.doneWorkouts.length) {
                                                            return -1;
                                                        } else {
                                                            return 0;
                                                        }
                                                    })
                    .map(
                    sportsman => (
                        <h2>{sportsman.userName} Completed {sportsman.doneWorkouts.length} Workouts</h2>
                    )
                )}
            </div>
        </div>
        )
    }
}

BestSportsmans.contextType = UserContext;

export default BestSportsmans;