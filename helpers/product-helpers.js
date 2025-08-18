var db=require('../config/connection')
var collection=require('../config/collections')
var objectId = require('mongodb').ObjectID
module.exports={

        addProduct:(product,callback)=>{
            //console.log(product);
            db.get().collection('product').insertOne(product).then((data)=>{
                
                callback(data.ops[0]._id)   //for getting the unique id after getting submission and passing callback
            })
        },
        getAllProducts:()=>{
            return new Promise(async(resolve,reject)=>{
              let products =await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()  //for taking data for db (collection)
              resolve(products)  
            })
        },
        deleteProduct:(prodId)=>{
            return new Promise((resolve,reject)=>{
                db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(prodId)}).then((response)=>{
                    console.log(response);
                    resolve(response)
                })
            })
        }
}