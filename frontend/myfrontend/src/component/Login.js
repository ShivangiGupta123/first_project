import React,{useState} from "react"
import './Signup.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Login() {
    let [data , setdata] = useState({Email:'' , Password:''})
    const changevalue = (e)=>{
        setdata({...data , [e.target.name]:e.target.value})
    }
    const Login = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5600/api/v1/login',data).then((res)=>{
            console.log(res.data.newdata).catch((err)=>{
                console.log(err)
            })
        })
    }

    return (
        <div >
        <form className ="form2" onSubmit = {Login}>
        <label>Email</label>
        <br></br>
        <input type = "email" name = "Email" value = {data.Email} required onChange = {changevalue}/>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type = "password" name = "Password" value = {data.Password} required onChange = {changevalue}/>
        <br></br>
        <Link to ={'/'}><button className = 'button1' type = "submit">Login</button></Link>
        </form>
            
        </div>
    )
}

export default Login