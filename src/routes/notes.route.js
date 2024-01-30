// changes made
import express from 'express';
import * as NotesController from '../controllers/notes.controller';
import { newNotesValidator } from '../validators/notes.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();
// creating notes
router.post('',newNotesValidator,NotesController.createNotes);
//route to get all notes
router.get('', NotesController.getAllNotes);

//route to get a single user by their notes id
router.get('/:_id', NotesController.getNote);

//route to update a single user by their notes id
router.put('/:_id', NotesController.updateNote);

//route to delete a single user by their notes id
router.delete('/:_id', NotesController.deleteNote);

//router.post('/login',NotesController.login);

export default router;