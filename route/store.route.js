var express = require('express');
const router = express.Router();
var storeCtrl = require('../controller/store.controller');

router.get("/stores" , storeCtrl.index);
router.post("/stores/store" , storeCtrl.store);

module.exports = router;