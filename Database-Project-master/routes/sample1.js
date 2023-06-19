const express = require('express');

const sample1Controller = require('../controllers/sample1.js');

const router = express.Router();

const authenticate = (req, res, next)=> {
    try{
        if(req.session.token){
            next()
        }
        else{
            throw new Error("Please Login") 
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}
//const validation = require('../middleware/validate');

// GET /feed/posts
router.get('/', sample1Controller.getAll);

router.get('/:id', sample1Controller.getSingle);

router.post('/', authenticate, /*validation.saveSample,*/ sample1Controller.createSample1);

router.put('/:id',authenticate, /*validation.saveSample,*/ sample1Controller.updateSample1);

router.delete('/:id',authenticate, sample1Controller.deleteSample1);

// localhost:3001/contacts/
module.exports = router;
