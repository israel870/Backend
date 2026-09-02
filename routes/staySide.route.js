const express = require('express');
const { postUser } = require('../controller/staySide.controller');
const router = express.Router();

router.post("/postuser",postUser)


module.exports = router;