const ExampleRepository = require("../../infra/repository/Example.repository");
const { isValidFields } = require("../validator/validField");
const tokenHelper = require("../helpers/token.helper");

class ExampleService {
  async store({ payload }) {
    const validField = await isValidFields(payload, [
      "name",
      "cpf"
    ]);

    if (validField.error) return validField;

    payload = await tokenHelper(payload)

    return await ExampleRepository.store({ payload });
  }

  async get() {
    return await ExampleRepository.get();
  }
}

module.exports = new ExampleService();
