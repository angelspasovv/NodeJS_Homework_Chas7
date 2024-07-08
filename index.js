const express = require("express");

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./handlers/recipes");

const app = express();

app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipe);
app.put("/recipes/:index", updateRecipe);
app.delete("/recipes/:index", deleteRecipe);

app.listen(3000, () => console.log("Server running at port 3000!"));
