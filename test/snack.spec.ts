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
    const res = await request.get("/snack/snack");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get /snack/id", async () => {
    const res = await request.get("/snack/snack/64a85fad71d32c1c168b17e7");
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get all meats", async () => {
    const res = await request.get("/snack/meats");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get /meats/id", async () => {
    const res = await request.get("/snack/meats/64a85fad71d32c1c168b17e7");
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  // test("Get all snack", async () => {
  //   const res = await request.get("/snack/snack");
  //   expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  //   expect(res.statusCode).toBe(200);
  // });

  // test("Get /snack/id", async () => {
  //   const res = await request.get("/snack/snack/64a85fad71d32c1c168b17e7");
  //   console.log(res);
  //   expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  //   expect(res.statusCode).toBe(200);
  // });

  test("Get all candy&Pastries", async () => {
    const res = await request.get("/snack/candy&Pastries");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get /candy&Pastries/id", async () => {
    const res = await request.get(
      "/snack/candy&Pastries/64a85fad71d32c1c168b17e7"
    );
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get all nuts&dried_Fruits", async () => {
    const res = await request.get("/snack/nuts&dried_Fruits");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  test("Get /nuts&dried_Fruits/id", async () => {
    const res = await request.get(
      "/snack/nuts&dried_Fruits/64a85fad71d32c1c168b17e7"
    );
    console.log(res);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
  });

  // test("Create new /snack", async () => {
  //   const res = await request.post("/snack/snack").send({
  //     type: "none",
  //     maker: "Cocacola",
  //     name: "Doritos",
  //     ounces: "8oz",
  //     calories: "2000",
  //     sugar: "30gr",
  //     totalFat: "30",
  //     ingredients: "sugar, salt",
  //   });
  //   createSnackId = res.body._id;
  //   console.log(res);
  //   expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  //   expect(res.statusCode).toBe(201);
  // });

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
