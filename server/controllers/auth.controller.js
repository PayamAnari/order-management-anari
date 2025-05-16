import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

let users = [];

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return next(errorHandler(400, 'User already exists'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = {
    username,
    email,
    password: hashedPassword
  };

  try {
    users.push(newUser);
    res.status(201).json('User created successfully');
  } catch (error) {
    next(error);  
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = users.find(user => user.email === email);

    if (!validUser) {
      return next(errorHandler(404, 'User not found!'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credentials'));
    }

    const token = jwt.sign({ id: validUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const { password: pass, ...rest } = validUser;

    res.cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
       .status(200)
       .json({ message: 'Login successful', user: rest, token });
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out');
  } catch (error) {
    next(error);
  }
};
