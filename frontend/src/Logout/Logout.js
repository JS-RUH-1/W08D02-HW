import axios from "axios";
import React from "react";
import { useState } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const Logout = (e) => {
        e.preventDefault()
        // console.log("object");
    }

    return (
        <div>
            <button type="button" onClick={(e) => { Logout(e) }}>Log out</button>
        </div>
    )
}
export default Logout