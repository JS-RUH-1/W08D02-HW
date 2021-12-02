import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useParams , useNavigate} from 'react-router'
// Components
import FullCard from './FullCard'
import About from './About'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Nav from './components/Nav'


function App() {
  let { information } = useParams();

  return (
    <div className="App">
    <Nav/>
      <Routes>
        
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/FullCard/:id" element={<FullCard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
