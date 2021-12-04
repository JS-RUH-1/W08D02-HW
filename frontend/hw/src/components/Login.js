import React from 'react';
import axios from 'axios';
import { useState } from "react";
import jwt from "jwt-decode";
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    let navigate = useNavigate()
    const login= (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:8080/login',{
            email:Email,
            password:Password
        })
        .then((res) => {console.log(res)
            if(res.data.errors){
            }if(res.data.user){
                const token = res.data.token
                const userSign = jwt(token)
                console.log(token)
                console.log(userSign)
                localStorage.setItem('token', token)
                navigate('/')
                alert("Loged")
            }
        })  
     }
    return (
        <div>
            <form>
                <input
                onChange={(e)=>{setEmail(e.target.value)}}
                type="text"
                name="email"
                placeholder="Enter your email" required/><br/>
                <div class="email error"></div>
                <input
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                name="password"
                placeholder="Password" required/><br/>
                <div class="password error"></div>
                <button className="button-8" onClick={(e) => login(e)}>Login</button>
            </form>
        </div>
    )
}