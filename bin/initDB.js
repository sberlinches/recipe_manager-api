const db = require('../bin/www');

exports.initRecipes = function() {

    let recipes = [
        {
            name: 'Pizza Margherita',
            items: [
                {name: 'Pizza crust', quantity: 1},
                {name: 'Tomato sauce', quantity: 1},
                {name: 'Mozzarella', quantity: 8},
                {name: 'Plum tomatoes', quantity: 2},
                {name: 'Basil', quantity: 1}
            ],
            instructions: [
                'Put everything together',
                'Bake for 14-16 minutes'
            ],
            estimatedTime: 60
        },
        {
            name: 'Raw Chicken',
                items: [
                {name: 'Chicken', quantity: 1},
                {name: 'Hammer', quantity: 1}
            ],
            instructions: [
                'Hit the head\'s chicken with the hammer',
                'Skin the chicken',
                'Serve fresh'
            ],
            estimatedTime: 5
        }
    ];

    db.recipe.count(function(err, result) {
        if (err) throw err;

        if(!result) {
            db.recipe.insert(recipes, function(err, result) {
                if (err) throw err;
                console.log("Recipes collection initialized")
            })
        }
    });
};