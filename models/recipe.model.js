"use strict";

const Item = require('./item.model');

class Recipe {

    constructor(id, name, items, instructions, estimatedTime) {
        this.id = id;
        this.name = name;
        this.items = items;
        this.instructions = instructions;
        this.estimatedTime = estimatedTime;
    };
}

let recipes = [
    new Recipe(
        0,
        'Pizza Margherita',
        [
            new Item('Pizza crust', 1),
            new Item('Tomato sauce', 1),
            new Item('Mozzarella', 8),
            new Item('Plum tomatoes', 2),
            new Item('Basil', 1)
        ],
        [
            'Put everything together',
            'Bake for 14-16 minutes'
        ],
        60
    ),
    new Recipe(
        1,
        'Raw chicken',
        [
            new Item('Chicken', 1),
            new Item('Hammer', 1),
        ],
        [
            "Hit the head's chicken with the hammer",
            "Skin the chicken",
            "Serve fresh",
        ],
        5
    )
];

/**
 * Returns all recipes.
 * @returns {*[]} All recipes
 */
module.exports.getRecipes = function() {
    return recipes;
};

/**
 * Returns the recipe.
 * @param id The recipe ID
 * @returns {*} The recipe
 */
module.exports.getRecipe = function(id) {

    for (let recipe of recipes)
        if(recipe.id === id)
            return recipe;

    return {};
};

/**
 * Creates a recipe.
 * @param recipe The recipe object
 * @returns {*} The created object
 */
module.exports.createRecipe = function(recipe) {

    let lastId = recipes[recipes.length - 1].id;
    recipe.id = lastId + 1;
    recipes.push(recipe);

    return recipes[recipes.length - 1];
};

/**
 * Updates a recipe
 * @param id The recipe ID
 * @param recipe The recipe object
 * @returns {*} The created object
 */
module.exports.updateRecipe = function(id, recipe) {

    for (let r of recipes)
        if(r.id === id) {
            if(recipe.name) r.name = recipe.name;
            if(recipe.items) r.items = recipe.items;
            if(recipe.instructions) r.instructions = recipe.instructions;
            if(recipe.estimatedTime) r.estimatedTime = recipe.estimatedTime;
            return r;
        }

    return {};
};

/**
 * Deletes a recipe.
 * Returns 1 or 0 whether the recipe was deleted or not.
 * @param id The recipe ID
 * @returns {number} 1 or 0 whether the recipe was deleted or not
 */
module.exports.deleteRecipe = function(id) {

    for (let index in recipes)
        if(recipes[index].id === id) {
            recipes.splice(index, 1);
            return 1;
        }

    return 0;
};