const express = require('express')
const router = express.Router();
var controller = require("../controller/noteController");

router.get('/notes',controller.index);
router.post('/notes/store',controller.store);
router.put('/notes/update',controller.update);
router.delete('/notes/delete/:noteId',controller.delete);
module.exports = router