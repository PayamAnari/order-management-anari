import { v4 as uuidv4 } from 'uuid';
import orders from '../data/orders.js';
import { errorHandler } from '../utils/error.js';

export const getAllOrders = (req, res, next) => {
  try {
    res.json(orders);
  } catch (error) {
    next(errorHandler(500, 'Failed to fetch orders'));
  }
};

export const getOrderById = (req, res, next) => {
  try {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) {
      return next(errorHandler(404, 'Order not found'));
    }
    res.json(order);
  } catch (error) {
    next(errorHandler(500, 'Failed to fetch order'));
  }
};

export const createOrder = (req, res, next) => {
  try {
    const { customerName, product, quantity, price } = req.body;
    if (!customerName || !product || !quantity || !price) {
      return next(errorHandler(400, 'Missing required fields'));
    }

    const newOrder = {
      id: uuidv4(),
      customerName,
      product,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      status: status || 'New',
      orderDate: orderDate || new Date().toISOString().split('T')[0]
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    next(errorHandler(500, 'Failed to create order'));
  }
};

