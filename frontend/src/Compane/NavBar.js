import React from "react";
import { Link } from "react-router-dom"
import Books from './Books'
import Author from "./Author";
import { useNavigate } from "react-router-dom";



function NavBAr() {

    const navigate = useNavigate();
    const getLocalStorage = localStorage.getItem("token")
    const logout=(e)=>{
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        
        <div className="aa">

            <Link to='/'>  Authors </Link>
            <Link to='/Books'> BOOKS</Link>

        {getLocalStorage ?(
        <>
        <Link to='/' onClick={(e)=>logout(e)}>log out</Link>
</>
        ) : null}

        {!getLocalStorage ?(
        <>
        <Link to='/Siginup' >Siginup</Link> 
        <Link to ='/login'>login</Link>
</>
        ) : null}


        </div>
    )
}
export default NavBAr