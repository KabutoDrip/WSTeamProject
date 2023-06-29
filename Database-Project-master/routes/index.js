var express = require('express');
var requiresAuth = require('express-openid-connect').requiresAuth;
var router = express.Router();
router.use('/api-docs', require('./swagger'));
router.use('/snack', require('./snack'));
router.get('/me', requiresAuth(), function (req, res) {
    res.json(req.oidc.user);
});
module.exports = router;
