import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
function Register() {
    let [data , setdata] = useState({Name:'',Email:'',Password:'',ConfirmPassword:''})
    const changevalue = (e)=>{
        setdata({...data , [e.target.name]:e.target.value})
        console.log(data)
    }
    const Register = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5600/api/v1/postsignupdata',data).then((res)=>{
            console.log(res.data.data.newdata).catch((err)=>{
                console.log(err)
            })
        })
    }
    return (
        <div>
        <form className="form1" onSubmit = {Register}>
        <label>Name</label>
        <br></br>
        <input type = "text" name = "Name" value = {data.Name} required onChange = {changevalue}/>
        <br></br>
        <label>Email</label>
        <br></br>
        <input type = "email" name = "Email" value = {data.Email} required onChange = {changevalue}/>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type = "password" name = "Password" value = {data.Password} required onChange = {changevalue}/>
        <br></br>
        <label>Phone</label>
        <br></br>
        <input type = "Number" name = "Phone" value = {data.Phone} onChange = {changevalue}/>
        <br></br>
       <Link to = {"/"}>  <button className='button1' type = "submit" >Register</button> </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to ="/login" >Login</Link>
        </form>
            
        </div>
    )
}

export default Register