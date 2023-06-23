const express = require('express');
const { deleteSnack } = require('../controllers/snack.js');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

router.get('/', requiresAuth(), (req, res) => res.json("got all"));
router.get('/:id', requiresAuth(), (req, res) => res.json("got snack"));
router.get('/random', requiresAuth(), (req, res) => res.json("got random"));
router.post('/:id', requiresAuth(), (req, res) => res.json("inserted that"));
router.put('/:id', requiresAuth(), (req, res) => res.json("edited that"));
router.delete('/:id',requiresAuth(), deleteSnack);

module.exports = router;
