import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Login() {

  const[credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate();

    const handleSubmit=async(e)=>{
    e.preventDefault();       //synthetic event
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}))

    const response=await fetch("http://localhost:5000/api/loginuser",{
        method:'POST',
        headers:{
             'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    console.log(response)
    const json=await response.json()
    console.log(json)
    if(!json.success) 
    {

          alert("Enter Valid Credentials");
    }
    if(json.success)
    {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      console.log(localStorage.getItem("userEmail"));
      navigate("/");
    }
    }
   
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return ( 
    <>
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <span htmlFor="exampleInputEmail1" className="form-label">Email address</span>
                <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" /> 
            </div>
            <div className="mb-3">   
                <span htmlFor="exampleInputPassword1" className="form-label">Password</span>
                <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}  id="exampleInputPassword1" />
            </div> 
            <button type="submit" className="btn btn-success">Submit</button>
            <Link to="/createuser" className="m-3 btn btn-danger">I am a new user</Link>
        </form>
        </div>
    </>
  )
}
