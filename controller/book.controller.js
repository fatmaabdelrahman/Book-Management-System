var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');


exports.index = async (req, res)=>{

    try{
        var bookListQuery = queries.queryList.GET_BOOK_LIST_QUERY;
        var result = await dbConnection.dbQuery(bookListQuery);
        return res.status(200).send(JSON.stringify(result.rows));

    }catch(e){
        console.log("Error : " + e);
        return res.status(500).send({error : e});

    }
}

exports.show = async(req,res)=>{
    try {
        var bookId = req.params.bookId;
        var bookDetailsQuery = queries.queryList.GET_BOOK_DETAILS_QUERY;
        var result = await dbConnection.dbQuery(bookDetailsQuery , [bookId]);
        return res.status(200).send(JSON.stringify(result.rows[0]));
        
    } catch (error) {
        console.log("Error : " + error);
        return res.status(500).send({error : error});
    }
}


exports.store= async (req,res) =>{
    try{
        var createdBy = "admin";
        var createdOn = new Date();
        // req.body
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var pages = req.body.pages;
        var isbn = req.body.isbn;
        var storeCode = req.body.storeCode;

        if(!title || !author || !publisher || !storeCode){
            return res.status(500).send({ error: 'title , author , publisher , storeCode are required , can not empty' })
        }
        
        values =[title ,isbn, description , author , publisher , pages , storeCode,  createdBy , createdOn];
        var saveBookQuery = queries.queryList.SAVE_BOOK_QUERY;
        await dbConnection.dbQuery(saveBookQuery , values);
        return res.status(201).send("Successfully adding new book ");
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to add new book'});
    }

}

exports.update = async (req , res) => {

    try {
    
        var createdBy = "admin";
        var createdOn = new Date();
        // req.body
        var bookId=req.body.bookId;
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var pages = req.body.pages;
        var storeCode = req.body.storeCode;

        if(!bookId || !title || !author || !publisher || !storeCode){
            return res.status(500).send({ error: 'bookId , title , author , publisher , storeCode are required , can not empty' })
        }
        
        values =[title , description , author , publisher , pages , storeCode,  createdBy , createdOn , bookId];
        var updateBookQuery = queries.queryList.UPDATE_BOOK_QUERY;
        await dbConnection.dbQuery(updateBookQuery , values);
        return res.status(200).send("Successfully update book title :" + title);
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to update book title : '+ title});
    }
}

exports.delete = async (req , res) => {
    var bookId = req.params.bookId;

    try {
      // validate not empty
      if(!bookId){
        return res.status(500).send({ error: 'can not delete empty bookId' })
        }

        var deleteBookQuery = queries.queryList.DELETE_BOOK_QUERY;
        await dbConnection.dbQuery(deleteBookQuery , [bookId]);

        return res.status(200).send("Successfully book deleted ");
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to delete book with id : '+ bookId});
    }
}
