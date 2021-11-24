//index.js للتحويل بين اكثر من راوتر 

const express = require('express')
const router = express.Router(),
AuthorRoutes = require('./author'),
BookRoutes = require('./book')

// pathes to will use to call all functions routes
router.use('/authors',AuthorRoutes)
router.use('/books',BookRoutes)


//exports to use this router in application 
module.exports = router