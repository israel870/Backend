const express = require('express');
const { postUser } = require('../controller/homeNest.controller');
const router = express.Router();

router.post("/postuser",postUser)


module.exports = router;