const express = require('express');
const router = express.Router();

const customerRoutes = require('./customerControllers');
router.use("/api/customers",customerRoutes);

const frontEndRoutes = require('./frontendControllers')
router.use("/",frontEndRoutes);

// const Routes = require('./chirpController');
// router.use("/api/chirps",chirpRoutes);

// const frontEndRoutes = require('./frontEndController');
// router.use("/",frontEndRoutes);

module.exports = router;