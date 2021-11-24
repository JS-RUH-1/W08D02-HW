const router = require('express').Router(),
AuthorController = require("../controllers/author")

router.get("/",AuthorController.index)
router.get("/:uid",AuthorController.show)
router.post("/create",AuthorController.create)
router.put("/:uid/update",AuthorController.update)
router.delete("/:uid/delete",AuthorController.delete)

module.exports =router