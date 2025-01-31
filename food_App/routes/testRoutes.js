const express = require('express')
const { testUserController } = require('../controllers/testController')
const { myUserController } = require('../controllers/testController')

// router object
const router = express.Router()

// routes GET | POST | UPDATE | DELETE

router.get('/test-user', testUserController)
router.get('/newuser', myUserController)

module.exports = router