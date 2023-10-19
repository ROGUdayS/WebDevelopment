var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/swag-shop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.');
    })
    .catch(err => {
        console.log('Database connection failed:', err);
    });

var Product = require('./model/Product'); 
var WishList = require('./model/WishList'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(request, response){
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;

    product.save()
    .then(savedProduct => {
        response.send(savedProduct);
    })
    .catch(err => {
        console.error("Save Error:", err);
        response.status(500).send({error: "Could not save product"});
    });
});

app.post('/wishlist', function(request, response){
    var wishList = new WishList();
    wishList.title = request.body.title;
    wishList.save()
    .then(newWishList =>{
        response.send(newWishList);
    })
    .catch(err => {
        console.error("Save Error:", err);
        response.status(500).send({error:"Could not save wishlist"})
    });
})

app.get('/product', function(request, response){
    
    Product.find()
    .then(products => {
        response.send(products);
    })
    .catch(err => {
        console.error("Find Error:", err);
        response.status(500).send({error: "Could not fetch products"});
    });
//    product.find({}, function(err, products){
//        if(err){
//            response.status(500).send({error:"Could not fetch products"});
//        }
//        else{
//            response.send(products);
//        }
//    });
});

//.then()
//.catch(err =>
//    console.error("Add Error:", err);
//    response.status(500).send({error:"Could not add item to wishlist"}))

app.get('/wishlist', function(request, response){
    WishList.find()
    .then(wishLists =>{
        response.send(wishLists);
    })
    .catch(err => {
        console.error("Find Error:", err);
        response.status(500).send({error: "Could not fetch wishlist"});
    });
});

app.put('/wishlist/product/add', function(request, response) => {
  Product.findOne({ _id: req.body.productId })
    .then(product => product ? WishList.updateOne({ _id: req.body.wishListId }, { $addToSet: { products: product._id } }) : null)
    .then(updatedWishList => updatedWishList ? res.send(updatedWishList) : res.status(500).send({ error: "Could not add item to wishlist" }))
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send({ error: "Could not add item to wishlist" });
    });
});


//add.put('wishlist/product/add', function(request, response){
//    Product.findOne()
//    .then()
//    .catch(err =>
//          console.error("Add Error:", err);
//          response.status(500).send({error:"Could not add item to wishlist"}))
//});

//add.put('wishlist/product/add', function(request, response){
//    Product.findOne({_id:request.body.productId}, function(err, product){
//        if(err){
//            response.status(500).send({error:"Could not add item to wishlist"});
//        }
//        else{
//            WishList.update({_id:request.body.wishListId},{$addToSet:{products:product._id}}, function(err, wishList){
//                if(err){
//                    response.status(500).send({error:"Could not add item to wishlist"});
//                }
//                else{
//                    response.send(wishList);
//                }
//            })
//        }
//    })
//});

// Error-handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3003, function() { // Changed port to avoid conflict with MongoDB
    console.log("Swag Shop API running on port 3003...");
});
