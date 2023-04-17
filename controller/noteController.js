const { json } = require('body-parser');
var generator =require('../util/generator');
var memStorage = require('../util/memory.storage');
var model = require('../model/note.model')

exports.index = function(req,res){
  var seqId   = generator.generate();
    memStorage.store.setItem(seqId , "1st_key");
    var seqId_2   = generator.generate();
    memStorage.store.setItem(seqId_2 , "2nd_key");

    var keys = memStorage.getKeys(memStorage.store);

    var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getValues(memStorage.store);

    var Note = model.Note;
    var notObj = new Note(seqId, "ccc" , " ssss" , "dddd", new Date());
    res.send("get all notes.....KEYS......"+ JSON.stringify(notObj));

}

exports.store = (req,res)=>{
    var seqId   = generator.generate();
    // req.body 
    var title = req.title;
    var content = req.content;
    var createdBy = req.createdBy;
    var createdOn = new Date();
    res.send("save new nte");

}

exports.update = (req,res)=>{
    res.send("update Note  ");
    
}

exports.delete = (req,res)=>{
    res.send("Delete Note  ");
    
}