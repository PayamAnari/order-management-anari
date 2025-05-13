import { v4 as uuidv4 } from 'uuid';

let orders = [
  { 
    id: uuidv4(), 
    customerName: 'John Doe', 
    product: 'Laptop', 
    quantity: 1, 
    price: 999.99, 
    status: 'Processing', 
    orderDate: '2024-05-01' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Jane Smith', 
    product: 'Phone', 
    quantity: 2, 
    price: 499.99, 
    status: 'Shipped', 
    orderDate: '2024-04-20' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Alice Johnson', 
    product: 'Tablet', 
    quantity: 3, 
    price: 299.99, 
    status: 'Delivered', 
    orderDate: '2024-03-15' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Bob Brown', 
    product: 'Monitor', 
    quantity: 1, 
    price: 199.99, 
    status: 'Processing', 
    orderDate: '2024-05-10' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Charlie Davis', 
    product: 'Keyboard', 
    quantity: 5, 
    price: 49.99, 
    status: 'Shipped', 
    orderDate: '2024-05-01' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Diana Evans', 
    product: 'Mouse', 
    quantity: 4, 
    price: 29.99, 
    status: 'Delivered', 
    orderDate: '2024-03-22' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Ethan Foster', 
    product: 'Headphones', 
    quantity: 2, 
    price: 89.99, 
    status: 'Processing', 
    orderDate: '2024-04-05' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Fiona Green', 
    product: 'Webcam', 
    quantity: 1, 
    price: 79.99, 
    status: 'Shipped', 
    orderDate: '2024-04-10' 
  },
  { 
    id: uuidv4(), 
    customerName: 'George Harris', 
    product: 'Microphone', 
    quantity: 1, 
    price: 129.99, 
    status: 'Delivered', 
    orderDate: '2024-02-25' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Hannah Ives', 
    product: 'Speaker', 
    quantity: 2, 
    price: 199.99, 
    status: 'Shipped', 
    orderDate: '2024-05-05' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Ian Johnson', 
    product: 'Smartwatch', 
    quantity: 1, 
    price: 249.99, 
    status: 'Processing', 
    orderDate: '2024-04-12' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Jack King', 
    product: 'Charger', 
    quantity: 3, 
    price: 19.99, 
    status: 'Delivered', 
    orderDate: '2024-05-01' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Kathy Lee', 
    product: 'USB Cable', 
    quantity: 5, 
    price: 9.99, 
    status: 'Shipped', 
    orderDate: '2024-03-30' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Liam Miller', 
    product: 'Power Bank', 
    quantity: 2, 
    price: 39.99, 
    status: 'Delivered', 
    orderDate: '2024-04-15' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Mia Nelson', 
    product: 'Laptop Stand', 
    quantity: 1, 
    price: 59.99, 
    status: 'Processing', 
    orderDate: '2024-04-25' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Olivia Parker', 
    product: 'Mouse Pad', 
    quantity: 3, 
    price: 14.99, 
    status: 'Shipped', 
    orderDate: '2024-03-19' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Paul Quinn', 
    product: 'External Hard Drive', 
    quantity: 1, 
    price: 89.99, 
    status: 'Delivered', 
    orderDate: '2024-02-28' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Quinn Roberts', 
    product: 'Router', 
    quantity: 1, 
    price: 129.99, 
    status: 'Shipped', 
    orderDate: '2024-04-18' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Rachel Smith', 
    product: 'Network Switch', 
    quantity: 1, 
    price: 199.99, 
    status: 'Processing', 
    orderDate: '2024-04-07' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Sam Taylor', 
    product: 'HDMI Cable', 
    quantity: 2, 
    price: 19.99, 
    status: 'Delivered', 
    orderDate: '2024-04-11' 
  },
  { 
    id: uuidv4(), 
    customerName: 'Tina Underwood', 
    product: 'Ethernet Cable', 
    quantity: 5, 
    price: 9.99, 
    status: 'Shipped', 
    orderDate: '2024-05-02' 
  },
];

export default orders;
