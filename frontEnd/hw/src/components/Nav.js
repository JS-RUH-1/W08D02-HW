import React from 'react'
import {Link} from 'react-router-dom'

const Logout= ()=> {
    localStorage.removeItem("token");
}
export default function Nav() {
    return (
        <div>
         <nav>
          <ul className="nav ">
    
             <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/signup">sign up</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
                <a onClick={Logout} className="Logout">Logout</a>
            </li>
          </ul>
        </nav>
        </div>
    )
}
