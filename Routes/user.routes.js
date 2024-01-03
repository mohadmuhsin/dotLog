const expess = require('express')
const router =  expess.Router()
const userController =  require('../Controllers/user.controller')

router.post('/login',userController.login);
router.post('/register',userController.register);

module.exports = router