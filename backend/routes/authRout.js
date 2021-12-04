const express = require('express');
const router = express.Router();
const AuthController =require('../controllers/authorController')
router.use(express.json())



router.post('/singup' , AuthController.signup_post);


router.post('/login' , AuthController.login_post);
router.get('/logout' , AuthController.logout_get);






module.exports = router;