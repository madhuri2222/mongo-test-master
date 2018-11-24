const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarioCharacterSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharacterSchema);

module.exports = MarioChar;