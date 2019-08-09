const router = require("express").Router();
const locationsController = require("../../controllers/locationController");

// Matches with "/api/users"
router.route("/")
    .get(locationsController.findAll)

// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .delete(usersController.remove);

module.exports = router;