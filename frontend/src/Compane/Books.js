import axios from 'axios';
import { useEffect, useState } from "react";


export default function Book() {


    const [Book, setBook] = useState([]);
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()


    useEffect(() => {
        axios.get('http://localhost:5000/app/book/getBook')
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            });
    }, [Book]);

    // Add Book

    const addBook = (e) => {
        e.preventDefault()
        // console.log(e.target.form[0].value)
        axios.post("http://localhost:5000/app/book/newBook", {
            data: {
                title: e.target.form[0].value,
                pages: e.target.form[1].value,
                price: e.target.form[2].value,
                image: e.target.form[3].value,
            }
        }
        ).then(
            (response) => {
                console.log("Add Book", response.data);
                setBook(response.data);
            })
    }

    // Update


    function editBook(e, _id) {
        console.log(_id);
        // e.preventDefault()
        setIdEdit(_id)
        setEnabeEdit(true)
    }

    function saveEditAuthor(e) {
        e.preventDefault()
        console.log(e.target.form[0].value)
        console.log(e.target.form[1].value)
        console.log(e.target.form[2].value)
        console.log(e.target.form[3].value)
        axios.put(`http://localhost:5000/app/book/${idEdit}`,
            {
                data:
                {
                    title: e.target.form[0].value,
                    pages: e.target.form[1].value,
                    price: e.target.form[2].value,
                    image: e.target.form[3].value,
                }
            })
            .then((response) => {
                console.log("Updated", response.data);
                setBook(response.data);
            });
        setEnabeEdit(false)

    }

    // Delete

    const deleteBook = (e, _id) => {
        e.preventDefault()
        console.log(_id)
        axios.delete(`http://localhost:5000/app/book/deleteBook/${_id}`).then((response) => {
            console.log(" deleted: ", response.data)
            setBook(response.data);

        })
    }

    return (
        <div>


            <br /><br /><h2>Welcome To Author Page </h2>


            <br /><br /> <h5>Add Book:</h5> <br /><br />


            <form>

                <input placeholder="Book Name :"></input><br />
                <input placeholder="Pages :"></input><br />
                <input placeholder="Price :"></input><br />
                <input placeholder="Image :"></input><br />
                <br /><br /><button style={{ backgroundColor: "black", color: "White" }} type="submit"
                    onClick={(e) => addBook(e)}>Add</button><br /><br />

            </form>

            {(function () {

                if (enableEdit == true) {
                    return (
                        <div>
                            <form>
                                <input placeholder="Title"></input><br />
                                <input placeholder="Pages"></input><br />
                                <input placeholder="Price"></input><br />
                                <input placeholder="image"></input><br />
                                <br /><br /><button style={{ backgroundColor: "black", color: "White" }}
                                    onClick={(e) => { saveEditAuthor(e) }} >save</button><br /><br />
                            </form>
                        </div>
                    )
                }
            })()}


            {Book.map((element) => {
                return (
                    <div className="author">
                        <div class="card text-center col-5 mx-auto m-3">
                            <div class="card-header">
                                <img className="auth" src={element.image} height={200} width={200}></img>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Title : {element.title}</p>
                                <p class="card-text">Pages : {element.pages}</p>
                                <p class="card-text">Price : {element.price}</p>
                            </div>
                        </div>
                        <br /><button style={{ backgroundColor: "purple", color: "White" }} onClick={(e) => { deleteBook(e, element._id) }}>Delete</button>
                        <button style={{ backgroundColor: "gray", color: "White" }} onClick={(e) => { editBook(e, element._id) }}>Edit</button>
                        <hr /><br /><br />
                    </div>
                )
            })
            }
            {console.log(Book)}

        </div>
    )
}