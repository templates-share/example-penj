const connection = require("../../infra/database/connection");

class ExampleRepository {
  async store({ payload }) {
    return await connection("users").returning("*").insert(payload);
  }

  async checkToken({ payload: token }) {
    return await connection("users").where({ token });
  }

  async get() {
    return await connection("users");
  }
}

module.exports = new ExampleRepository();
