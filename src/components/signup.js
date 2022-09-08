import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './signup.css'


const Login = () => {
    
    let navigate=useNavigate()
    const [userarr,setuserarr]=useState([])
    const [details,setdetails]=useState({
        email:"",
        password:"",
        cpassword:""
    })


    

    const handleChange = (e) => {
        const value = e.target.value;
    setdetails({
      ...details,
      [e.target.name]: value,
    });
    };
    const handle=(e)=>{
        // const {email,password,confirmpass}=details
        if(details.cpassword!==details.password)
        {
            alert("Check Password")
        }
        else{
            localStorage.setItem("Users",JSON.stringify([...userarr,details]))
        setuserarr(details)
        navigate("/login")
        }
        
    }

    return (
        <div className='container mt-5 mainstyle' >
            <section>
                <div className='left_data'>
                <div className="container shadow rounded p-3 mt-4" id='signup'>
                <h1>Sign-Up Form</h1>
                <form>
                   <div className="mb-3">
                        <label htmlFor="email" className="form-label mx-2">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email' name='email' onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label mx-2">Password</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Password' name='password' onChange={handleChange} required minLength={7} />
                       </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label mx-2">Confirm Password</label>
                        <input type="password" id="cpassword" className="form-control" aria-describedby="cpasswordHelpBlock" placeholder='Confirm Password' name='cpassword' onChange={handleChange} required minLength={7} />
                    </div>
                    <button className="btn btn-primary " onClick={handle}>SignUp</button>
                </form>
            </div>
                </div>
                <div className='right_data'>

                </div>
            </section>

        </div>
    )
}

export default Login