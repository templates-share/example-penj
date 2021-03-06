const ExampleService = require("../../domain/services/Example.service");

class ExampleController {
  async store({ body: examples }, res) {

    const results = await ExampleService.store({ payload: examples });

    if (results.error) {
      return res.status(400).json({
        statusCode: 400,
        message: `missing data: ${results.error}`,
      });
    }

    return res.status(201).json(results);
  }

  async get({ headers }, res) {

    const results = await ExampleService.get({ payload: headers.apikey });

    return res.status(200).json(results);
  }
}

module.exports = new ExampleController();
