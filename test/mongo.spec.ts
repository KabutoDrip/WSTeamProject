const {MongoClient} = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

describe("insert", () => {
  let connection;

  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db("snack");
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should insert a new user into the snack collection", async () => {
    const snack = db.collection("snack");

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

    const insertResult = await snack.insertOne(mockUser);
    const insertedId = insertResult.insertedId;

    const insertedUser = await snack.findOne({_id: insertedId});
    mockUser._id = insertedId;
    expect(insertedUser).toEqual(mockUser);
  });
  it("should delete a user from the snack collection", async () => {
    const snack = db.collection("snack");
    const deletedUser = await snack.findOne({id: "some-user-id"});
    expect(deletedUser).toEqual(null);
  });
});
