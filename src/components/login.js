import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './signup.css'
const Login = () => {
    const userdata=JSON.parse(localStorage.getItem("Users"))
    let navigate = useNavigate()
    const [userarr,setuserarr]=useState([])
    const [details,setdetails]=useState({
        email:"",
        password:""
    })

    const onChange = (e) => {
        const {value,name}=e.target;
        setdetails( ()=>{
            return{
                ...details,
                [name]:value 
            }
        })
    };
    const handle = (e) => {
        const {email,password} = details
        let temparr = userdata?.filter(e=>{return (e.email === email && e.password===password)})
        if(temparr.length!==0)
        {
            navigate("/post")
        }
    };

    return (
        <div className='container mt-5 mainstyle'>
            <section>
                <div className='left_data'>
                <div className="container shadow rounded p-3 mt-4" id='signup'>
                <h1>Login</h1>
                <form >
                   <div className="mb-3">
                        <label htmlFor="email" className="form-label mx-2">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email' name='email' onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label mx-2">Password</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Password' name='password' onChange={onChange} required minLength={7} />
                       </div>
                    <button type="submit" className="btn btn-primary" onClick={handle}>Login</button>
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