import { useLocation } from "react-router";
import axios from "axios"
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router";


const MoreInfo = () => {

    const location = useLocation()
    const {id} = useParams()
    // const path = location.pathname.split("/")[2]
    const [autherBook, setAutherBook]=useState()
    const [loding , setLoding]=useState(true)
    const [detail , setDetail]=useState([])
    const [enableEdit,setEnabeEdit] = useState(false)
    const [idEdit,setIdEdit] = useState()



    let decodedData ;
    const storedToken = localStorage.getItem("token");
    if (storedToken){
        decodedData = jwt_decode(storedToken, { payload: true });
        console.log(decodedData);
        let expirationDate = decodedData.exp;
        var current_time = Date.now() / 1000;
        if(expirationDate < current_time)
        {
            localStorage.removeItem("token");
        }
   }

   const AddBook = (e) => {
    e.preventDefault()
        axios.post(`http://localhost:5000/app/author/createBook/${id}`,{
            data:{
                title: e.target.form[0].value,
                pages: e.target.form[1].value,
                price:e.target.form[2].value,
                image: e.target.form[3].value,
            }
        }
        
     ) .then((res) => {
                console.log(res.data)
                setDetail(res.data)
            })}

            // Delete Book
       const deleteBook = (e,_id) => {
        e.preventDefault()
        console.log(_id)
        axios.delete(`http://localhost:5000/app/author/deleteBook/${id}/${_id}`).then((response) => {
        console.log(" deleted: ", response)
        setDetail(response.data);
    })
   }

// Update Author
function editAuthor(e,_id){
    console.log(_id);
    setIdEdit(_id)
    setEnabeEdit(true)
  }
  function saveEditAuthor(e){
        e.preventDefault()
        console.log(e.target.form[0].value)
        console.log(e.target.form[1].value)
        console.log(e.target.form[2].value)
        console.log(e.target.form[3].value)
        console.log(e.target.form[4].value)
      axios.put(`http://localhost:5000/app/author/updateAuther/${id}`,
         { data :
            {
            name:e.target.form[0].value ,
            age:e.target.form[1].value,
            nationality:e.target.form[2].value,
            image: e.target.form[3].value,
            gender: e.target.form[4].value
            }
         })
            .then((response) => {
            console.log("Updated",response.data);
            setDetail(response.data);
        });
        setEnabeEdit(false)
  }

   // More Details
   useEffect (()=> {
       console.log(id)
    axios.get(`http://localhost:5000/app/author/getauthor/${id}`)
    .then((response) => {
    console.log(response.data);
    setDetail([response.data]);
    setLoding(false)
})
}, []);


    if (loding){
            return (
                <p>loading...</p>
            )
        }

        const decode = (id) => {
            if (decodedData != undefined){
                if (decodedData.id == id){
                    return (
                        <div>
                        <button style = {{backgroundColor: "purple" ,color: "White"}}
                            onClick={(e) =>{deleteBook(e,id)}}>Delete</button>
                        </div>
                    )
                }
            }
        }
        const decode1 = () => {
            if (decodedData != undefined){
                if (decodedData.id == id){
                    return (
                        <div>
                        <button style = {{backgroundColor: "black" ,color: "White"}} type="submit"
                            onClick= {(e)=>AddBook(e)}>Add</button><br/><br/>
                        </div>
                    )
                }
            }
        }
        const decode2 = () => {
            if (decodedData != undefined){
                if (decodedData.id == id){
                    return (
                        <div>
                          <button style = {{backgroundColor: "gray" ,color: "White"}} onClick={(e) =>
                                        {editAuthor(e,id)}}>Edit</button>
                        </div>
                    )
                }
            }
        }

        //كل شخص يعدل على ملفه 
            return(
                <div>
                    <br/><br/><h5> More Details </h5><br/><br/>
                    {detail.map((el)=>(
            <div class="card text-center col-5 mx-auto m-3">
                 <div class="card-header">
                  <img className = "auth" src= {el.image} height = {200} width = {200}></img><br/>
                </div>
             <div class="card-body">
                <br/><p class="card-text">Name : {el.name}</p>
                <p class="card-text">Nationality : {el.nationality}</p>
                <p class="card-text">Age : {el.age}</p>
                <p class="card-text">Gender : {el.gender}</p>
            
             </div>

             
                </div>
                ))}
                </div>
            )
}
export default MoreInfo;