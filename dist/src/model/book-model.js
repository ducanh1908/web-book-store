"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: String,
    gerne: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Gerne',
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Author'
    },
    yearPublisher: String,
    publisher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Publisher'
    },
    status: String,
    price: Number,
    description: String
});
const Book = (0, mongoose_1.model)('Book', bookSchema);
exports.Book = Book;
