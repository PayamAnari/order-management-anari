import { v4 as uuidv4 } from 'uuid';



let orders = [
  { id: uuidv4(), customerName: 'John Doe', product: 'Laptop', quantity: 1, price: 999.99 },
  { id: uuidv4(), customerName: 'Jane Smith', product: 'Phone', quantity: 2, price: 499.99 },
    { id: uuidv4(), customerName: 'Alice Johnson', product: 'Tablet', quantity: 3, price: 299.99 },
    { id: uuidv4(), customerName: 'Bob Brown', product: 'Monitor', quantity: 1, price: 199.99 },
    { id: uuidv4(), customerName: 'Charlie Davis', product: 'Keyboard', quantity: 5, price: 49.99 },
    { id: uuidv4(), customerName: 'Diana Evans', product: 'Mouse', quantity: 4, price: 29.99 },
    { id: uuidv4(), customerName: 'Ethan Foster', product: 'Headphones', quantity: 2, price: 89.99 },
    { id: uuidv4(), customerName: 'Fiona Green', product: 'Webcam', quantity: 1, price: 79.99 },
    { id: uuidv4(), customerName: 'George Harris', product: 'Microphone', quantity: 1, price: 129.99 },
    { id: uuidv4(), customerName: 'Hannah Ives', product: 'Speaker', quantity: 2, price: 199.99 },
    { id: uuidv4(), customerName: 'Ian Johnson', product: 'Smartwatch', quantity: 1, price: 249.99 },
    { id: uuidv4(), customerName: 'Jack King', product: 'Charger', quantity: 3, price: 19.99 },
    { id: uuidv4(), customerName: 'Kathy Lee', product: 'USB Cable', quantity: 5, price: 9.99 },
    { id: uuidv4(), customerName: 'Liam Miller', product: 'Power Bank', quantity: 2, price: 39.99 },
    { id: uuidv4(), customerName: 'Mia Nelson', product: 'Laptop Stand', quantity: 1, price: 59.99 },
    { id: uuidv4(), customerName: 'Olivia Parker', product: 'Mouse Pad', quantity: 3, price: 14.99 },
    { id: uuidv4(), customerName: 'Paul Quinn', product: 'External Hard Drive', quantity: 1, price: 89.99 },
    { id: uuidv4(), customerName: 'Quinn Roberts', product: 'Router', quantity: 1, price: 129.99 },
    { id: uuidv4(), customerName: 'Rachel Smith', product: 'Network Switch', quantity: 1, price: 199.99 },
    { id: uuidv4(), customerName: 'Sam Taylor', product: 'HDMI Cable', quantity: 2, price: 19.99 },
    { id: uuidv4(), customerName: 'Tina Underwood', product: 'Ethernet Cable', quantity: 5, price: 9.99 },
];

export default orders;