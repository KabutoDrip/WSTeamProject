import {express, requiresAuth, router, deleteSnack} from './tsvars'


router.get('/', requiresAuth(), (req, res) => res.json("got all"));
router.get('/:id', requiresAuth(), (req, res) => res.json("got snack"));
router.get('/random', requiresAuth(), (req, res) => res.json("got random"));
router.post('/', requiresAuth(), (req, res) => res.json("inserted that"));
router.put('/', requiresAuth(), (req, res) => res.json("edited that"));
router.delete('/',requiresAuth(), deleteSnack);

module.exports = router;
