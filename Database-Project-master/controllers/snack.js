const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Creating a post
const createSnackId = async (req, res) => {
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

// Creating a post for candy and pastries
const createCandyPastries = async (req, res) => {
  try {
    const CandyPastriesId = {
      snack: req.body.snack,
    };
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("candy&Pastries")
      .insertOne(CandyPastriesId);

    if (!response) {
      res.status(500).json({message: "Candy and pastries is not created."});
    }
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some error occurred while creating the candy and pastries."
        );
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// Creating a post for candy and pastries
const createMeats = async (req, res) => {
  try {
    const createMeatsId = {
      snack: req.body.snack,
    };
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("meats")
      .insertOne(createMeatsId);

    if (!response) {
      res.status(500).json({message: "Meats is not created."});
    }
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the meats."
        );
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// Creating a post for nuts and dried fruits
const createNutsDried_FruitsId = async (req, res) => {
  try {
    const NutsDried_FruitsId = {
      snack: req.body.snack,
    };
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("nuts&dried_Fruits")
      .insertOne(NutsDried_FruitsId);

    if (!response) {
      res.status(500).json({message: "Nuts and dried fruits are not created."});
    }
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some error occurred while creating the nuts and dried fruits."
        );
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

//const getAll

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

const getAllCandyPastries = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('SnackAPI').collection('candy&Pastries').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
  };

const getCandyPastriesId = async (req, res) => {
  try{
    const selected = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('SnackAPI').collection('candy&Pastries').find({ _id: selected });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  
  }
  };

const getAllMeats = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('SnackAPI').collection('meats').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
  };

const getMeatsId  = async (req, res) => {
  try{
    const selected = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('SnackAPI').collection('meats').find({ _id: selected });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  
  }
  };

const getAllNutsDried_Fruits = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('SnackAPI').collection('nuts&dried_Fruits').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
  };

const getNutsDried_FruitsId = async (req, res) => {
  try{
    const selected = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('SnackAPI').collection('nuts&dried_Fruits').find({ _id: selected });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
  catch(error){
    res.status(400).json({message:error.message})
  
  }
  };

//const randomSnacks

//const randomCandyPastries

//const randomMeats

//const randomNutsDreid_Fruits




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
  createSnackId,
  deleteSnack,
  createCandyPastriesId,
  createMeatsId,
  createNutsDried_FruitsId,
  getAllSnacks,
  getAllCandyPastries,
  getAllMeats,
  getAllNutsDried_Fruits,
  getSnacksId,
  getCandyPastriesId,
  getMeatsId,
  getNutsDried_FruitsId,
};
