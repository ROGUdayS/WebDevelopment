var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients=[
    {
        "id":"hdh7872",
        "text":"Eggs",
    },
    {
        "id":"jddue",
        "text":"Bacon",
    },
    {
        "id":"dttt",
        "text":"Milk",
    },
    {
        "id":"gst",
        "text":"Frog Legs",
    }
];

app.get('/ingredients', function(request, response){
    response.send(ingredients);
});

app.post('/ingredients', function(request, response){
    var ingredient = request.body;
    if(!ingredient||ingredient.text===""){
        response.status(500).send({error:"Your ingredient must have a text"});
    }
    else{
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredients/:ingredientId', function(request, response){
    var newText=request.body.text;
    if(!newText||newText===""){
        response.status(500).send({error:"You must provide ingredient text"});
    }
    else{
        var objectFound=false;
        for(var x=0; x<ingredients.length;x++){
            var ing=ingredients[x];
            if(ing.id===request.params.ingredientId){
                ingredients[x].text=newText;
                objectFound=true;
                break;
            }
        }
        if(!objectFound){
            response.status(500).send({error:"Ingredientr id not found"});
        }
        else{
            response.send(ingredients);
        }
    }
});

app.get('/funions', function(req, res){
    res.send("Yo give me some funions foo!")
});

app.listen(3000, function(){
    console.log("First API running on port 3000")
})