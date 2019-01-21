const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    db = mongoose.connect('mongodb://localhost/bookAPI'),
    Book = require('./models/bookModel'),
    statusCodes = require('./variables/statuses'),
    joi = require('joi'),
    bookSchemaValidator = require('./validators/bookValidator');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const bookRouter = express.Router();

bookRouter.route('/book')
    .post((req, res) => {
        const book = new Book(req.body);
        
        // const paramStatus = await joi.validate(req.body, bookSchemaValidator);
        // if(paramStatus.error) {
        //     return res.status(statusCodes.BAD_REQUEST).json(paramStatus.error)
        // }
        console.log(book);
        book.save();
        res.status(statusCodes.CREATED).send(book);
    })
    .get((req, res) => {
        Book.findOne(req.query, (err, book) => {
            err ? res.status(statusCodes.ERROR).send(err) : res.json(book);
        })
    })
    .delete((req, res) => {
        Book.findOneAndDelete(req.query, (err, book) => {
            err ? res.status(statusCodes.ERROR).send(err) : res.json(book);
        })
    })
    .put((req, res) => {
        Book.findById(req.body._id, (err, book) => {
            book.title = req.body.title;
            book.author = req.body.author;
            book.pages = req.body.pages;
            book.readed = req.body.readed;
            book.image = req.body.image;
            book.favourite = req.body.favourite;
            book.save();
            err ? res.status(statusCodes.ERROR).send(err) : res.json(book);
        })
    })

bookRouter.route('/books')
    .get((req, res) => {
        // Book.find({_id: '5bdc09ae778fb64004e5cd27'}, (books) => res.json(books));
        Book.find(req.query.title, (err, books) => {
            err ? res.status(statusCodes.ERROR).send(err) : res.json(books);
        })
    })

app.use('/api', bookRouter);
app.get('/', (req, res) => res.send('Hello in app!'))

app.listen(3000, () => console.log('Server running on 3000 port'));

module.exports = app;