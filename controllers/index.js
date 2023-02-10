const express = require('express');
const router = express.Router();

const frontEndRoutes = require('./frontEndController');
router.use("/",frontEndRoutes);

const customerRoutes = require('./customerController');
router.use("/api/user",customerRoutes);

const ownerRoutes = require('./ownerController');
router.use("/api/owner",ownerRoutes);

const reservationRoutes = require('./reservationController');
router.use("/api/reservation",reservationRoutes);

module.exports = router;