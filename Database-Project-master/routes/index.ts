export const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
router.use('/api-docs', require('./swagger'))
router.use('/snack', require('./snack'))
router.get('/me', requiresAuth(), (req, res) => {
    res.json(req.oidc.user);
})

module.exports = router;