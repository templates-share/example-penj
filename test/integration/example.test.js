const request = require("supertest");
const app = require("../../src/main/app");

describe("POST /api/v1/example", () => {
  it("should return 201 when user is successfully created", async () => {
    const response = await request(app).post("/api/v1/example").send({
      name: "Thiago",
      cpf: "316549875",
    });
    console.log(response.body);
    expect(response.status).toBe(201);
  });
});
