import React from "react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode"
import axios from "axios"

export default function FullCard() {
  let { id } = useParams();
  let [author, setAuthor] = useState({});

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
//   const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      author: state.author.authors,
    };
  });

  useEffect(() => {
    setAuthor(state.author.find((x) => x._id === id));
  }, []);

//   ADD A BOOK TO THIS AUTHOR
  const postMethod = (e) => {
    e.preventDefault();
      console.log(e)
    const obj = {
      //حطيناها في اوبجكت عشانها اكثر من قيمة وقيمتها الاصليه اوبجكت وعشان نقدر نمر على كل المؤلفين اللي قبل ويضيف عليهم مو فوقهم
      title: e.target[0].value,
      pages: parseInt(e.target[1].value),
      price:parseInt(e.target[2].value),
      image: e.target[3].value,
    };
    axios
      .post(`http://localhost:8080/authorRouter/book/${id}`, obj)
      .then((res) => {
        console.log(res);
        setAuthor(res.data)
      })
      .catch((error) => {
        console.log(error.response);
      });
  };


  return (
    <div className="fullcard-container">
      <div className="fullcard-container">
        <h1>{author.name}</h1>
        <img src={author.image}></img>
      </div>

      <div>
        <ul>
          <li>{author.age}</li>
          <li>{author.gender}</li>
          <li>{author.nationality}</li>
        </ul>
      </div>

      {author.books?.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <p>{book.pages}</p>
          <p>{book.price}</p>
          <img src={book.image} />
        </div>
      ))}
 
 {(function(){
   if(decodedData!=undefined){
     console.log(decodedData)
     console.log(decodedData.id)
     console.log(id)
     if(decodedData.id==id){
       return(   
         <form className="fullcard-container" onSubmit={(e) => postMethod(e)}>
        <input placeholder="book title" />
        <br />
        <input placeholder="book pages" />
        <br />
        <input placeholder="book price" />
        <br />
        <input placeholder="book image" />
        <br />
        <button>Post book</button>
      </form>
      )
     }
   }
 })()}

    </div>
  );
}
