var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.render('sample',{ title: 'Jsaon', Page: 'This is a test' });

    var db = req.db;
    //console.log(db);
    var collection = db.get('usercollection');
    //console.log(collection);

    collection.find({},{},function(e,docs){
        console.log("===============AAAA============");
        console.log("111111" + docs)
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});



// define the about route
router.get('/test2', function(req, res) {
    res.send('About test');
});


module.exports = router;