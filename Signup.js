import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    fname:"",
    lname:"",
    id:"",
    email:"",
    password:"",
    mobno:""

  })
  const handleChange=e=>{
    
    const {name,value}=e.target;
    setUser({
      ...user,[name]:value
    })

  }
  const register=(e)=>{
    e.preventDefault();
    const{fname,lname,id,password,email,mobno}=user;
    if(fname&&lname&&id&&password&&email&&mobno){
      
    axios.post("http://localhost:8080/Signup",user).then(res=>{console.log(res)
  });
  navigate('/')
    
    }
    else{
      alert("wrong input");
    }
  }

  return (
   

    <div>
       {console.log("user")}
      <h1 id="SignupHead"><u>Signup Page</u></h1>
      <p id="SignupMessage"> <><u>Please Fill below form to Register</u></> </p>
      

      <div id="container2">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="First Name"  className="form-label" >
              First Name
            </label>
            <input type="text" name="fname" value={user.fname}  onChange={handleChange} className="form-control" id="First Name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="Last Name"   className="form-label">
              Last Name
            </label>
            <input type="text"  name="lname" value={user.lname} onChange={handleChange} className="form-control" id="Last Name" />
          </div>
          <div className="col-6">
            <label htmlFor="SAP ID"  className="form-label">
              SAP ID
            </label>
            <input
              type="text"
              className="form-control"
              id="SAP ID"
              placeholder="12345678"
              name="id" value={user.id}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="Password"  className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="Password"
              placeholder="1234567890"
              name="password" value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email id" className="form-label">
              Email
            </label>
            <input type="email"   name="email" value={user.email} onChange={handleChange} className="form-control" id="email id" />
          </div>

          <div className="col-md-6">
            <label htmlFor="Mobile No"  className="form-label">
              Mobile No
            </label>
            <input type="mobno" name="mobno" value={user.mobno}  onChange={handleChange} className="form-control" id="Mobile No" placeholder='0123456789' />
          </div>

          <div className="col-12">
            <button type="submit" onClick={register} className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
