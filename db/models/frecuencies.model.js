const mongoose = require('mongoose');

const { Schema } = mongoose;

const frecuencySchema = new Schema({
  noteId: String
});

module.exports = mongoose.model('frecuencies', frecuencySchema);
