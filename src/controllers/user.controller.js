import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


// for registration
export const newUser = async (req, res, next) => {
  try {

    if (!req.body.email || !req.body.password) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Email/Password is required' });
    }
    
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

//for login
export const login = async (req, res, next) => {
  try {
    const isAuthenticated = await UserService.authenticate(req.body);
    if (isAuthenticated) {
      res.status(HttpStatus.OK).json({ message: 'Login successful' });
    } else {
      res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error during authentication' });
  }
};


