const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const createCandyPastries = async (req, res) => {
    try {
      const CandyPastries = {
        maker: req.body.maker,
        name: req.body.name,
        sugar: req.body.sugar,
        calories: req.body.calories,
        ingredients: req.body.ingredients,
        ounces: req.body.ounces,
        totalFat: req.body.totalFat
      };
      const response = await mongodb
        .getDb()
        .db("SnackAPI")
        .collection("candy&Pastries")
        .insertOne(CandyPastries);
  
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
  module.exports = {
    createCandyPastries,
    getAllCandyPastries,
    getCandyPastriesId
  }