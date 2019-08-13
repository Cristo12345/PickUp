const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/users"
router.route("/")
    .get(eventsController.findAll)
    .post(eventsController.create);

// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(eventsController.findById)
    .put(eventsController.update)
    .delete(eventsController.remove);

// "/:id/addPlayer"
//"/:id/RSVP/"
router.route("/:id/rsvp")
    .get(eventsController.findAll)

module.exports = router;