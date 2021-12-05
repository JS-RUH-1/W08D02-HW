import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', {
            email: Email,
            password: Password
        })
            .then((res) => {
                // console.log(res)
                if (res.data) {
                    console.log(res.data)
                    const token = res.data;
                    localStorage.setItem("token", token);
                    navigate("/");
                }
            })
    }
    return (
        <div>
            <div>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="registerModalLabel">login</h5>

                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input onChange={(e) => { setPassword(e.target.value) }} type="password" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={(e) => { login(e) }}>login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;