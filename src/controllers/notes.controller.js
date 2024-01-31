import HttpStatus from 'http-status-codes';
import * as NotesService from '../services/notes.service';

// to get all notes
export const notesRecord = async (req, res, next) => {
      try {
        const data = await NotesService.notesRecord();
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: 'All users fetched successfully'
        });
      } catch (error) {
        next(error);
      }
    };
// for creating
export const createNotes = async (req, res, next) => {
  try {

    const data = await NotesService.createNotes(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note created successfully'
    });
  }
  catch (error) {
    next(error);
  }
};

// read single note
export const getNote = async (req, res, next) => {
      try {
        const data = await NotesService.getNote(req.params._id);
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: 'Note fetched successfully'
        });
      } catch (error) {
        next(error);
      }
    };

// for updating
export const updateNote = async (req, res, next) => {
      try {
        const data = await NotesService.updateNote(req.params._id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
          code: HttpStatus.ACCEPTED,
          data: data,
          message: 'Note updated successfully'
        });
      } catch (error) {
        next(error);
      }
    };
//delete note
export const deleteNote = async (req, res, next) => {
      try {
        await NotesService.deleteNote(req.params._id);
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: [],
          message: 'Note deleted successfully'
        });
      } catch (error) {
        next(error);
      }
    };


