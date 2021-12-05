import axios from "axios";
import React from "react";
import { useState } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Siginup = () => {
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()
      const navigate=useNavigate();

      const signupNew= (e) => {
          e.preventDefault()
          axios
          .post('http://localhost:5000/singup',{
              email:Email,
              password:Password
          })
          .then((res) => {
              console.log(res)
              navigate("/login");
            //   if (res.data.errors) {
            // }
            // if (res.data.user) {
            //   console.log(res.data)
            //   const token = res.data.token;
            //   const authorSign = jwt(token); // decode your token here
             
            //  // localStorage.setItem("token", token);
            // }
            
            }
          )
         
       }
    return (
      <div>
      <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h5 class="modal-title" id="registerModalLabel">Signup</h5>
                    
                     </div>
       <div class="modal-body">
          <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email</label>
             <input onChange = {(e)=> {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input onChange = {(e)=> {setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1"></input>
         </div>
         </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-primary" onClick = {(e)=>{signupNew(e)}}>Signup</button>
         </div>
      </div>
      </div>
      </div>
    )
}
 
export default Siginup ;