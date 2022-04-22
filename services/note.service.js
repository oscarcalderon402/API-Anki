const Note = require('../db/models/notes.model');

class NoteService {
  constructor() {}

  async create(data) {
    try {
      const { starNote, endNote } = data;
      if (starNote && endNote) {
        const newNote = new Note();
        newNote.starNote = starNote;
        newNote.endNote = endNote;
        newNote.save();
        return newNote;
      } else {
        throw { msg: 'miss data' };
      }
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      const notes = await Note.find({});
      return notes;
    } catch (error) {
      throw error;
    }
  }

  async findOne() {}

  async update() {}

  async delete() {}
}

module.exports = NoteService;
