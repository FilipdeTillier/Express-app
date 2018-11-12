let StatusCodes = require('../variables/statuses');

let bookController = (Book) => {
    let post = (req, res) => {
        let book = new Book(req.body);

        if (!req.book.title || !req.book.author) {
            res.status(StatusCodes.BAD_REQUEST).send('No required data');
        } else {
            book.save();
            res.status(StatusCodes.CREATED).send(book);
        }
    }
    let get = (req, res) => {

        Book.find(req.query, (err, books) => {
            if (err) {
                res.status(StatusCodes.ERROR).send(err);
            } else {
                let books = [];
                books.forEach((element, index, array) => {
                    let book = element.toJson();
                    book.links = {};
                })
            }
        })

    }
}