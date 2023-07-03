const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Creating a post
const createSnack = async (req, res) => {
  try {
    const snackId = {
      snack: req.body.snack,
    };
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("snack")
      .insertOne(snackId);

    if (!response) {
      res.status(500).json({message: "Snack is not created."});
    }
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the Snack."
        );
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getAllSnacks = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('SnackAPI').collection('snack').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
  };

const getSnacksId = async (req, res) => {
  try{
    const selected = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('SnackAPI').collection('snack').find({ _id: selected });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  
  }
  };
// Delete snack
const deleteSnack = async (req, res) => {
  try {
    const snack = req.body?.snack;
    const snackId = new ObjectId(snack.id);
    const collection = snack.type;
    if (!snack) {
      res.status(400).json("No snack was sent in the request.");
      return;
    } else if (!snackId) {
      res.status(400).json("Snack must have a valid id.");
      return;
    } else if (!collection || typeof collection !== "string") {
      res
        .status(400)
        .json("Snack must have a type and the type must be a string.");
      return;
    }
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection(collection)
      .deleteOne({_id: snackId}, true);
    if (response.deletedCount > 0) {
      res.status(204).json("The snack was deleted successfully.");
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the snack."
        );
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createSnack,
  deleteSnack,
  getAllSnacks,
  getSnacksId
};
