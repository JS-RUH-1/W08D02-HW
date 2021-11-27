const express = require('express')
const cors = require("cors");
const app = express()
const authorRouter = require('./router/authorRouter')
const bookRoute =  require('./router/bookRoute')



app.use(express.json())
app.use(cors())
// for file in router
app.use('/authorRouter',authorRouter)
app.use('/bookRoute',bookRoute)



if (process.env.NODE_ENV !== 'production')app.set('port' ,8080)
else app.set('port',process.env.PORT || 3000)

// app.listen(8080, function () {
//     console.log('Example app listening on port 8080!')
//     })
const POTR = process.env.POTR || '8080';
app.listen(POTR, function () {
    console.log(`Example app listening on port 8080! ${POTR}`)
    })
