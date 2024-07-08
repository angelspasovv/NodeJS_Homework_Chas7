const { read, write } = require("../read-write");

const createRecipe = async (req, res) => {
    const recipes = await read();
    recipes.push(req.body);
    await write(recipes);
    res.status(200).send("Recipe created!");
};


const updateRecipe = async (req, res) => {
    const recipeIndex = Number(req.params.index);
    const recipeData = req.body;

    let recipes = await read();

    recipes = recipes.map((recipe, index) => {
        if (index === recipeIndex) {

            return {
                ...recipe,
                ...recipeData,
            };
        } else {
            return recipe;
        }
    });

    await write(recipes);
    res.status(200).send("Recipe updated!")
};

const getRecipes = async (req, res) => {
    const data = await read();
    res.status(200).send(data);
};

const deleteRecipe = async (req, res) => {
    const recipeIndex = req.params.index;
    let recipes = await read();
    recipes = recipes.filter(
        (recipe, index) => index !== Number(recipeIndex)
    );

    await write(recipes);

    res.status(200).send("Recipe deleted!");
};

module.exports = {
    getRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipe,
};
