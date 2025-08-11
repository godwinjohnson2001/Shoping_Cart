var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');

/* GET users listing. */
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
  ]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
});
router.post('/add-product',(req,res)=>{
  //console.log(req.body);
  //console.log(req.files.Image);

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id);
    image.mv('./public/product-images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err)
      }
    })

  })
})

module.exports = router;
