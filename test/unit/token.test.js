const validToken = require("../../src/domain/helpers/token.helper");

describe("Test current date time", () => {
    it("should return the current time", async () => {
        const payload = {
            "name": "Thiago",
            "cpf": "3445554366777"
        }

        const results = await validToken(payload);
        expect(results).toHaveProperty("token");
    });
});