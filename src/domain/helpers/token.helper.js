const { v4: uuidv4 } = require('uuid');

module.exports = async (payload) => {
    const token = uuidv4();

    payload.token = token

    return payload
}