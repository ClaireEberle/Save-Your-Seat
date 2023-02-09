const express = require('express');
const router = express.Router();

const frontEndRoutes = require('./frontEndController');
router.use("/",frontEndRoutes);

module.exports = router;