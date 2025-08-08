var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:"IPhone 16 Pro max",
      category:"mobile",
      description:"this is a phone with three cameras",
      image:"/images/download.jpg"
    },
    {
      name:"Samsung galaxy S25 Ultra",
      category:"mobile",
      description:"this is a phone with three cameras",
      image:"/images/samsung.jpg"
    },
    {
      name:"one plus nod",
      category:"mobile",
      description:"this is a phone with three cameras",
      image:"/images/one_plus.jpg"
    },
    {
      name:"google pixel",
      category:"mobile",
      description:"this is a phone with three cameras",
      image:""
    },
      {

      name:"Nothing",
      category:"mobile",
      description:"this is a phone with three cameras",
      image:""
    }
  ] //dummy array
  res.render('index', {products,admin:false });
});

module.exports = router;
