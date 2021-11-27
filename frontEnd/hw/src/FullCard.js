import React from "react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"

export default function FullCard() {
  let { id } = useParams();
  let [author, setAuthor] = useState({});
//   const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      author: state.author.authors,
    };
  });

  //عشان تطلع النتيجة بدون ريفريش
//   const postMen = () => {
//     axios.get("http://localhost:8080/authorRouter").then((res) => {
//       setAuther(res.data);
//       dispatch(addAuthors(res.data));
//     });
//   };

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
        // postMen(); //عشان تطلع القيمة على طول بدون تحديث
      })
      .catch((error) => {
        console.log(error.response);
      });
  };


  return (
    <div className="">
      <div>
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
          <h3>{book.title}</h3>
          <p>{book.pages}</p>
          <p>{book.price}</p>
          <img src={book.image} />
        </div>
      ))}

      <form onSubmit={(e) => postMethod(e)}>
        <input placeholder="book title" />
        <input placeholder="book pages" />
        <br />
        <input placeholder="book price" />
        <br />
        <input placeholder="book image" />
        <br />
       {/* <input placeholder="author books"/><br/>  */}
        <button>Post book</button>
      </form>
      <br />
    </div>
  );
}
