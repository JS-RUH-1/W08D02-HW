import React from 'react'
import {  useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"
export default function Login() {
    let [author, setAuthor] = useState();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate()
const userSignin=(e)=> { 
    e.preventDefault();
     axios.post("http://localhost:8080/authorRouter/login",{email,password}).then((res) => {
    console.log(res);
    if(res.data.error){
        alert('fals')
            }if(res.data.authorUser){
                const token = res.data.token;
                localStorage.setItem('token',token)
                alert('true') 
            }
    
    setAuthor(res.data);
    navigate('/')

});}
      
    return (
        <div>
            <form>
                 <h2> Login</h2><br/>
<hr/>
              
                <label> Author Email</label>
                <input onChange={(e)=>setEmail (e.target.value)}></input>
                <div className="email error"></div>
                <label> Author password</label>
                <input onChange={(e)=> setPassword (e.target.value)}></input>
                <div className="password error"></div>
                <button type="submit" onClick={(e)=>userSignin(e)}>submit</button>
            </form>
        </div>
    )
}
