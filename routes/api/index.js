const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");
const locationRoutes = require("./locations");
// const rsvpRoutes = require("./rsvp");

// User routes
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/locations", locationRoutes);
// router.use("/rsvp", rsvpRoutes);

module.exports = router;