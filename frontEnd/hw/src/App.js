import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useParams , useNavigate} from 'react-router'
// Components
import FullCard from './FullCard'
import About from './About'
import Home from './components/Home'


function App() {
  let { information } = useParams();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/FullCard/:id" element={<FullCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
