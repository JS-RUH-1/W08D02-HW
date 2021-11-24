// router to direction all requests 

const express = require('express')
const router = express.Router(),
BookController = require('../controllar/book')
router.use(express.json());

//call functions from  BookController by use router obj.
//call function 'index' from BookController in get fun. 
router.get('/',BookController.index)


//exports to use this router in app
module.exports = router