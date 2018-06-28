const Recipe = require('../../models/recipe.model');

let newRecipe = {
    id: 0,
    name: "test",
    items: [],
    instructions: [],
    estimatedTime: 0
};

describe("Recipe class", function() {

    /**
     * Gets all recipes
     */
    it("Get all", function () {
        let recipes = Recipe.getRecipes();
        expect(recipes.length).toEqual(2);
    });

    /**
     * Creates a new recipe
     */
    it("Create", function () {
        let recipe = Recipe.createRecipe(newRecipe);
        newRecipe.id = recipe.id;
        expect(recipe.name).toBe(newRecipe.name);
    });

    /**
     * Gets the recipe created
     */
    it("Get", function () {
        let recipe = Recipe.getRecipe(newRecipe.id);
        expect(recipe.name).toBe(newRecipe.name);
    });

    /**
     * Updates the just created recipe
     */
    it("Update", function () {
        newRecipe.name = "updated";
        let recipe = Recipe.updateRecipe(newRecipe.id, newRecipe);
        expect(recipe.name).toBe(newRecipe.name);
    });

    /**
     * Deletes the just created and updated recipe
     */
    it("Delete", function () {
        let recipe = Recipe.deleteRecipe(newRecipe.id);
        expect(recipe).toEqual(1);
    });
});