var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({},{},function(e,docs){
      res.json(docs);
    });
  //
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
  console.log(req.body);
  var db = req.db;
  var collection = db.get('userlist');
  var document = req.body;
    collection.insert(document, {}, function(err, records){
      //console.log("Record added as "+records);
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});


/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;

    var collection = db.get('userlist');
    collection.remove( {_id : userToDelete},{}, function(err, result) {
        console.log(err);
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });

});

/**
 * put to user by _id
 */
router.put('/updateuser/:userId', function(req, res) {
    var db = req.db;
    var userToUpdate = req.params.userId;
    var collection = db.get('userlist');
    var document = req.body;
    console.log(document);
    collection.findAndModify({ _id: userToUpdate }, { $set: document },function(err, result) {
        console.log(result);
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});




module.exports = router;