const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/login', loginController.login);
router.post('/registrar', loginController.registrar);

module.exports = router;