const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
router.use('/api-docs', require('./swagger'))
router.use('/sample1', require('./sample1'))
router.use('/sample2', require('./sample2'))
router.get('/me', requiresAuth(), (req, res) => {
    res.json(req.oidc.user);
})

module.exports = router;