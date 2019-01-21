let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let bookModel = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    pages: {
        type: Number
    },
    readed: {
        type: Boolean
    },
    image: {
        type: String
    },
    favourite: {
        type: Boolean
    }
})

module.exports = mongoose.model('Book', bookModel);