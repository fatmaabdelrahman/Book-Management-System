const { json } = require("body-parser");
var generator = require("../util/generator");
var memStorage = require("../util/memory.storage");
var model = require("../model/note.model");

var model = require("../model/note.model");
exports.index = function (req, res) {
  //   var seqId   = generator.generate();
  // memStorage.store.setItem(seqId , "1st_key");
  // var seqId_2   = generator.generate();
  // memStorage.store.setItem(seqId_2 , "2nd_key");

  // var keys = memStorage.getKeys(memStorage.store);

  // var keys = memStorage.getKeys(memStorage.store);
  // var values = memStorage.getValues(memStorage.store);

  // var Note = model.Note;
  // var notObj = new Note(seqId, "ccc" , " ssss" , "dddd", new Date());
  // res.send("get all notes.....KEYS......"+ JSON.stringify(notObj));

  var values = memStorage.getValues(memStorage.store);
  console.log("Values ....... " + JSON.stringify(values));
  return res.status(200).send(JSON.stringify(values));
};

exports.store = (req, res) => {
  var seqId = generator.generate();
  // req.body
  var title = req.body.title;
  var content = req.body.content;
  var createdBy = "admin";
  var createdOn = new Date();
  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "Title or content don't have values" });
  }

  var Note = model.Note;
  var notObj = new Note(seqId, title, content, createdBy, createdOn);
  memStorage.store.setItem(seqId, notObj);
  return res.status(200).send("Note added successfully ! ");
};

exports.update = (req, res) => {
  var noteId = req.body.noteId;
  var title = req.body.title;
  var content = req.body.content;
  var createdBy = "admin";
  var createdOn = new Date();
  if (!noteId) {
    return res.status(500).send({ error: "Note id shouldn't be empty" });
  }
  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "Title or content don't have values" });
  }
  var noteItem = memStorage.store.getItem(noteId);
  if (!noteItem) {
    return res.status(500).send({ error: "note id not exist" });
  }

  var Note = model.Note;
  var notObj = new Note(noteId, title, content, createdBy, createdOn);
  memStorage.store.setItem(noteId, notObj);
  return res.status(200).send("Note Updated successfully ! ");
};

exports.delete = (req, res) => {
  var noteId = req.params.noteId;
  if (!noteId) {
    return res.status(500).send({ error: "note id empty" });
  }
  var noteItem = memStorage.store.getItem(noteId);
  if (!noteItem) {
    return res.status(500).send({ error: "note id not exist" });
  }

  memStorage.store.removeItem(noteId);
  return res.status(200).send("Note delete successfully ! ");
};
