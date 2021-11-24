
const router = require('express').Router(),

UserRoutes = require('./user')
BookRoutes = require('./book')



router.use('/users',UserRoutes)
router.use('/books',BookRoutes)


module.exports =router