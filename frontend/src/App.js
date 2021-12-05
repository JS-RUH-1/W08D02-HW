import React from "react";
import NavBAr from "./Compane/NavBar";
import { Routes, Route } from "react-router-dom"
import Books from './Compane/Books'
import Author from "./Compane/Author";
import Siginup from './Home/Siginup';
import Login from "./login/Login";
import All_info from './Compane/All_Info'
// import Logout from "./Logout/Logout";


function App() {

  const getLocalStorage = localStorage.getItem("token")
  return (
    <div className="App">

      <NavBAr />

      <Routes>
        <Route path='/' element={<Author />} />
        <Route path='/Books' element={getLocalStorage ? <Books /> : null} />
        <Route path='/singleAuthor/:id' element={<All_info />} />
        <Route path='/Siginup' element={<Siginup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/logout' element={<Logout /> */}
      </Routes>

    </div>
  );
}

export default App;
