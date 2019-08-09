const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");

// User routes
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/locations", eventRoutes);

module.exports = router;