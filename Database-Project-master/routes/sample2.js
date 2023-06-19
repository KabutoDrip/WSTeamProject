const express = require('express');

const sample2Controller = require('../controllers/sample2.js');

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
router.get('/', sample2Controller.getAll);

router.get('/:id', sample2Controller.getSingle);

router.post('/', authenticate, /*validation.saveSample,*/ sample2Controller.createSample2);

router.put('/:id', authenticate, /*validation.saveSample,*/ sample2Controller.updateSample2);

router.delete('/:id', authenticate, sample2Controller.deleteSample2);

// localhost:3001/contacts/
module.exports = router;
