import {express, requiresAuth, router} from './tsvars'
router.use('/api-docs', require('./swagger'))
router.use('/snack', require('./snack'))
router.get('/me', requiresAuth(), (req, res) => {
    res.json(req.oidc.user);
})

module.exports = router;