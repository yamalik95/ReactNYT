const router  = require("express").Router();
// const DB      = require('../modules/db.js');


const mongoose = require('mongoose');
// connect with mongo DB with mongoose.connect
mongoose.Promise = Promise; // mongo came out before Promise is a thing, this will make mongoose use the default JS promise
mongoose.connect("mongodb://localhost/nyt-react"); // no need to use Robo 3T to manually make it

const Article = require('../models/Article');

router.get('/articles', (req, res) => {
  Article.find({}, function(err, docs) {
    if (!err) {
      res.json(docs);
    }
    else {
      throw err;
    }
  });
});

// save an article to mongo
router.post('/articles', (req, res) => {
  Article.create({
    title : req.body.title,
    date  : req.body.date,
    url : req.body.url
  })
  .then(function() {
    res.status(200);
  })
});

router.post('/delete/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      console.log('successfully deleted!');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
