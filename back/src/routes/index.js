const Router = require("express");
const getCharById = require("../controller/getCharById");
const getCharDetail = require("../controller/getCharDetail")

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

module.exports = router;
