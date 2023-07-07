const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const validCollection = require("../helpers/validCollection");

// Creating a post
const createSnack = async (req, res) => {
  try {
    const snack = {
      maker: req.body.maker,
      name: req.body.name,
      ounces: req.body.ounces,
      calories: req.body.calories,
      sugar: req.body.sugar,
      totalFat: req.body.totalFat,
      ingredients: req.body.ingredients,
      ounces: req.body.ounces,
      totalFat: req.body.totalFat,
    };
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("snack")
      .insertOne(snack);

    if (!response) {
      res.status(500).json({ message: "Snack is not created." });
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
    res.status(400).json({ message: error.message });
  }
};

const getAllSnacks = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("snack")
      .find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSnacksId = async (req, res) => {
  try {
    const selected = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection("snack")
      .find({ _id: selected });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Edit snack
const editSnack = async (req, res) => {
  try {
    const collection = req.body?.type;
    const snackId = new ObjectId(req.params.id);
    if (!req.body) {
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
    const { valid, collections } = validCollection(collection);
    if (!valid) {
      res
        .status(400)
        .json(
          `That is not a valid collection. Snack type must be one of the following: ${collections.toString()}`
        );
      return;
    }
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection(collection)
      .replaceOne({ _id: snackId }, req.body);
    if (response.acknowledged) {
      res
        .status(204)
        .json({ message: "Snack was updated successfully", response }); //needs fixing
    } else {
      res
        .status(500)
        .json(response || "Some error occurred while updating the snack.");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// Delete snack
const deleteSnack = async (req, res) => {
  try {
    const collection = req.body?.type;
    const snackId = new ObjectId(req.params.id);
    if (!req.body) {
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
    const { valid, collections } = validCollection(collection);
    if (!valid) {
      res
        .status(400)
        .json(
          `That is not a valid collection. Snack type must be one of the following: ${collections.toString()}`
        );
      return;
    }
    const response = await mongodb
      .getDb()
      .db("SnackAPI")
      .collection(collection)
      .deleteOne({ _id: snackId }, true);
    if (response.deletedCount > 0) {
      res
        .status(204)
        .json({ message: "The snack was deleted successfully.", response });
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the snack."
        );
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createSnack,
  editSnack,
  deleteSnack,
  getAllSnacks,
  getSnacksId,
};
