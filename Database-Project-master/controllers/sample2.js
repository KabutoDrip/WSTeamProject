const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try{
  const result = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}
catch(error){
  res.status(400).json({message:error.message})
}
};

const getSingle = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  if(!userId){
    throw new Error("Please Enter a valid ID")
  }
  const result = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
}
  catch(error){
    res.status(400).json({message:error.message})
  }
};

const createSample2 = async (req, res) => {
  try{
    if(!req.body.item1 || !req.body.item2 || !req.body.item3 || !req.body.item4 || !req.body.item5 || !req.body.item6 || !req.body.item7){
      throw new Error("Please fill out all fields")
    }
  const sample = {
    item2: req.body.item1,
    item2: req.body.item2,
    item3: req.body.item3,
    item4: req.body.item4,
    item5: req.body.item5,
    item6: req.body.item6,
    item7: req.body.item7
  };
  const response = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').insertOne(sample);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
}
catch(error){
  res.status(400).json({message:error.message})
}
};

const updateSample2 = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  if(!userId){
    throw new Error("Please Enter a valid ID")
  }
  if(!req.body.item1 || !req.body.item2 || !req.body.item3 || !req.body.item4 || !req.body.item5 || !req.body.item6 || !req.body.item7){
    throw new Error("Please fill out all fields")
  }
  const sample = {
    item2: req.body.item1,
    item2: req.body.item2,
    item3: req.body.item3,
    item4: req.body.item4,
    item5: req.body.item5,
    item6: req.body.item6,
    item7: req.body.item7
  };
  const response = await mongodb
    .getDb()
    .db('CSE-341-Database')
    .collection('SampleData2')
    .replaceOne({ _id: userId }, sample);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the first sample.');
  }
}
catch(error){
  res.status(400).json({message:error.message})

}
};

const deleteSample2 = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  if(!userId){
    throw new Error("Please Enter a valid ID")
  }
  const response = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
}
  catch(error){
    res.status(400).json({message:error.message})
  }
};

module.exports = {
  getAll,
  getSingle,
  createSample2,
  updateSample2,
  deleteSample2
};