import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

const [user,setUser]=useState({
    
   
    id:"",
    password:"",
    mobno:""

  })
  const handleChange=e=>{
  
    const {name,value}=e.target;
    setUser({
        ...user,[name]:value
  })
}
  

  const signin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/Login",user)
    .then(res=>{
    // console.log(res.data);
    alert(res.data.message)
    if(res.data.message=="login suceesful"){

        navigate('/Homepage')
    }
    }
    )

  }


    return (
        <div>
            <p id="Message"> <><u>Welcome to Disconnection portal</u></> </p>
            <h1 id="head"><u>Login Page</u></h1>
            <div className="container" >
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputSapid" className="form-label">
                            SAP ID
                        </label>
                        <input type="sapid" name="id" value={user.id}
                            onChange={handleChange} className="form-control" id="inputSapid" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Password
                        </label>
                        <input type="password" name="password" value={user.password}
                            onChange={handleChange} className="form-control" id="inputPassword4" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="Mobile Number" className="form-label">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Mobile Number"
                            name='mobno'
                            value={user.mobno}  onChange={handleChange}
                        />
                    </div>

                    <div className="col-6">
                        <button type="submit" onClick= {signin} className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                    <div className="col-6">
                        <a className="btn btn-primary" href="/Signup" role="button">
                            Signup
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
