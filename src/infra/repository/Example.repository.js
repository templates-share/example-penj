const connection = require("../../infra/database/connection");

class ExampleService {
  async store({ payload }) {
    return await connection("users").returning("*").insert(payload);
  }
}

module.exports = new ExampleService();
