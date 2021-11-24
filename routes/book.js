const router = require("express").Router(),

BookController = require("../controllers/book")

//display all books from routers
router.get("/",BookController.index)
//display book by id
router.get("/:uid",BookController.show)

//add new book 
router.post("/create",BookController.create)
//update book
router.put("/:uid/update",BookController.update)
// delete book
router.delete("/:uid/delete",BookController.delete)



module.exports = router