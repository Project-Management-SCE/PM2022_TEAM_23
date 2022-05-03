import React from "react";
import './Form.css';
import axios from "axios";


class SportsForm extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            Name: '',
            Description: '',
            Coach: ''
        }
    }



    render(){
        return (
            <h1>Need to check</h1>
            // <form className="form" onSubmit={(e)=>this.submit(e,this.state.Name,this.state.Description,this.state.Coach)}>
            //      <h1>
            //        Hey! Please Add Sports
            //     </h1>
            //     <div className="form-inputs">
            //         <label htmlFor="name" 
            //         className="form-label">
            //             Sports Name
            //         </label>
            //         <input
            //         value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value,
            //             errMsg:''})} type="text"
            //             id='name'
            //              name='name'
            //              className='form-input'
            //              placeholder="Enter Sports Name"
            //         />
            //     </div>
            //     <div className="form-inputs">
            //         <label htmlFor="description" 
            //         className="form-label">
            //             Description
            //         </label>
            //         <input
            //         value={this.state.Description} onChange={(e)=>this.setState({Description:e.target.value,
            //             errMsg:''})} type="text"
            //             id='description'
            //              name='description'
            //              className='form-input'
            //              placeholder="Enter Description"
            //         />
            //     </div>
            //     <div className="form-inputs">
            //         <label htmlFor="coach" 
            //         className="form-label">
            //             Coach
            //         </label>
            //         <input
            //         value={this.state.Coach} onChange={(e)=>this.setState({Coach:e.target.value,
            //             errMsg:''})} type="text"
            //             id='coach'
            //              name='coach'
            //              className='form-input'
            //              placeholder="Enter Coach"
            //         />
            //     </div>





            // </form>

        );
    }
}


export default SportsForm;