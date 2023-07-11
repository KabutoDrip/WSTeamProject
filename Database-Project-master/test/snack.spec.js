const app = require("../app");
const supertest = require("supertest");
const {expect} = require("@jest/globals");
const request = supertest(app);
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

describe("Test Handlers", () => {
  let connection;
  let request;
  let createSnackId;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    request = supertest(app);
  });
  afterAll(async () => {
    await connection.close();
  });
  test("Get all /snack", async () => {
    const res = await request.get("/snack");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get /snack/id", async () => {
    const res = await request.get("/snack/64a85fad71d32c1c168b17e7");
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Create new /snack", async () => {
    const res = await request.post("/snack").send({
      type: "none",
      maker: "Cocacola",
      name: "Doritos",
      ounces: "8oz",
      calories: "2000",
      sugar: "30gr",
      totalFat: "30",
      ingredients: "sugar, salt",
    });
    createSnackId = res.body._id;
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(201);
  });

  // test("Create new /snack", async () => {
  //   const res = await request.put(`/snack/${createSnackId}`).send({
  //     type: "none",
  //     maker: "Cocacola",
  //     name: "Doritos",
  //     ounces: "8oz",
  //     calories: "2000",
  //     sugar: "30gr",
  //     totalFat: "30",
  //     ingredients: "sugar, salt",
  //   });
    // expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    // expect(res.statusCode).toBe(204);
  // });
  // test("Delete /snack/id", async () => {
  //   const res = await request.delete("/snack/64a85fad71d32c1c168b17e7");
  //   expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  //   expect(res.statusCode).toBe(204);
  // });

});
