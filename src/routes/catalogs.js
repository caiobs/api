const router = require("express").Router();

const catalogController = require("../controllers/catalogController");

// functions
router.route("/catalogs").post((req, res) => catalogController.create(req, res));

router.route("/catalogs").get((req, res) => catalogController.getAll(req, res));

router.route("/catalogs/:id").get((req, res) => catalogController.get(req, res));

module.exports = router;