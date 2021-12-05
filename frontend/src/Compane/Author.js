import { useEffect, useState } from "react";
import axios from "axios"
import './style.css'
import jwt_decode from 'jwt-decode'
import { Link } from "react-router-dom";



function Author() {
    const [saveAuthor, setSaveAuthor] = useState([])
    const [Author, setAuthor] = useState()
    const [Age, setAge] = useState()
    const [Imagei, setImagei] = useState()
    const [Gender, setGender] = useState()
    const [Nationality, setNationality] = useState()

    const getLocalStorage = localStorage.getItem("token")
    // let value = ''
    // if(getLocalStorage) {
    //     value = jwt_decode(getLocalStorage)
    // }
    // console.log(value);
    
    useEffect(() => {
        axios.get("http://localhost:5000/app/author/getauthor")
            .then((res) => {
                setSaveAuthor(res.data)
                console.log(res.data)
            })

    }, [])

    async function getInfo(e, id) {
        e.preventDefault()
        await axios.get(`http://localhost:5000/app/author/Author/${id}`)
            .then((res) => {
                // console.log(res)
            })
    }

    async function addAuthor(e) {
        e.preventDefault()
        let newAuthor = {
            name: Author,
            age: Age,
            nationality: Nationality,
            image: Imagei,
            gender: Gender
        }

        await axios.post("http://localhost:5000/app/author/new", newAuthor)
            .then((res) => {
                setSaveAuthor(saveAuthor.concat(newAuthor))
            })

    }

    function DeleteAuthor(e, id) {
        e.preventDefault()
        axios.delete(`http://localhost:5000/app/author/deleteAuthor/${id}`)
            .then((res) => {
                // console.log(res.data)
                setSaveAuthor(res.data)

            })
        // window.location.reload()
    }






    return (

        <>

            <form className="form" onSubmit={addAuthor}>
                <input type='text' onChange={(e) => setAuthor(e.target.value)} placeholder="Author Name:"></input><br />
                <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="Age :"></input><br />
                <input type="text" onChange={(e) => setNationality(e.target.value)} placeholder="Nationality :"></input><br />
                <input type="text" onChange={(e) => setImagei(e.target.value)} placeholder="Image :"></input><br />
                <input type="text" onChange={(e) => setGender(e.target.value)} placeholder="Gender :"></input><br />
                {<button style={{ backgroundColor: "blue", color: "White" }} type="submit">Add</button>}
            </form>

            <div className="big">

                {
                    saveAuthor.map((element) => {
                        return (
                            <div className="card">
                                <button onClick={(e) => getInfo(e, element._id)}>
                                    <Link to={`/singleAuthor/${element._id}`}><img src={element.image} width={200} /></Link>
                                </button>
                                <br></br>
                                
                                {getLocalStorage && <button onClick={(e) => DeleteAuthor(e, element._id)} className ="but"> Delete Author</button>}
                                
                                <h3>{element.name}</h3>
                            </div>
                        )

                    })
                }


            </div>

        </>


    )

}

export default Author