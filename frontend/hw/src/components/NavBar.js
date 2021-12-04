import '../App.css';
import { Navbar ,Container, Nav} from 'react-bootstrap';
import { Link ,useNavigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Signup from './SignUp'



function NavBar(){
let navigate = useNavigate()
    const logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem("token")
        navigate('/')


    }
    return(
        <div>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/"> Library</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link><Link to="/" >Home</Link></Nav.Link>
    <Nav.Link><Link to="/Logout"><button onClick={(e)=>{logout(e)}}>Logout</button></Link></Nav.Link>
            <Nav.Link><Link to ="/Login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/signup">signup</Link></Nav.Link>

    </Nav>
    </Container>
    </Navbar>
        </div>
    )

}
export default NavBar;