import User from '../models/user.model';
const bcrypt = require('bcrypt');


export const newUser = async (body) => {
  // Generate salt and hash the password

  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Replace plain text password with hashed password
  body.password = hashedPassword;

  // Create the user with the hashed password
  const data = await User.create(body);
  return data;
};




// for login
export const authenticate = async (body) => {
  try {
    const data = await User.findOne({ email: body.email });
    console.log(body.email);
    console.log(data);
    if (!data) return false; // Handle user not found
    const isMatch = await bcrypt.compare(body.password, data.password);
    return isMatch; // Return boolean indicating authentication success
  } catch (error) {
    console.error(error); // Log errors for debugging
    return false; // Return false on errors
  }
};