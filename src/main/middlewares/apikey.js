const ExampleRepository = require("../../infra/repository/Example.repository");

module.exports = async ({ headers }, res, next) => {
    const apikey = headers["x-example-api-key"];

    if (!apikey) return res.status(400).json({ statusCode: 400, error: 'Token not provider' });

    try {
        const checkToken = await ExampleRepository.checkToken({ payload: apikey });

        const validToken = checkToken.find(t => t.token === apikey)

        if (!validToken) return res.status(401).json({ statusCode: 401, error: 'Invalid token' })

        return next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({ statusCode: 401, error: 'Invalid token' });
    }
};
