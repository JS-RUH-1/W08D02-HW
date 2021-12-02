import React from 'react'
import {  useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"
export default function Signup() {
    let [author, setAuthor] = useState();
    let [name, setName] = useState('');
    let [nationality, setNationality] = useState('');
    let [image, setImage] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate()
const userSignup=(e)=> { 
    e.preventDefault();
     axios.post("http://localhost:8080/authorRouter/signup",{name,nationality,image,email,password}).then((res) => {
         console.log(res)
        if(res.data.error){
            alert('fals')
                }if(res.data.authorUser){
                    const token = res.data.token;
                    localStorage.setItem('token',token)

                    alert(`welcom ${res.data.authorUser.name}`) 
                }
    console.log(res.data);
    setAuthor(res.data);
    navigate('/')
 

});}
      
    return (
        <div>
            <form>
                 <h2> Signup</h2><br/>
<hr/>
                <label> Author Name</label>
                <input onChange={(e)=>{setName(e.target.value)}}></input>
                <label> Author nationality</label>
                <input onChange={(e)=>{setNationality(e.target.value)}}></input>
                <label> Author Emag</label>
                <input onChange={(e)=> setImage(e.target.value)}></input>
                <label> Author Email</label>
                <input onChange={(e)=>setEmail (e.target.value)}></input>
                <div className="email error"></div>
                <label> Author password</label>
                <input onChange={(e)=> setPassword (e.target.value)}></input>
                <div className="password error"></div>
                <button type="submit" onClick={(e)=>userSignup(e)}>submit</button>
            </form>
        </div>
    )
}
