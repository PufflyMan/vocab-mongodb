const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = Schema(
    {
        word: {
            type: String,
            required: [true, "word required"]
        },
        def: {
            type: String,
            required: [true, "definition required"]
        }
    }
)

const Word = mongoose.model('word', WordSchema, 'word');
module.exports = Word;