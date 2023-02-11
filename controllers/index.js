import { Router } from 'express';
const router = Router();

import frontEndRoutes from './frontEndController';
router.use("/",frontEndRoutes);

import customerRoutes from './customerController';
router.use("/api/user",customerRoutes);

import ownerRoutes from './ownerController';
router.use("/api/owner",ownerRoutes);

import reservationRoutes from './reservationController';
router.use("/api/reservation",reservationRoutes);

export default router;