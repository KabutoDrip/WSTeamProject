const express = require('express');
const router = express.Router();
router.use('/', require('./swagger'))
router.use('/sample1', require('./sample1'))
router.use('/sample2', require('./sample2'))

module.exports = router;