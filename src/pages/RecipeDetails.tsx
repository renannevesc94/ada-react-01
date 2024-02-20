import { useParams } from "react-router-dom";
import dataRecipes from "../data/dataRecipes.json";
import ItemsList from "../components/ItemList/ItemsList";

export default function RecipeDetails() {
  const { recipeId: id } = useParams();
  const recipe = dataRecipes.recipes.filter(recipe => recipe.id === Number(id))[0];

  return (
    <div className="recipe-details-page">
      <img src={recipe.image} alt="" />
      <div>
        <h1>Receita de {recipe.title}</h1>
        <ItemsList list={recipe.ingredients} title={"Ingredientes"} />
        <ItemsList list={recipe.instructions} title={"Passo a Passo"} />
      </div>
    </div>
  );
}
