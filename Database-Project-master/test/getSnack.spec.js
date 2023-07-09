// const {MongoClient} = require("mongodb");

// const dotenv = require("dotenv");

// dotenv.config();

// describe("insert", () => {
//   let connection;

//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     db = await connection.db("snack");
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it("should insert a new user into the snack collection", async () => {
//     const snack = db.collection("snack");
//     const res =  snack.find();
//     expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
//     expect(res.statusCode).toBe(200);
//   });
// });
