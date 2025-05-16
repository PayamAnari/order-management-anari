import express from 'express';
import { getAllOrders, getOrderById, createOrder } from '../controllers/orders.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.post('/', verifyToken, createOrder);



export default router;