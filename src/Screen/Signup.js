import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {

    const[credentials,setcredentials]=useState({name:"",email:"",password:"",location:""})

    const handleSubmit=async(e)=>{
    e.preventDefault();       //synthetic event
    console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}))
    const response=await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
             'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    });
    console.log(response)
    const json=await response.json()
    console.log(json)
    if(!json.success) 
    {

          alert("Enter Valid Credentials");
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
                    <span htmlFor="exampleInputname" className="form-label">Name</span>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <span htmlFor="exampleInputEmail1" className="form-label">Email address</span>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                </div>
                <div className="mb-3">   
                    <span htmlFor="exampleInputPassword1" className="form-label">Password</span>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}  id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <span htmlFor="exampleInputAddress1" className="form-label">Address</span>
                    <input type="text" className="form-control" name='location' value={credentials.location } onChange={onChange} id="exampleInputAddress1" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className="m-3 btn btn-danger">Alredy User</Link>
            </form>
            </div>
        </>
    )
}
