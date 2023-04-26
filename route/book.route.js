var express = require('express');
const router = express.Router();
var bookController = require('../controller/book.controller');
router.get("/books" , bookController.index);
router.post("/books/store" , bookController.store);
router.get("/books/details/:bookId" , bookController.show);
router.put("/books/update" , bookController.update);
router.delete("/books/delete/:bookId" , bookController.delete);

module.exports = router;