
// router to direction all requests 

const express = require('express')
const router = express.Router(),
AuthorController = require('../controllar/author')
router.use(express.json());

//call functions from  AuthorController by use router obj.
router.get('/',AuthorController.index)
router.get('/:authid', AuthorController.show)
router.put('/:authid/update', AuthorController.update)
router.delete('/:authid/delete', AuthorController.delete)
router.post('/create',AuthorController.create)

//exports to use this router in app
module.exports = router

