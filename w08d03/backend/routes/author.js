
// router to direction all requests 

const express = require('express')
const router = express.Router(),
AuthorController = require('../controllar/author')

//call functions from  AuthorController by use router obj.
//call function 'index' from AuthorController in get fun. 
router.get('/',AuthorController.index)


//exports to use this router in app
module.exports = router

