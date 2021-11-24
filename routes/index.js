
const router = require('express').Router(),

UserRoutes = require('./user')
BookRoutes = require('./book')
AuthorRoutes=require('./author')


router.use('/users',UserRoutes)
router.use('/books',BookRoutes)
router.use('/authors',AuthorRoutes)

module.exports =router