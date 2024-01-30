import { Schema, model } from 'mongoose';

const notesSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Notes', notesSchema);