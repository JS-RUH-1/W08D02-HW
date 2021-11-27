import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addAuthors } from "../reducers/author/author";

export default function Home() {
  const [auther, setAuther] = useState([]);
  const [autherId, setAutherId] = useState();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      author: state.author.authors,
    };
  });

  useEffect(() => {
    axios.get("http://localhost:8080/authorRouter").then((res) => {
      console.log(res.data);
      setAuther(res.data);
      dispatch(addAuthors(res.data));
    });
  }, []);

  //عشان تطلع النتيجة بدون ريفريش
  const postMen = () => {
    axios.get("http://localhost:8080/authorRouter").then((res) => {
      setAuther(res.data);
      dispatch(addAuthors(res.data));
    });
  };

  //delete
  const deleteAuther = (id) => {
    axios
      .delete(`http://localhost:8080/authorRouter/${id}`)
      .then((res) => {
        console.log(res);
        setAuther(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //add authers
  const postMethod = (e) => {
    e.preventDefault();
    const obj = {
      //حطيناها في اوبجكت عشانها اكثر من قيمة وقيمتها الاصليه اوبجكت وعشان نقدر نمر على كل المؤلفين اللي قبل ويضيف عليهم مو فوقهم
      name: e.target[0].value,
      age: parseInt(e.target[1].value),
      nationality: e.target[2].value,
      gender: e.target[3].value,
      image: e.target[4].value,
      books: [],
    };
    axios
      .post("http://localhost:8080/authorRouter", obj)
      .then((res) => {
        console.log(res);
        // setAuther(res.data)
        postMen(); //عشان تطلع القيمة على طول بدون تحديث
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const putMethod = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const objUpdate = {
      id: e.target[0].value,
      name: e.target[1].value,
      age: parseInt(e.target[2].value),
      image: e.target[3].value,
      nationality: e.target[4].value,
      gender: e.target[5].value,
      books: [e.target[6].value],
    };
    console.log(objUpdate);

    // setAuther([...auther,objUpdate])
    axios
      .put("http://localhost:8080/authorRouter", objUpdate)
      .then((res) => {
        console.log(res);
        setAuther(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <div className="card">
        {auther.map((result, index) => (
          <div key={index}>
            <div>
              <img src={result.image}></img>
              <Link to={"/FullCard/" + result._id}>User</Link>
            </div>
            <ul>
              <li>{result.name}</li>
              <li>{result.age}</li>
              <li>{result.gendar}</li>
              <li>{result.nationality}</li>
              {/* <input onChange={(e)=> setAutherDelete(e.target.value)} placeholder="Delete Author By ID"/><br/><br/> */}
              <button onClick={() => deleteAuther(result._id)}>
                Delete Author
              </button>
              <button onClick={() => setAutherId(result._id)}>
                change Author
              </button>
              {result.books.map((book, index) => (
                <div key={index}>
                  <li>{book.title}</li>
                  <li>{book.pages}</li>
                  <li>{book.price}</li>
                  <img src={book.image}></img>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="form">
        {/* <form>
      <input onChange={(e)=> setAutherDelete(e.target.value)} placeholder="Delete Author By ID"/><br/><br/>
      <button onClick={(e)=>deleteAuther(e)} >Delete Author</button>
      </form>
      <br/> */}

        <form onSubmit={(e) => postMethod(e)}>
          <input placeholder="author name" />
          <input placeholder="author age" />
          <br />
          <input placeholder="author nationality" />
          <input placeholder="author gender" />
          <br />
          <input placeholder="author image" />
          <br />
          <input placeholder="author book" />
          <br />
          <br />
          {/* <input placeholder="author books"/><br/>  */}
          <button>Post Author</button>
        </form>
        <br />

        <form onSubmit={(e) => putMethod(e)}>
          <input value={autherId} placeholder="author Id" />
          <input placeholder="author name" />
          <input placeholder="author age" />
          <br />
          <input placeholder="author nationality" />
          <input placeholder="author gender" />
          <br />
          <input placeholder="author image" />
          <br />
          <br />

          {/* <input placeholder="author books"/><br/>  */}
          <button>Change</button>
        </form>
      </div>
    </div>
  );
}
