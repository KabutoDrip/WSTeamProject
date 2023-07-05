const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const createMeats = async (req, res) => {
    try {
      const meats = {
        maker: req.body.maker,
        name: req.body.name,
        sugar: req.body.sugar,
        calories: req.body.calories,
        ingredients: req.body.ingredients
      };
      const response = await mongodb
        .getDb()
        .db("SnackAPI")
        .collection("meats")
        .insertOne(meats);
  
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
  
    module.exports = {
        createMeats,
        getAllMeats,
        getMeatsId
    }