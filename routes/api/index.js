const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");
const locationRoutes = require("./locations");

// User routes
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/locations", locationRoutes);

module.exports = router;