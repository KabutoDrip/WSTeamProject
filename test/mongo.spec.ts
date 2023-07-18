const {MongoClient, ObjectId} = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

describe("insert", () => {
  let connection;
  let Id;
  let meatsId;
  let candyPastriesId;
  let nutsdried_FruitsId;

  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db("snack");
  });

  beforeEach(async () => {
    const snack = db.collection("snack");

    const mockUser = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.insertOne(mockUser);

    Id = insertResult.insertedId;


    const meats = db.collection("meats");

    const mockmeats = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const meatsResults = await meats.insertOne(mockmeats);

    meatsId = meatsResults.insertedId;    

    // 

    const candyPastries = db.collection("candy&Pastries");

    const mockcandypastries = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const candypastriesResults = await candyPastries.insertOne(mockcandypastries);

    candyPastriesId = candypastriesResults.insertedId;

    // ==

    const nutsdried_Fruits = db.collection("nuts&dried_Fruits");

    const mocknutsdried_Fruits = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const nutsdriedFruitsresults = await nutsdried_Fruits.insertOne(mocknutsdried_Fruits);

    nutsdried_FruitsId = nutsdriedFruitsresults.insertedId;
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should insert a new user into the snack collection", async () => {
    const snack = db.collection("snack");

    const mockUser = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.insertOne(mockUser);
    const insertedId = insertResult.insertedId;
    const insertedUser = await snack.findOne({_id: insertedId});
    mockUser._id = insertedId;
    expect(insertedUser).toEqual(mockUser);
  });


  it("should insert a new candy&Pastries collection", async () => {
    const snack = db.collection("candy&Pastries");

    const mockUser = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.insertOne(mockUser);
    const insertedId = insertResult.insertedId;
    const insertedUser = await snack.findOne({_id: insertedId});
    mockUser._id = insertedId;
    expect(insertedUser).toEqual(mockUser);
  });

  it("should insert a new meats collection", async () => {
    const snack = db.collection("meats");

    const mockUser = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.insertOne(mockUser);
    const insertedId = insertResult.insertedId;
    const insertedUser = await snack.findOne({_id: insertedId});
    mockUser._id = insertedId;
    expect(insertedUser).toEqual(mockUser);
  });

  it("should insert a new nuts&dried_Fruits collection", async () => {
    const snack = db.collection("nuts&dried_Fruits");

    const mockUser = {
      _id: undefined,
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.insertOne(mockUser);
    const insertedId = insertResult.insertedId;
    const insertedUser = await snack.findOne({_id: insertedId});
    mockUser._id = insertedId;
    expect(insertedUser).toEqual(mockUser);
  });

  it("should update a snack collection", async () => {
    const snack = db.collection("snack");
    const idObject = new ObjectId(Id);
    const mockUser = {
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.replaceOne({_id: idObject}, mockUser);
    // console.log(insertResult);
    // expect(insertResult.insertedId).toEqual(idObject);
    expect(insertResult.modifiedCount).toBe(1);
  });

  it("should update a candy&Pastries collection", async () => {
    const snack = db.collection("candy&Pastries");
    const idObject = new ObjectId(candyPastriesId);
    const mockUser = {
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.replaceOne({_id: idObject}, mockUser);
    // console.log(insertResult);
    // expect(insertResult.insertedId).toEqual(idObject);
    expect(insertResult.modifiedCount).toBe(1);
  });

  it("should update a meats collection", async () => {
    const snack = db.collection("meats");
    const idObject = new ObjectId(meatsId);
    const mockUser = {
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.replaceOne({_id: idObject}, mockUser);
    // console.log(insertResult);
    // expect(insertResult.insertedId).toEqual(idObject);
    expect(insertResult.modifiedCount).toBe(1);
  });

  it("should update a nuts&dried_Fruits collection", async () => {
    const snack = db.collection("nuts&dried_Fruits");
    const idObject = new ObjectId(nutsdried_FruitsId);
    const mockUser = {
      type: "Candy",
      maker: "Doritos",
      name: "Cocacola",
      calories: "200",
      sugar: "20gr",
      totalFat: "200",
      ingredients: "sugar, salt",
      ounces: "10",
    };

    const insertResult = await snack.replaceOne({_id: idObject}, mockUser);
    // console.log(insertResult);
    // expect(insertResult.insertedId).toEqual(idObject);
    expect(insertResult.modifiedCount).toBe(1);
  });


  it("should delete a user from the snack collection", async () => {
    const snack = db.collection("snack");
    const deletedUser = await snack.deleteOne({id: Id});
    const deletedUserCheck = await snack.findOne({id: Id});
    expect(deletedUserCheck).toBeNull;
  });

  it("should delete a user from the candy&Pastries collection", async () => {
    const snack = db.collection("candy&Pastries");
    const deletedUser = await snack.deleteOne({id: candyPastriesId});
    const deletedUserCheck = await snack.findOne({id: candyPastriesId});
    expect(deletedUserCheck).toBeNull;
  });

  it("should delete a user from the meats collection", async () => {
    const snack = db.collection("meats");
    const deletedUser = await snack.deleteOne({id: meatsId});
    const deletedUserCheck = await snack.findOne({id: meatsId});
    expect(deletedUserCheck).toBeNull;
  });

  it("should delete a user from the nuts&dried_Fruits collection", async () => {
    const snack = db.collection("nuts&dried_Fruits");
    const deletedUser = await snack.deleteOne({id: nutsdried_FruitsId});
    const deletedUserCheck = await snack.findOne({id: nutsdried_FruitsId});
    expect(deletedUserCheck).toBeNull;
  });
});
