const express = require('express')
const cors = require("cors");
const app = express()
const authorRouter = require('./router/authorRouter')
const bookRoute =  require('./router/bookRoute')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');


app.use(express.json());
app.use(cookieParser());
app.use(cors())
// for file in router
app.use('/authorRouter',authorRouter)
app.use('/bookRoute',bookRoute)



// if (process.env.NODE_ENV !== 'production')app.set('port' ,8080)
// else app.set('port',process.env.PORT || 3000)

//conect db
const uri =
  "mongodb+srv://masha:mesh_r1995@masha.lhput.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// cookies

app.get('/set-cookies', (req, res) => {
  //  res.setHeader('Set-Cookie','newAuther=true')
  res.cookie('newAuther',false)
  res.cookie('isAuther',true,{maxAge:1000 * 60 * 60 * 24 , httpOnly:true})
    res.send('you got the new cookie')
})

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies
    console.log(cookies.newAuther)
    res.json(cookies)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);
const connection = mongoose.connection;
connection.once(
  "open",
  () => console.log("Connected to DB"),
  connection.on("disconnected", () => console.log("mongo disconnected")),
  connection.on("error", (err) => {
    console.log("connection error", err);
  })
);

app.get('*', checkUser);