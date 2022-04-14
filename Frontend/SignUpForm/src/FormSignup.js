import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import useForm from "./useForm";
import validate from "./validateinfo";
import './Form.css';


const FormSignup= ({submitForm}) =>{
    const{handleChange,values,handleSubmit,errors}=useForm(submitForm,validate);

    return(
        <div className='form-content-right'>
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                   Get started with us today! Create your
                   account by filling out the information below.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" 
                    className="form-label">
                        Username
                    </label>
                    <input
                        id='username'
                         type='text' 
                         name='username'
                         className='form-input'
                         placeholder="Enter your username"
                         value={values.username}
                         onChange={handleChange}
                         />
                         {errors.username && <p>{errors.username}</p>}
                </div>
                {errors.username && <p>{errors.username}</p>}
                <div className="form-inputs">
                    <label htmlFor="email" 
                    className="form-label">
                        Email
                    </label>
                        <input
                        id='email'
                         type='email' 
                         name='email'
                         className='form-input'
                         placeholder="Enter your email"
                         value={values.email}
                         onChange={handleChange}
                         />
                         {errors.email && <p>{errors.email}</p>}                         
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                        Password
                    </label>
                        <input
                        id='password'
                         type='password' 
                         name='password'
                         className='form-input'
                         placeholder="Enter your password"
                         value={values.password}
                         onChange={handleChange}                         
                         />
                         {errors.password && <p>{errors.password}</p>}                         
                         
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" 
                    className="form-label">
                        Confirm Your Password
                    </label>
                        <input
                        id='password2'
                         type='password' 
                         name='password2'
                         className='form-input'
                         placeholder="Enter your password"
                         value={values.password2}
                         onChange={handleChange}
                         />
                          {errors.password2 && <p>{errors.password2}</p>}                         
                        
                </div>
                <div className="form-inputs">
                    <label htmlFor="firstName" 
                    className="form-label">
                        First Name
                    </label>
                        <input
                        id='firstName'
                         type='firstName' 
                         name='firstName'
                         className='form-input'
                         placeholder="Enter your first Name"
                         value={values.firstName}
                         onChange={handleChange}
                         />
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastName" 
                    className="form-label">
                        Last Name
                    </label>
                        <input
                        id='lastName'
                         type='lastName' 
                         name='lastName'
                         className='form-input'
                         placeholder="Enter your last Name"
                         value={values.lastName}
                         onChange={handleChange}
                         />
                </div>
                {/* <div className="form-inputs">
                    <label htmlFor="year" 
                    className="form-label">
                         Year of birth
                    </label>
                        <input
                        id='year'
                         type='year' 
                         name='year'
                         className='form-input'
                         placeholder="Enter your year of birth"
                         />
                </div>
    
                <div className="form-inputs">
                    <label htmlFor="day" 
                    className="form-label">
                         Day of birth
                    </label>
                        <input
                        id='day'
                         type='day' 
                         name='day'
                         className='form-input'
                         placeholder="Enter your day of birth"
                         />
                </div> */}
                <div className="form-inputs">
                    <label htmlFor="dateOfBirth" 
                    className="form-label">
                         Date of birth
                    </label>
                        <input
                        id='dateOfBirth'
                         type='date' 
                         name='dateOfBirth'
                         className='form-input'
                         placeholder="Enter your date of birth"
                         value={values.dateOfBirth}
                         onChange={handleChange}
                         />
                </div>
                <div className="form-inputs">
                    <label htmlFor="height" 
                    className="form-label">
                         Height
                    </label>
                        <input
                        id='height'
                         type='height' 
                         name='height'
                         className='form-input'
                         placeholder="Enter your height"
                         value={values.height}
                         onChange={handleChange}
                         />
                </div>
                <div className="form-inputs">
                    <label htmlFor="weight" 
                    className="form-label">
                         Weight
                    </label>
                        <input
                        id='weight'
                         type='weight' 
                         name='weight'
                         className='form-input'
                         placeholder="Enter your weight"
                         value={values.weight}
                         onChange={handleChange}
                         />
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone" 
                    className="form-label">
                         Phone
                    </label>
                        <input
                        id='phone'
                         type='phone' 
                         name='phone'
                         className='form-input'
                         placeholder="Enter your phone"
                         value={values.phone}
                         onChange={handleChange}

                         />
                </div>
                
          
                <button className="form-input-btn"
                    type='submit'>
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login here! <a 
                    href="#">here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignup