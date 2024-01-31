import Notes from '../models/notes.model';
const bcrypt = require('bcrypt');

// get all notes
export const notesRecord = async () => {
      const data = await Notes.find();
      return data;
    };

// for notes_creation
export const createNotes = async (body) => {

  // Create the user
  const data = await Notes.create(body);
  return data;
};
//read note
export const getNote = async (id) => {
      const data = await Notes.findById(id);
      return data;
    };

// update note
export const updateNote = async(_id, body) =>{
      const data= await Notes.findByIdAndUpdate(
                {
                  _id
                },
                body,
                {
                  new: true
                }
              );
              return data;
      
};

// delete single note
export const deleteNote = async (id) => {
      await Notes.findByIdAndDelete(id);
      return '';
    };


