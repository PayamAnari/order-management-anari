import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());



app.use((req, res, next) => {
    next(errorHandler(404, 'Route not found'));
});

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({ error: message });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
