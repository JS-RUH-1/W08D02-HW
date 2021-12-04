// import {Carousel, Card ,Col , Button, Alert} from 'react-bootstrap'
import axios from "axios"
import {useState ,useEffect } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link,useParams } from "react-router-dom"


function More(){
        const [loading, setLoading] = useState(true);

    const {id} = useParams();
    const [author , setAuthor]=useState([]);
console.log(id)
useEffect(()=>{
        axios.get(`http://localhost:8080/api/Author/getAuthor/${id}`).then((res)=>{
         setAuthor(res.data)
         console.log(res.data)
            setLoading(false)
        })
},[])
// console.log(data)
   if (loading){
           return(
                   <div>
                   <p>loading...</p>
                   </div>
           )
   }

        return(

<div>
<h3>{author.name}</h3>
<h3>{author.age}</h3>
<h3>{author.nationality}</h3>
<img src={author.image}/>


</div>


)
        }
export default More;
