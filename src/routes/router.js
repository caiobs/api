const router = require("express").Router();

// products routes
const productRouter = require("./products");

router.use("/", productRouter);

// catalogs routes
const catalogRouter = require("./catalogs");

router.use("/", catalogRouter);

module.exports = router;