const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const createNutsDried_Fruits = async (req, res) => {

    try {
       const driedNuts = {
      maker: req.body.maker,
      name: req.body.name,
      sugar: req.body.sugar,
      calories: req.body.calories,
      ingredients: req.body.ingredients
    };
      const response = await mongodb
        .getDb()
        .db("SnackAPI")
        .collection("nuts&dried_Fruits")
        .insertOne(driedNuts);
  
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
  
module.exports = {
createNutsDried_Fruits,
getAllNutsDried_Fruits,
getNutsDried_FruitsId
}