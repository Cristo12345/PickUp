const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// Matches with "/api/locations"
router.route("/")
    .get(locationsController.findAll)

// Matches with "/api/locations/:id"
router
    .route("/:id")
    .get(locationsController.findById)
    .delete(locationsController.remove);

module.exports = router;