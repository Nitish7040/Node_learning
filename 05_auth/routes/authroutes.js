const {Router} = require('express')
const authcontroller = require('../controllers/authcontrollers')

const router = Router()

router.get('/login',authcontroller.get_login);
router.get('/signup',authcontroller.get_signup);
router.post('/login',authcontroller.post_login);
router.post('/signup',authcontroller.post_signup);


module.exports = router;