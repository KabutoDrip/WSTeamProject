const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
router.use('/api-docs', require('./swagger.ts'))
router.use('/snack', require('./snack.ts'))
router.use('/driednuts', require('./driednuts.ts'))
router.use('/meats', require('./meats.ts'))
router.use('/candy', require('./candy.ts'))
router.get('/me', requiresAuth(), (req, res) => {
    res.json(req.oidc.user);
})

module.exports = router;