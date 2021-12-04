import Home from './components/Home';
import { useEffect } from "react";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import More from './components/moreInformation'
import "./App.css";
import NavBar from "./components/NavBar"
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moreInfo/:id" element={<More />} />
      </Routes>
    </div>

  


    // 
    /* <div className="App">
          <BrowserRouter>
            <div>
              <div className="header">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
                <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
              </div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      ); */






    // 

  );
}

export default App;
