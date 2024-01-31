import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


// for registration
export const register = async (req, res, next) => {
  try {

    const data = await UserService.register(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  }
  catch (error) {
    next(error);
  }
};

//for login

export const login = async (req, res, next) => {
  try {
      const token = await UserService.authenticate(req.body);
      res.status(HttpStatus.OK).json({ message: 'Login successful', data: token});
  } 
  catch (error) {
      res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Login failed: ' + error.message });
  }
};


