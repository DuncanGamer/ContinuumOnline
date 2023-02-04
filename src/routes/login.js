const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
router.get ('/admin', loginController.getAdmin)
router.post ('/login_api', loginController.login_api)
router.post ('/register', loginController.register)

module.exports = router;