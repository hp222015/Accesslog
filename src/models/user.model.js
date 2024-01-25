import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fname: {
      type: String
    },
    lname: {
      type: String
    },
    pswd: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
