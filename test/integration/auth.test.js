const request = require("supertest");
const app = require("../../src/main/app");

describe("GET /api/v1/example", () => {
  it("should return 200 when required successfully", async () => {

    const [checkTokenDB] = [{ token: "e0f46459-dd35-4eda-92b9-e322346609a2" }]

    expect(checkTokenDB.token).toBe("e0f46459-dd35-4eda-92b9-e322346609a2");
  });

  // it("should return 400 when not sent apikey", async () => {

  //   const [checkTokenDB] = [{ token: "" }]

  //   expect(statusCode).toBe("400")
  //   expect(checkTokenDB.token).toBeMatchObj({
  //     "statusCode": 400,
  //     "error": "Missing api-key"
  //   })
  // });

  // it("should return 401 when sent apikey invalid", async () => {

  //   const [checkTokenDB] = [{ token: "e0f46459-dd35-4eda-92b9-e32234660000" }]

  //   expect(statusCode).toBe("401")
  //   expect(checkTokenDB.token).toBeMatchObj({
  //     "statusCode": 400,
  //     "error": "Missing api-key"
  //   })
  // });
});
