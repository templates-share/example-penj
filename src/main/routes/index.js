const router = require("express").Router();

router.use("/api/v1", require("./api/v1/example"));
router.get("/", (req, res) => res.send({ ok: true }));

module.exports = router;