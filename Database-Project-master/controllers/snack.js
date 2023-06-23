const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const deleteSnack = async (req, res) => {
  try{
  const snackId = new ObjectId(req.params.id);
  if(!snackId){
    throw new Error("Please Enter a valid ID")
  }
  const response = await mongodb.getDb().db('SnackAPI').collection('snack').deleteOne({ _id: snackId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
}
  catch(error){
    res.status(400).json(error.message)
  }
};

module.exports = {
  deleteSnack
};