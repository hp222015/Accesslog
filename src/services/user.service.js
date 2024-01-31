import User from '../models/user.model';
const bcrypt = require('bcrypt');
require('dotenv').config();
import jwt from "jsonwebtoken";

// for registration
export const register = async (body) => {
  
  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Replace plain text password with hashed password
  body.password = hashedPassword;

  const data1 = await User.findOne({ email: body.email }); 
  if(!data1)
  {
  const data = await User.create(body);
  return data;
  }
  else
  {
   throw new Error('Email already present');
  }
};




// for login
export const authenticate = async (body) => {
  try {
      const user = await User.findOne({ email: body.email });
      if (!user) {
          throw new Error('Invalid Email');
      }

      const isMatch = await bcrypt.compare(body.password, user.password);

      if (isMatch) {
          const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET_KEY , { expiresIn: '10h' });
          return token
      }

      throw new Error('Invalid Password');
  } catch (error) {
      throw error;
  }
};