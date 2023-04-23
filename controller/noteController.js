var generator =require('../util/generator');

var model = require('../model/note.model')
exports.index = function(req,res){
    var seqIds   = generator.generate(); 
    res.send("get all notes"+ seqIds);
}

exports.store = (req,res)=>{
    res.send("save new nte");

}

exports.update = (req,res)=>{
    res.send("update Note  ");
    
}

exports.delete = (req,res)=>{
    res.send("Delete Note  ");
    
}